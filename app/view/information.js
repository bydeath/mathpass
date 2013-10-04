/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-5
 * Time: 下午11:20
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.information',{
    extend:'Ext.Panel',
    xtype:'informationview',
    requires: [
        'Ext.TitleBar'
    ],
    config:{
        //id:'information',
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
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Information for MathPASS</h3></p><p>MathPASS Instructions The following tools and utilities are available to you for use here at MathPASS. Familiarizing yourself with these tools will help you get things done quicker and easier.</p><ul><li><h4>User's Guide</h4><p>This contains step by step instructions to accomplish virtually any task on Math Pass.click here to view the user's guide.</p></li><li><h4>Instructor Guide</h4><p>This contains instructions for instructor to use MathPASS.Click here to open the instructor guide.</p></li><li><h4>Syntax Chart</h4><p>This contains syntax instructions for user to enter any mathematical expression. </p></li><li><h4>System requirement</h4><p>To work with MathPASS, you should check and set up your browser as the directions.</p></li></ul></div>"
                ]
            }
        ]
    }
});
