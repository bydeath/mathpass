/**
* Created with JetBrains WebStorm.
* User: yangruiyang
* Date: 13-8-20
* Time: 下午3:13
* To change this template use File | Settings | File Templates.
*/
Ext.define('MathPASS.view.teacherAssignments',{
    extend:'Ext.Panel',
    xtype:'teacherAssignmentsview',
    requires: [
        'Ext.TitleBar',
        'MathPASS.store.Class'
    ],
    config:{
        id:'teacherAssignmentsview',
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
                        title: 'MathPASS Welcome',
                        items:[{
                            xtype:'selectfield',
                            id:'sel_class',
                            name:'class',
                            placeHolder:'Select Class',
                            valueField:'courseId',
                            displayField:'title',
                            store:'Class',
                            listeners:{
                                change:function(select,newValue,oldValue){ 
                                    var userId="";
                                    var userInfoData=Ext.getStore('UserInfo');
                                    console.log('userinfo',userInfoData);
                                    if(null!=userInfoData.getAt(0)){
                                        userId = userInfoData.getAt(0).get('userId');
                                    };
                                    Ext.getCmp('assignmentdatav').getStore().clearFilter();                                     
                                    Ext.getCmp('assignmentdatav').getStore().filter('userid',userId);                            
                                    Ext.getCmp('assignmentdatav').getStore().filter('classid',newValue);                            
                                    Ext.getCmp('assignmentdatav').getStore().load();
                                    if(newValue==-1)
                                          Ext.getCmp('addBtn').setDisabled(true);
                                    else
                                        Ext.getCmp('addBtn').setDisabled(false);
                                } 
                            } 
                        },
                        {
                            xtype:'button',
                            id:'addBtn',
                            iconMask:true,
                            iconCls: 'add',
                            disabled: true,
                            handler:function(){
                            }
                        }
                        ]

                    },
                    {
                        xtype:'container',
                        baseCls:'assignment-title1',
                        html:'Assignment Title'
                    },
                    {
                        xtype:'container',
                        baseCls:'assignment-title1',
                        html:'Type'
                    },
                    {
                        xtype:'container',
                        baseCls:'assignment-title1',
                        html:'Start Date'
                    },
                    {
                        xtype:'container',
                        baseCls:'assignment-title1',
                        html:'Due Date'
                    },
                    {
                        xtype:'container',
                        baseCls:'assignment-title1',
                        html:'Shared'
                    },
                    {
                        xtype:'container',
                        baseCls:'assignment-title1',
                        html:'Edit'
                    },
                    {
                        xtype:'container',
                        baseCls:'assignment-title1',
                        html:'Delete'
                    }
                ]
            },
            {
                xtype:'dataview',
                id:'assignmentdatav',
                store:'Assignment_teacher',
                itemTpl: 
                new Ext.XTemplate(
                    '<div class="students">',
                    '<div>{assignmentTitle}</div>',
                    '<div>{assignmentType}</div>',
                    '<div>{startDate}</div>',
                    '<div>{dueDate}</div>',
                    '<div>{shared}</div>',
                    '<div><input type="button" class="normal_btn" id="editBtn" value=" Edit "/></div>',
                    '<div><input type="button" class="normal_btn" id="deleteBtn" value=" Delete "/></div>',
                    '</div>'
                ),
            }
        ]
    }
});
