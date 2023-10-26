from odoo import models , fields , api
from odoo.exceptions import  ValidationError
from datetime import date


class ITIStudent(models.Model):

    _name = 'iti.student'
    _rec_name = 'name'

    name = fields.Char(required = True)
    age = fields.Integer(compute='_compute_age')
    graduate_age = fields.Integer(compute='_compute_age')
    gender = fields.Selection([('Male','male') , ('Female','female')] , required = 1)
    birth_date = fields.Date()
    is_accepted = fields.Boolean()
    is_working = fields.Boolean(default = False)

    salary = fields.Float()
    info = fields.Text()

    cv = fields.Html()

    level = fields.Selection([('level1' , 'Prep') , ('level2' , 'Sec') , ('level3', 'Graduate')] , default = 'level1')
    track_id = fields.Many2one('iti.track')
    track_capacity = fields.Integer(related='track_id.capacity')

    log_levels = fields.One2many('iti.student.level.log' , 'student_id')

    _sql_constraints = [
        ('unique_student_name' , 'UNIQUE(name)' , 'Name already exist')
        # ('age_range' , 'CHECK(age >0)' , 'Error age less than 0')
    ]
    def accept_action(self):
        for rec in self :
            rec.is_accepted = True


    @api.onchange('track_id')
    def warn_track_change(self):
        for rec in self:
            if rec.track_id :
                rec.level = 'level1'
                return {
                    'warning': {
                        'title': ("Track Change Warning"),
                        'message': 'Track is Changed to %s'%rec.track_id.track_name
                    }
                }

    @api.onchange('level')
    def log_creation(self):
        for rec in self :
            vals = {
                'student_id': rec.id,
                'description': 'level changed to %s'%rec.level
            }
            rec.env['iti.student.level.log'].create(vals)


    @api.constrains('age')
    def check_age(self):
        for rec in self :
            if rec.age <= 0 :
                raise ValidationError('Age can\'t be less than zero')

    @api.depends('birth_date')
    def _compute_age(self):
        for rec in self:
            if rec.birth_date:
                today = date.today()
                rec.age = today.year - rec.birth_date.year - (
                        (today.month, today.day) < (rec.birth_date.month, rec.birth_date.day))
            else:
                rec.age = 1
            rec.graduate_age = rec.age + 5
