from odoo import fields , models ,api


class ITI_Student_Level_Log(models.Model):

    _name = 'iti.student.level.log'

    description = fields.Char(required=True)
    student_id = fields.Many2one('iti.student')



