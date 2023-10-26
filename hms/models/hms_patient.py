from datetime import datetime

from odoo import models, fields, api, exceptions


class HMSPatient(models.Model):
    _name = 'hms.patient'
    _description = 'Hospital Patient'
    _rec_name = 'first_name'
    STATES = [
        ('undetermined', 'Undetermined'),
        ('good', 'Good'),
        ('fair', 'Fair'),
        ('serious', 'Serious'),
    ]

    first_name = fields.Char(string='First Name', required=True)
    last_name = fields.Char(string='Last Name', required=True)
    birth_date = fields.Date(string='Birth Date')
    history = fields.Html(string='History')
    cr_ratio = fields.Float(string='CR Ratio')
    blood_type = fields.Selection([
        ('A', 'A'),
        ('B', 'B'),
        ('AB', 'AB'),
        ('O', 'O'),
    ], string='Blood Type')
    pcr = fields.Boolean(string='PCR')
    image = fields.Binary(string='Image', attachment=True)
    address = fields.Text(string='Address')
    age = fields.Integer(string='Age', compute='_compute_age', store=True)
    state = fields.Selection(STATES, string='State', default='undetermined')
    email = fields.Char(string='Email', required=True, unique=True, help="Patient's email address")
    department_id = fields.Many2one('hms.department', string='Department', domain="[('is_opened', '=', True)]",
                                    readonly=False)
    department_capacity = fields.Integer(string='Department Capacity', related='department_id.capacity', readonly=True)
    doctor_ids = fields.Many2many('hms.doctors', 'hms_patient_doctors_rel', 'patient_id', 'doctor_id', string='Doctors',
                                  readonly=True)

    logs = fields.One2many('hms.patient.log', 'patient_id')

    @api.onchange('state')
    def log_creation(self):
        for rec in self:
            vals = {
                'patient_id': rec.id,
                'description': 'Status changed to %s' % rec.state,
            }
            self.env['hms.patient.log'].create(vals)

    @api.constrains('pcr', 'cr_ratio')
    def _check_pcr_ratio(self):
        if self.pcr and not self.cr_ratio:
            raise exceptions.ValidationError("PCR is checked, but CR Ratio is not set.")

    @api.onchange('age')
    def _onchange_age_pcr(self):
        if self.age < 30:
            self.pcr = True
            return {
                'warning': {
                    'title': 'Warning',
                    'message': 'PCR is automatically checked because age is less than 30.',
                }
            }

    @api.onchange('department_id')
    def _onchange_department_id(self):
        if not self.department_id.is_opened:
            self.department_id = False
            return {
                'warning': {
                    'title': 'Warning',
                    'message': 'Selected department is closed. Please choose an open department.',
                }
            }

    @api.constrains('doctor_ids')
    def _check_doctor_ids(self):
        if self.department_id and not self.doctor_ids:
            self.doctor_ids = self._origin.doctor_ids
        self.doctor_ids = self.doctor_ids

    @api.onchange('department_id')
    def _onchange_department_doctors(self):
        self.doctor_ids = self._origin.doctor_ids

    @api.constrains('pcr', 'cr_ratio')
    def _check_pcr_cr_ratio(self):
        if self.pcr and not self.cr_ratio:
            raise exceptions.ValidationError("PCR is checked, but CR Ratio is not set.")
        if not self.pcr:
            self.cr_ratio = False

    @api.onchange('pcr')
    def _onchange_pcr_age(self):
        if self.pcr and self.age >= 30:
            return {
                'warning': {
                    'title': 'Warning',
                    'message': 'PCR should not be checked for patients above 30 years old.',
                }
            }

    @api.onchange('department_id')
    def _onchange_department_id(self):
        if self.department_id:
            self.doctor_ids = self.department_id.doctors
            return {'domain': {'doctor_ids': [('id', 'in', self.department_id.doctors.ids)]}}
        else:
            self.doctor_ids = False
            return {'domain': {'doctor_ids': []}}

    @api.onchange('email')
    def _check_email(self):
        for patient in self:
            if patient.email:
                if not self._validate_email(patient.email):
                    raise exceptions.ValidationError("Invalid email format. Please enter a valid email address.")
                if self.search_count([('email', '=', patient.email)]) > 1:
                    raise exceptions.ValidationError("Email address must be unique among patients.")

    def _validate_email(self, email):
        return "@" in email and ".com" in email

    @api.depends('birth_date')
    def _compute_age(self):
        for rec in self:
            if rec.birth_date:
                birth_date_str = rec.birth_date.strftime('%Y-%m-%d')
                birth_date = datetime.strptime(birth_date_str, '%Y-%m-%d').date()
                today = datetime.now().date()
                age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))
                rec.age = age
            else:
                rec.age = 0
