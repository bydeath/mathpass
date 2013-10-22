//var panel=Ext.create('Ext.Panel',{
//    docked:'top',
//    width:'100%',
//    layout:'hbox',
//    items:[
//        {
//            html:'<table class="dataintable"><tr><td>Assignmetn Name</td><td>Type</td><td>Start Date</td><td>Due Date</td></tr></table>'
//        }
//    ]
//});
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
        title:'afd',
        items:[
            {
                xtype:'titlebar',
                dock:'top',
                title:'Export student grades'
            },
            {
                styleHtmlContent: true,
                html: [
                    "<div><h3>Choose assignments which you want to export.</h3><h4>Step 1:Select Classes</h4></div>"
                ]
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
                baseCls:'user',
                items:[
                    {

                        xtype:"panel",
                        docked:'top',
                        width:'100%',
                        layout:'hbox',
                        items:[
                            {
                                html:'<table class="dataintable"><tr><td>Assignmetn Name</td><td>Type</td><td>Start Date</td><td>Due Date</td></tr></table>'
                            }
                        ]
                    }
                ],
                itemTpl: '<div>{assignmentTitle}</div><div>{assignmentType}</div><div>{startDate}</div><div>{dueDate}</div>',
                height:200,
            },
            {
                xtype:'panel',
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
