{
    'name': 'Custom HMS Module',
    'version': '.0',
    'category': 'Custom',
    'summary': 'Customization for linking patients and customers',
    'description': 'Custom module to link patients and customers in CRM.',
    'depends': ['crm'],  # Add any other dependencies as needed.
    'data': [
        'views/res_partner_views.xml',  # Create this file for custom views.
    ],
    'installable': True,
    'application': True,
    'auto_install': False,
}
