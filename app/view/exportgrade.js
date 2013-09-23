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
                styleHtmlContent: true,
                html: [
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Export student grades</h3></p>Choose assignments which you want to export.</div>"
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
    xtype: 'dataview',
    store:'Assignment_teacher',
itemTpl: '<div>{assignmentTitle}</div>',
    height:500,
    flex: 5
}
        ]
    }
});
