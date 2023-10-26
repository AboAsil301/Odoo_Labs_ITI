{
    'name': 'Hospitals Management System',
    'version': '0.1',
    'summary': 'Manage hospital patients',
    'description': 'A module to manage hospital patients in Odoo.',
    'author': 'Ahmed Reda',
    'depends': ['base'],
    'data': [
        'views/hms_department_views.xml',
        'views/hms_doctors_views.xml',
        'views/hms_patient_views.xml',
        'views/inherit_hospital_customers_view.xml',
        'reports/hms_patient_template.xml',
        'reports/reports.xml'

    ],

    'installable': True,
    'auto_install': False,
    'application': True,
}
