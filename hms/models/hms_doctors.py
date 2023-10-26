from odoo import models, fields


class HMSDoctors(models.Model):
    _name = 'hms.doctors'
    _description = 'Doctors'
    _rec_name = 'first_name'
    first_name = fields.Char(string='First Name', required=True)
    last_name = fields.Char(string='Last Name', required=True)
    image = fields.Binary(string='Image')
    patient_ids = fields.Many2many('hms.patient', 'hms_patient_doctors_rel',
                                   'doctor_id', 'patient_id', string='Patients')
    department_id = fields.Many2one('hms.department', string='Department', domain="[('is_opened', '=', True)]")
