from odoo import models , fields , api


class ITIStudent(models.Model):

    _name = 'iti.student'
    _rec_name = 'name'

    name = fields.Char(required = True)
    age = fields.Integer()
    gender = fields.Selection([('Male','male') , ('Female','female')] , required = 1)
    birth_date = fields.Date()
    is_accepted = fields.Boolean()
    is_working = fields.Boolean(default = True)

    salary = fields.Float()
    info = fields.Text()

    cv = fields.Html()

    level = fields.Selection([('level1' , 'Prep') , ('level2' , 'Sec') , ('level3', 'Graduate')] , default = 'level1')
    track_id = fields.Many2one('iti.track')
    track_capacity = fields.Integer(related='track_id.capacity')


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