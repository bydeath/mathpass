/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-20
 * Time: 上午10:46
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.teacherMain', {
    extend: 'Ext.tab.Panel',
    xtype: 'teachermainview',
    requires: [
        'Ext.TitleBar',
        'MathPASS.view.teacherpage',
        'MathPASS.view.teacherItemAnalysis',
        'MathPASS.view.teacherAssignments',
        'MathPASS.view.teacherExportGrade',
        'MathPASS.view.information',
        'MathPASS.store.userinfo',
        'MathPASS.model.userinfo'
    ],
    config: {
        objfirstname: '123',
        objlastname:'456',
        //tabBarPosition: 'bottom',
        id:'teachermainview',
        tabBar: {
            // Dock it to the bottom
            docked: 'bottom',

            // Change the layout so each of the tabs are centered vertically and horizontally
            layout: {
                pack: 'center',
                align: 'center'
            },

            // Make the tabbar scrollable horizontally, and disabled the indicators
            scrollable: {
                direction: 'horizontal',
                indicators: false
            }
        },
        items: [
            {
                title: 'Welcome',
                iconCls:'home',
                xtype:'teacherpageview',
                styleHtmlContent: true,
                scrollable: true
            },
            {
                title: 'Assignments',
                iconCls:'home',
                xtype:'teacherAssignmentsview',
                styleHtmlContent: true,
                scrollable: true
            },
            {
                title: 'ExportGrade',
                iconCls:'home',
                xtype:'teacherExportGradeview',
                styleHtmlContent: true,
                scrollable: true
            },
            {
                title: 'ItemAnalysis',
                iconCls:'home',
                xtype:'teacherItemAnalysisview',
                styleHtmlContent: true,
                scrollable: true
            },
            {
                title:'Information',
                iconCls:'info',
                xtype:'informationview',
                scrollbar:true,
                styleHtmlContent: true,
                scrollable: true
            }
        ]
    },
    updateConfigValue:function(){
        var userInfoData=Ext.getStore('UserInfo');
        var firstName = userInfoData.getAt(0).get('firstName');
        var lastName = userInfoData.getAt(0).get('lastName');
        this.config.objfirstname = firstName;
        this.config.objlastname = lastName;
        var updataValue1 = this.config.objfirstname;
        var updataValue2 = this.config.objlastname;
        var finallyValue = updataValue1+updataValue2;
        this.down('teacherpageview').down('label').setHtml(finallyValue);
    }
});
