/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-11
 * Time: 上午7:08
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.studentGrades',{
    extend:'Ext.Panel',
    xtype:'studentGradesview',
    requires: [
        'Ext.TitleBar'
    ],
    config:{
        id:'studentGradesview',
        scroll: 'vertical',
        //layout: {type: 'vbox', align: 'center'},
        items:[
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'MathPASS Welcome'
            },
            {
                styleHtmlContent: true,
                html: [
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Your Grades</h3></p>Below are your grades for each in which you are or has been enrolled</div>"
                ]
            }
        ]
    }
});