/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-20
 * Time: 下午4:35
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.administratorProblems',{
    extend:'Ext.Panel',
    xtype:'administratorProblemsview',
    requires: [
        'Ext.TitleBar'
    ],
    config:{
        id:'administratorProblemsview',
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
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Problems</h3></p><h4>In this page,when you click the link of Problems at bottom,you can see all the description of the problem.Then you can click<br><br> the edit button to edit the description of problems,after that you can click the button of back to go back.</h4></div>"
                ]
            }
        ]
    }
});
