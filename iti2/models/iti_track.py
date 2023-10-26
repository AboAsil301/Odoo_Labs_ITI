from odoo import models , fields


class ITITrack(models.Model):

    _name = 'iti.track'
    _rec_name = 'track_name'

    track_name = fields.Char()
    capacity = fields.Integer()
    is_opened = fields.Boolean()

    student_ids = fields.One2many('iti.student' , 'track_id')

