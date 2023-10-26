from odoo import models, fields


class HMSPatientLog(models.Model):
    _name = 'hms.patient.log'
    _description = 'Patient Log'
    _rec_name = 'created_by'
    created_by = fields.Many2one('res.users', string='Created By', default=lambda self: self.env.user)
    date = fields.Date(string='Date', default=lambda self: fields.Date.today())
    description = fields.Text(string='Description')
    patient_id = fields.Many2one('hms.patient', readonly=True, string='Patient')
