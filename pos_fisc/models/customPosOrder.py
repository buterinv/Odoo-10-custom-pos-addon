# -*- coding: utf-8 -*-

import random
from odoo import models, fields, api

class CustomPosOrder(models.Model):
	_inherit = 'pos.order'
	
	x_ZKI_broj = fields.Char(string='ZKI', readonly=True, default='')
	x_JIR_broj = fields.Char(string='JIR', readonly=True, default='')
	x_datumvrijeme_izdavanja = fields.Datetime(string='Datum izdavanja', readonly=True, index=True)
	x_fiskalni_broj_naloga = fields.Char(string='Fiskalni broj naloga', readonly=True, default='')
	
	@api.multi
	def action_pos_order_paid(self):
		if not self.test_paid():
			raise UserError(_("Order is not paid."))
		self.write({'state': 'paid'})
		self.fiskaliziraj()
		return self.create_picking()
	
	@api.multi
	def fiskaliziraj(self):
		if self.state == 'paid':
			namelist = self.name.split('/')
			naziv_blagajne = namelist[0]
			broj_racuna = namelist[1]
			mala_slova = 'abcdef'
			brojevi = '01236456789'
			fbrn = '/'.join( (broj_racuna,'oznakaposlovnogprostora', naziv_blagajne))
			zki = ''.join([random.choice(mala_slova + brojevi) for i in xrange(32)]) 
			jir = ''.join([random.choice(mala_slova + brojevi) for i in xrange(32)])
			self.write({'x_ZKI_broj': zki, 'x_JIR_broj': jir, 'x_fiskalni_broj_naloga': fbrn, 'x_datumvrijeme_izdavanja': fields.Datetime.now()})
			return {}
	