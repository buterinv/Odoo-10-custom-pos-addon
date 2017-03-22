odoo.define('pos_fisc.models_extended', function (require){
    "use strict";
	
	var module = require ('point_of_sale.models');
	var _super_posmodel = models.PosModel.prototype;
	var _super_order = models.Order.prototype;
	
	/* 
	module.PosModel = module.PosModel.extend({
		initialize: function (session, attributes) {
			
			var models = module.PosModel.prototype.models;
			/*
			models.model.push({
				model: 	'pos.order',
				fields:	['x_ZKI_broj','x_JIR_broj','x_datumvrijeme_izdavanja','x_fiskalni_broj_naloga'],
				loaded: function(self, fiskalizacija){self.fiskalizacija_podaci = fiskalizacija[0];}
			});
			
			*/
			/*
			models.load_models([{
				model:'pos.order',
				fields:	['x_ZKI_broj','x_JIR_broj','x_datumvrijeme_izdavanja','x_fiskalni_broj_naloga'],
				loaded: function(self, fiskalizacija){self.fiskalizacija_podaci = fiskalizacija[0];
				},
			}],{'after':'product.product'});
			
			
			return _super_posmodel.initialize.call(this, session, attributes);
		},
	});
	*/
	/*
	module.Order = module.Order.extend({
		
		init_from_JSON: function(json) {
			var client;
			this.sequence_number = json.sequence_number;
			this.pos.pos_session.sequence_number = Math.max(this.sequence_number+1,this.pos.pos_session.sequence_number);
			this.session_id    = json.pos_session_id;
			this.uid = json.uid;
			this.name = _t("Order ") + this.uid;
			this.validation_date = json.creation_date;
			this.x_datumvrijeme_izdavanja = json.x_datumvrijeme_izdavanja;
			this.x_ZKI_broj = json.x_ZKI_broj;

			if (json.fiscal_position_id) {
				var fiscal_position = _.find(this.pos.fiscal_positions, function (fp) {
					return fp.id === json.fiscal_position_id;
				});

				if (fiscal_position) {
					this.fiscal_position = fiscal_position;
				} else {
					console.error('ERROR: trying to load a fiscal position not available in the pos');
				}
			}

			if (json.partner_id) {
				client = this.pos.db.get_partner_by_id(json.partner_id);
				if (!client) {
					console.error('ERROR: trying to load a parner not available in the pos');
				}
			} else {
				client = null;
			}
			this.set_client(client);

			this.temporary = false;     // FIXME
			this.to_invoice = false;    // FIXME

			var orderlines = json.lines;
			for (var i = 0; i < orderlines.length; i++) {
				var orderline = orderlines[i][2];
				this.add_orderline(new exports.Orderline({}, {pos: this.pos, order: this, json: orderline}));
			}

			var paymentlines = json.statement_ids;
			for (var i = 0; i < paymentlines.length; i++) {
				var paymentline = paymentlines[i][2];
				var newpaymentline = new exports.Paymentline({},{pos: this.pos, order: this, json: paymentline});
				this.paymentlines.add(newpaymentline);

				if (i === paymentlines.length - 1) {
					this.select_paymentline(newpaymentline);
				}
			}
			return _super_order.init_from_JSON.call(this, session, attributes);
		},
   		
		export_for_printing: function (session, attributes){
			//var x_datumvrijeme_izdavanja = this.pos.fiskalizacija_podaci.x_datumvrijeme_izdavanja;
			var receipt = {
				x_datumvrijeme_izdavanja: this.pos.x_datumvrijeme_izdavanja,
				x_ZKI_broj: this.pos.x_ZKI_broj,
				orderlines: orderlines,
				paymentlines: paymentlines,
				subtotal: this.get_subtotal(),
				total_with_tax: this.get_total_with_tax(),
				total_without_tax: this.get_total_without_tax(),
				total_tax: this.get_total_tax(),
				total_paid: this.get_total_paid(),
				total_discount: this.get_total_discount(),
				tax_details: this.get_tax_details(),
				change: this.get_change(),
				name : this.get_name(),
				client: client ? client.name : null ,
				invoice_id: null,   //TODO
				cashier: cashier ? cashier.name : null,
				precision: {
					price: 2,
					money: 2,
					quantity: 3,
				},
				date: { 
					year: date.getFullYear(), 
					month: date.getMonth(), 
					date: date.getDate(),       // day of the month 
					day: date.getDay(),         // day of the week 
					hour: date.getHours(), 
					minute: date.getMinutes() ,
					isostring: date.toISOString(),
					localestring: date.toLocaleString(),
				}, 
				company:{
					email: company.email,
					website: company.website,
					company_registry: company.company_registry,
					contact_address: company.partner_id[1], 
					vat: company.vat,
					name: company.name,
					phone: company.phone,
					logo:  this.pos.company_logo_base64,
				},
				shop:{
					name: shop.name,
				},
				currency: this.pos.currency,
			};
			return _super_order.export_for_printing.call(this, session, attributes);
		},
		
	});
	*/
	
});
	
