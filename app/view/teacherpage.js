/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-20
 * Time: 上午10:56
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.teacherpage',{
    extend:'Ext.Panel',
    xtype:'teacherpageview',
    requires: [
        'Ext.TitleBar',
        'Ext.Img',
        'MathPASS.store.userinfo',
        'MathPASS.model.userinfo'
    ],
    config:{
        id:'teacherpageview',
        scroll: 'vertical',
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
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Your Students</h3></p>Below you will find a list of all your students from every class. To narrow the results to only show students for a particular class. Use the drop down list above the student list to select a specific class. If you want to remove a student from your class, click the trash can icon beside the student's name. </div>"
                ]
            }
        ]
    }

});