Ext.define('MathPASS.view.exportgrade',{
    extend:'Ext.Container',
    requires:['MathPASS.model.Class'],
    requires:['MathPASS.model.Assignment'],
    view:[
        'MathPASS.view.ChapterList',
    ],
    xtype:'exportgradeview',
    config:{
        layout:{
            type:'fit'
        },
        items:[
            {
                xtype:'titlebar',
                dock:'top',
                items:[
                    {
                        xtype:'selectfield',
                        id:'classforteacSelectfield',
                        name:'class',
                        valueField:'courseId',
                        displayField:'title',
                        store:'Class'
                    },
                    {
                    xtype:'button',
                    text:'Select All',
                    id:'selectallassignment',
                    handler:function(){
                        if(Ext.getCmp('assignmentdataview').getSelectionCount()>0)
                            Ext.getCmp('assignmentdataview').deselectAll();
                        else
                            Ext.getCmp('assignmentdataview').selectAll();
                    }
                },
                {
                    xtype:'button',
                    text:'view the grade',
                    id:'viewgrade',
                    align:'right',
                }
                ]
            },
            {
                xtype: 'dataview',
                id:'assignmentdataview',
                store:'Assignment_teacher',
                mode:'multi',
                baseCls:'assignment',
                //flex:'3',
                items:[
                    {

                        xtype:'panel',
                        docked:'top',
                        layout:'hbox',
                        items:[
                            {
                                baseCls:'assignment-title',
                                html:'Assignment Name'
                            },
                            {
                                baseCls:'assignment-title',
                                html:'Type'
                            },
                            {
                                baseCls:'assignment-title',
                                html:'Start Date'
                            },
                            {
                                baseCls:'assignment-title',
                                html:'Due Date'
                            }
                        ]
                    }
                ],
                itemTpl: '<div>{assignmentTitle}</div><div>{assignmentType}</div><div>{startDate}</div><div>{dueDate}</div>',
                //height:200,
            },
            {
                xtype:'formpanel',
                id:'displayType',
                //flex:'3',
                docked:'bottom',
                items: [
                    {
                        styleHtmlContent: true,
                        html: [
                            "<div><h4>Please Select Display Format</h4></div>"
                        ]
                    },
                    {
                        xtype: 'radiofield',
                        name : 'displayformat',
                        value: '1',
                        label: 'Percentage',
                        checked: true
                    },
                    {
                        xtype: 'radiofield',
                        name : 'displayformat',
                        value: '2',
                        label: 'Number Correct'
                    },
                    {
                        xtype: 'radiofield',
                        name : 'displayformat',
                        value: '3',
                        label: 'Number Correct out of Number of Questions'
                    }
                ]  
            },
        ]
    }
});
