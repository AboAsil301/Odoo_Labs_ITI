from odoo import models , fields , api


class ITIProductTemplate(models.Model):

   _inherit = 'product.template'
   # _name = 'product.template.two'


   barcode2 = fields.Char()

   barcode = fields.Char(required=True)


