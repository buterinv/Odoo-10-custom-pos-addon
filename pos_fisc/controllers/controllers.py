# -*- coding: utf-8 -*-
from odoo import http

# class PosFisc(http.Controller):
#     @http.route('/pos_fisc/pos_fisc/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/pos_fisc/pos_fisc/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('pos_fisc.listing', {
#             'root': '/pos_fisc/pos_fisc',
#             'objects': http.request.env['pos_fisc.pos_fisc'].search([]),
#         })

#     @http.route('/pos_fisc/pos_fisc/objects/<model("pos_fisc.pos_fisc"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('pos_fisc.object', {
#             'object': obj
#         })