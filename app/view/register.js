Ext.define('MathPASS.view.register',{
	extend:'Ext.form.Panel',
	xtype:'registerview',
	requires:[
		'Ext.form.Panel',
		'Ext.form.FieldSet',
		'Ext.field.Password'
	],
config:
{
	id:'registerview',
    styleHtmlContent: true,
    items:[
    {
        xtype: 'titlebar',
        docked: 'top',
        title: 'MathPASS Welcome',
        items: [
            {
                text: 'back',
                ui: 'back',
                handler: function() {
                    Ext.Viewport.animateActiveItem( Ext.getCmp("mainview"), {type: 'slide', direction: 'right'});
                }
            }
        ]
    },
    {
        xtype:'fieldset',
        title:'Register',
        defaults:{
            labelwidth:'20%'
        },

    items:[
        {
            xtype: 'emailfield',
            id:'txt_regisemail',
            name : 'email',
            label: 'Email',
            placeHolder:'Please enter a valid email address',
            required:true,
            clearIcon: true
        },
        {
            xtype: 'emailfield',
            id:'txt_confirmemail',
            name : 'confirmemail',
            label: 'Confirm Email',
            placeHolder:'Please confirm your email address',
            required:true,
            clearIcon: true
        },
        {
            xtype:'passwordfield',
            id:'txt_regispassword',
            name:'password',
            label:'Password',
            placeHolder:'Please enter password',
            required:true,
            clearIcon:true
        },
        {
            xtype:'passwordfield',
            id:'txt_confirmpassword',
            name:'confirmpassword',
            label:'Confirm Password',
            placeHolder:'Please enter password again',
            required:true,
            clearIcon:true
        },
        {
            xtype:'textfield',
            id:'txt_lastname',
            name:'lastname',
            label:'Last Name',
            placeHolder:'please Enter your last name',
            required:true,
            clearIcon:true
        },
        {
            xtype:'textfield',
            id:'txt_firstname',
            name:'firstname',
            label:'First Name',
            placeHolder:'please Enter your first name',
            required:true,
            clearIcon:true
        },
        {
			xtype:'selectfield',
            id:'select_usertype',
			label:'Choose',
			options:[
			{text:'Administrator',value:'1'},
			{text: 'Teacher',value:'2'},
			{text:'Student',value:'3'}
			]
		},
        {
            xtype:'passwordfield',
            id:'txt_accesscode',
            name:'accesscode',
            label:'Access Code',
            required:true,
            clearIcon:true
        },
		{
			xtype:'panel',
			layout:{
				type:'hbox',
				pack:'end'
			},
			defaults:{
					     xtype:'button'
					 },
			items:[
			{
				ui:'action',
                id:'btn_register',
				text:'Create'
			}
			]
		}
    ]
    }
]
}
});
