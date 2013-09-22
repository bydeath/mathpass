Ext.define('MathPASS.view.studentMain', {
    extend: 'Ext.tab.Panel',
    xtype: 'studentmainview',
    requires: [
        'Ext.TitleBar',
        'MathPASS.view.studentpage',
        'MathPASS.view.information',
        'MathPASS.store.userinfo',
        'MathPASS.model.userinfo'
    ],
    config: {
        fullscreen:true,
        objfirstname: '123',
        objlastname:'456',
        //tabBarPosition: 'bottom',
        id:'studentmainview',
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
                xtype:'studentpageview',
                styleHtmlContent: true,
                scrollable: true
            },
            {
                title: 'FindaClass',
                iconCls:'home',
                xtype:'studentFindaClassview',
                styleHtmlContent: true,
                scrollable: true
            },
            {
                title: 'Grades',
                iconCls:'home',
                xtype:'studentGradesview',
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
        //var userId = userInfoData.getAt(0).get('userId');
        this.config.objfirstname = firstName;
        this.config.objlastname = lastName;
        var updataValue1 = this.config.objfirstname;
        var updataValue2 = this.config.objlastname;
        var finallyValue = updataValue1+updataValue2;
        this.down('studentpageview').down('label').setHtml(finallyValue);
    }
});
