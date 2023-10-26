from odoo import models , fields , api


class ITIStudentLevelLog(models.Model):

    _name = 'iti.student.level.log'


    student_id = fields.Many2one('iti.student')
    description = fields.Text()
