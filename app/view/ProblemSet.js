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
                                        Ext.getCmp('problem_dataview').getStore().removeAll();
                                        Ext.getCmp('problem_dataview').getStore().clearFilter();
                                        Ext.getCmp('problem_dataview').getStore().filter('pcourseId',Ext.getCmp('pcourse_selectfield').getRecord().get('pcourseid'));
                                        Ext.getCmp('problem_dataview').getStore().filter('chapterId',newValue);
                                        Ext.getCmp('problem_dataview').getStore().load();
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
                        id:'problem_dataview',
                        mode:'multi',
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
                        items:[
                            {
                                xtype:'button',
                                iconCls:'arrow_right',
                                handler:function(){
                                var problemSelected=Ext.getCmp('problem_dataview').getSelection();
                                console.log('selection:',problemSelected);
                                    //var problemSelected = Ext.create("Ext.data.Store", {
                                    //    model: "MathPASS.model.Problem",
                                    //    //problemSelected.add
                                    //});
                                    Ext.getCmp('problemSelected_dataview').getStore().setData(problemSelected);
                                    Ext.getCmp('problemSelected_dataview').getStore().load();
                                    console.log('problem;',Ext.getCmp('problem_dataview').getStore());
                                    console.log('selected;',Ext.getCmp('problemSelected_dataview').getStore());
                                }
                            },
                            {
                                xtype:'button',
                                iconCls:'arrow_left',
                                handler:function(){
                                    var dataRemove= Ext.getCmp('problemSelected_dataview').getSelection();
                                    Ext.getCmp('problemSelected_dataview').getStore().remove(dataRemove);
                                    Ext.getCmp('problemSelected_dataview').getStore().load();
                                }
                            }

                        ]
                    },
                    {
                        xtype:'dataview',
                        id:'problemSelected_dataview',
                        store:Ext.create('Ext.data.Store',{model:'MathPASS.model.Problem',autoLoad:true}),
                        mode:'multi',
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

