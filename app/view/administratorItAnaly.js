/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-20
 * Time: 下午4:38
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.administratorItAnaly',{
    extend:'Ext.Panel',
    xtype:'administratorItAnalyview',
    requires: [
        'Ext.TitleBar'
    ],
    config:{
        id:'administratorItAnalyview',
        scroll: 'vertical',
	layout: {type: 'vbox', align: 'center'},
        items:[
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'MathPASS Welcome'
            },
            {
                styleHtmlContent: true,
                html: [
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Item Analysis</h3></p><h4>In this page,when you click the link of ItemAnalysis at bottom,you can see  the analysis of all problem.There are the correct<br><br>rates for each problem.Then you can click the answer details to see each problem,after that you can click the button of back<br><br>to go back.</h4></div>"
                ]
            }
        ]
    }
});
