/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-9
 * Time: 下午4:35
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.studentpage',{
    extend:'Ext.Panel',
    xtype:'studentpageview',
    requires: [
        'Ext.TitleBar',
        'Ext.Img',
        'MathPASS.store.userinfo',
        'MathPASS.model.userinfo'
    ],
    config:{
        id:'studentpageview',
        scroll: 'vertical',
        //layout: {type:'vbox',align:'center'},
        items:[
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'MathPASS Welcome',
                items: [
                    {
                        text: 'loginoff',
                        ui: 'loginoff',
                        align:'right',
                        handler: function() {
                            var userInfoData=Ext.getStore('UserInfo');
                            userInfoData.removeAll();
                            userInfoData.getProxy().clear();
                            Ext.Viewport.animateActiveItem( Ext.getCmp("mainview"), {type: 'slide', direction: 'left'});
                        }
                    }
                ]
            },
            {   styleHtmlContent: true,
                xtype: 'label',
                html: 'value'
            },
            {
                styleHtmlContent: true,
                html: [
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'>Welcome to your home page. This page will summarize all of your information to allow you to quickly get to what you're looking for.</div>"
                ]
            },
            {
                styleHtmlContent: true,
                html: [
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Your Classmates</h3></p></div>"
                ]
            },
            {
                styleHtmlContent: true,
                html: [
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Your Assignments</h3></p>Below is your list of assignments. Each assignment has an open date and a due date, you must complete the assignment between these two dates. For some assignments you may be allowed to have one or several retakes, review the 'Takes' column to find out which assignments can. To take an assignment, click on the 'take assignment' icon to the left of the assignment name.</div>"
                ]
            }
        ]
    }

});
