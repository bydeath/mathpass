/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-20
 * Time: 下午2:51
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.teacherItemAnalysis',{
    extend:'Ext.Panel',
    xtype:'teacherItemAnalysisview',
    requires: [
        'Ext.TitleBar'
    ],
    config:{
        id:'teacherItemAnalysisview',
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
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Item Analysis</h3></p>Below are the correct rates for each problem.</div>"
                ]
            }
        ]
    }
});