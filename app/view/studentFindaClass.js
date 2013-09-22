/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-11
 * Time: 上午6:57
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.studentFindaClass',{
    extend:'Ext.Panel',
    xtype:'studentFindaClassview',
    requires: [
        'Ext.TitleBar'
    ],
    config:{
        id:'studentFindaClassview',
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
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Add To A Class</h3></p>Please find your class by class ID or teacher name. Enter the class password if need(consult your teacher about the password). Then click 'Add To This Class' button to register into the class.<br>You can find your class by these two methods:</div>"
                ]
            }
        ]
    }
});