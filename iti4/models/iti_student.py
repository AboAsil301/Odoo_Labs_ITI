from odoo import fields , models ,api
from odoo.exceptions import  ValidationError
from datetime import date

class ITI_Student(models.Model):

    _name = 'iti.student'

    name = fields.Char(required=True)
    age = fields.Integer(compute = '_compute_age', store=True)

    graduate_age = fields.Integer(compute = '_compute_age')
    salary = fields.Float()
    cv = fields.Html()
    gender = fields.Selection([('Male' , 'm') ,('Female', 'f')] ,required=True)

    level = fields.Selection([('level1' ,'Prep' ),('level2', 'Sec') , ('level3', 'Graduate')] , default = 'level1')

    is_working = fields.Boolean()
    birth_date = fields.Date()

    track_id = fields.Many2one(comodel_name='iti.track')
    track_capacity = fields.Integer(related='track_id.capacity')

    level_logs = fields.One2many('iti.student.level.log' , 'student_id')

    _sql_constraints = [
        ('unique_student_name' , 'UNIQUE(name)' , 'Student Name must be Unique')
    ]

    @api.constrains('age')
    def check_age(self):
        for rec in self:
            if rec.age < 0 :
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

    def set_working(self):
        for rec in self:
            rec.is_working = True


    @api.onchange('track_id')
    def show_warning(self):
        for rec in self :
            if rec.track_id :
                rec.level = 'level1'
                return {
                    'warning': {
                        'title': ('Track Changed'),
                        'message': 'Track is changed %s' %(rec.track_id.name)
                    }
                }


    @api.onchange('level')
    def create_level_log(self):
        for rec in self:
            vals = {
                'description':'Level changed to %s'%(rec.level),
                'student_id': rec.id
            }
            rec.env['iti.student.level.log'].create(vals)
        
    
    def unlink(self):
        for rec in self :
            if rec.level!='level3':
                super(ITI_Student, rec).unlink()
        
