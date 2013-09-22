/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-5
 * Time: 下午11:20
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.contactus',{
    extend:'Ext.Panel',
    xtype:'contactview',
    requires: [
        'Ext.TitleBar'
    ],
    config:{
        id:'contactview',
        scroll: 'vertical',
        items:[
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'MathPASS Welcome'
            },
            {
                styleHtmlContent: true,
                html: [
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Instructions</h3></p>Use the form below to send us an email. If you require a response, a member of our team will get back to you as shortly as possible.</div>"
                ]
            },
            {
                xtype:'fieldset',
                title:'Contact US',
                defaults:{
                    labelwidth:'20%'
                },

                items:[
                    {
                        xtype: 'emailfield',
                        id:'txt_youremail',
                        name : 'youremail',
                        label: 'Your Email',
                        placeHolder:'Please enter your email address',
                        required:true,
                        clearIcon: true
                    },
                    {
                        xtype:'textfield',
                        id:'txt_yourname',
                        name:'yourname',
                        label:'Your Name',
                        placeHolder:'please Enter your name',
                        required:true,
                        clearIcon:true
                    },
                    {
                        xtype:'selectfield',
                        id:'select_subject',
                        label:'Subject',
                        options:[
                            {text:'General Inquiry',value:'General Inquiry'},
                            {text:'Questions about using MathPass',value:'Questions about using MathPass'},
                            {text:'Report Errors or Broken Links',value:'Report Errors or Broken Links'}
                        ]
                    },
                    {
                        xtype:'textareafield',
                        id:'txt_Message',
                        name:'Message',
                        label:'Message',
                        maxRows: 5,
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
                                id:'btn_send',
                                text:'Send'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
