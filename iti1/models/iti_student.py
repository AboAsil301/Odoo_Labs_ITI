from odoo import models , fields


class ITIStudent(models.Model):

    _name = 'iti.student'

    name = fields.Char()
    age = fields.Integer()
    gender = fields.Selection([('Male','male') , ('Female','female')])
    birth_date = fields.Date()
    is_accepted = fields.Boolean()

    salary = fields.Float()
    info = fields.Text()

    cv = fields.Html()