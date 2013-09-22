/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-20
 * Time: 下午3:52
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.teacherExportGrade',{
    extend:'Ext.Panel',
    xtype:'teacherExportGradeview',
    requires: [
        'Ext.TitleBar'
    ],
    config:{
        id:'teacherExportGradeview',
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
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Export student grades</h3></p>Choose assignments which you want to export.</div>"
                ]
            }
        ]
    }
});