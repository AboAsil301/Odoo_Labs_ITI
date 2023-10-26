from odoo import fields , models


class IIT_Product(models.Model):

    _inherit = 'product.template'

    barcode2 = fields.Char()




