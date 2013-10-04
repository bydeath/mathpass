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
        'Ext.TitleBar'
    ],
    config:{
        id:'teacherAssignmentsview',
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
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Your Assignments</h3></p>Below you will find a list of all your assignments. If you would like to import a shared assignment from another teacher, click on the Shared Assignments item in the sub menu . To delete an assignment click on the trash can icon beside the assignment's name. If you would like to modify an assignment click the modify icon also located beside the assignment's name. If you would like to create a new assignment, you may do so by clicking on the Add Assignment item in the sub menu.</div>"
                ]
            }
        ]
    }
});