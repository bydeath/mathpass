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
            type:'vbox'
        },
        items:[
            {
                xtype:'titlebar',
                dock:'top',
                title:'Export student grades'
            },
            {
                xtype:'selectfield',
                id:'classforteacSelectfield',
                name:'class',
                valueField:'courseId',
                label:'Select Class',
                displayField:'title',
                store:'Class'
            },
            {
                styleHtmlContent: true,
                html: [
                    "<div><h4>Step 2:Select Assignments</h4></div>"
                ]
            },
            {
                xtype: 'dataview',
                id:'assignmentdataview',
                store:'Assignment_teacher',
                baseCls:'assignment',
                flex:'3',
                items:[
                    {

                        xtype:"panel",
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
                xtype:'panel',
                flex:'3',
                items: [
                    {
                        styleHtmlContent: true,
                        html: [
                            "<div><h4>Step 3:Select Display Format</h4></div>"
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
            {
                xtype:'button',
                text:'view the grade',
                id:'viewgrade'
            }
        ]
    }
});
