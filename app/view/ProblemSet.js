Ext.define('MathPASS.view.ProblemSet',{
    extend:'Ext.Panel',
    xtype:'ProblemSet',
    requires: [
        'Ext.TitleBar',
        'MathPASS.model.pcourse',
        'MathPASS.model.Chapter',
        'MathPASS.model.Problem'
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
                        items:[
                        {
                            xtype:'selectfield',
                            id:'pcourse_selectfield',
                            placeHolder:'Select Course',
                            name:'pcourse',
                            valueField:'pcourseid',
                            label:'Course:',
                            displayField:'name',
                            store:'pcourse',
                            listeners:{
                                change:function(select,newValue,oldValue){ 
                                   Ext.getCmp('chapter_selectfield').getStore().clearFilter();                                     
                                   Ext.getCmp('chapter_selectfield').getStore().filter('pcourseid',newValue);                                     
                                   Ext.getCmp('chapter_selectfield').getStore().load();                                     
                                } 
                            } 
                        },
                        {
                            xtype:'selectfield',
                            id:'chapter_selectfield',
                            //placeHolder:'Select Course',
                            name:'chapter',
                            valueField:'chapterId',
                            label:'Chapter:',
                            displayField:'title',
                            store:'Chapter',
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
    xtype:'panel',
    layout:'hbox',
    items:[
            {
                xtype:'dataview',
                id:'problem',
                store:'Problem',
                flex:2,
                height:500,
                itemTpl: 
                new Ext.XTemplate(
                    '<div class="problems">',
                    '<div>{title}</div>',
                    '</div>'
                ),
            },
            {
                xtype:'panel',
                layout:'hbox',
                //centered:true,
                items:[
            {
            xtype:'button',
            iconCls:'arrow_right'
            },
            {
            xtype:'button',
            iconCls:'arrow_left'
            }
                    
                    ]
            },
            {
                xtype:'dataview',
                id:'problem2',
                store:'Problem',
                flex:2,
                height:500,
                itemTpl: 
                new Ext.XTemplate(
                    '<div class="problems">',
                    '<div>{title}</div>',
                    '</div>'
                ),
            }
        ]
}
        ]
    }
});

