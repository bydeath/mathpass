Ext.define('MathPASS.view.ProblemSet',{
    extend:'Ext.Panel',
    xtype:'ProblemSet',
    requires: [
        'Ext.TitleBar',
        'MathPASS.model.pcourse'
    ],
    config:{
        id:'ProblemSet',
        layout:'fit',
        items:[
            {
                xtype:'panel',
                layout:'hbox',
                docked:'top',
                items:[
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        items:[{
                            xtype:'selectfield',
                            id:'pcourse_problemset',
                            placeHolder:'Select Course',
                            name:'pcourse',
                            valueField:'pcourseid',
                            label:'Course:',
                            displayField:'name',
                            store:'pcourse',
                            listeners:{
                                change:function(select,newValue,oldValue){ 
                                //    var userId="";
                                //    var userInfoData=Ext.getStore('UserInfo');
                                //    console.log('userinfo',userInfoData);
                                //    if(null!=userInfoData.getAt(0)){
                                //        userId = userInfoData.getAt(0).get('userId');
                                //    };
                                //    Ext.getCmp('assignmentdatav').getStore().clearFilter();                                     
                                //    Ext.getCmp('assignmentdatav').getStore().filter('userid',userId);                            
                                //    Ext.getCmp('assignmentdatav').getStore().filter('classid',newValue);                            
                                //    Ext.getCmp('assignmentdatav').getStore().load();
                                //    if(newValue==-1)
                                //          Ext.getCmp('addBtn').setDisabled(true);
                                //    else
                                //        Ext.getCmp('addBtn').setDisabled(false);
                                } 
                            } 
                        }
                        ]

                    },
                ]
            },
            {
                xtype:'dataview',
                id:'problem',
            }
        ]
    }
});

