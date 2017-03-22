# -*- coding: utf-8 -*-
{
    'name': "pos_fisc",
    'summary': """
        Fiskalizacija bez fiskalizacije""",
    'description': """
        Fiskalizacija bez fiskalizacije
    """,
    'author': "Vanja Buterin",
    'category': 'Point of Sale',
    'version': '0.1',
	'depends': ['point_of_sale'],
    'data': [
        'views/views.xml',
		'views/template.xml',		
    ],
	'qweb':['static/src/xml/templates.xml',],
    'demo': [],
	'installable': True,
    'application': True,
    'auto_install': False,
}