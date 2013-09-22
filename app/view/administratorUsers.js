/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-20
 * Time: 下午4:25
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.administratorUsers',{
    extend:'Ext.Panel',
    xtype:'administratorUsersview',
    requires: [
        'Ext.TitleBar'
    ],
    config:{
        id:'administratorUsersview',
        scroll: 'vertical',
        layout: {type: 'vbox', align: 'center'},
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
            {
               styleHtmlContent: true,
               html: [
                    "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Users</h3></p><h4>Welcome to the administrator page of MathPASS! <br><br>In this page,you can see all users when you click the link of users. When you enter the users page,there are three kinds of<br><br> users,administrator,teacher and student. In this page,you can add user,edit or delete. Then you can click the button of back<br><br>to go back. Whenever you are ready to logoff. Simply click here or use the \"logoff\" item in the main menu at the top of the <br><br>page.</h4></div>"
                ] 
            }
        ]
    }
});
