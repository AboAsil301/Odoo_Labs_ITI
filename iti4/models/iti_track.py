from odoo import fields , models


class ITI_Track(models.Model):

    _name = 'iti.track'

    name = fields.Char()
    capacity = fields.Integer()

    is_opened = fields.Boolean(default = False)

    description = fields.Text()

    student_ids = fields.One2many('iti.student' , 'track_id')




