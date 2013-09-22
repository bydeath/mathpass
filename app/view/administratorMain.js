/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-20
 * Time: 下午4:21
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.view.administratorMain', {
    extend: 'Ext.tab.Panel',
    xtype: 'administratorMainview',
    requires: [
        'Ext.TitleBar',
        'MathPASS.view.administratorUsers',
        'MathPASS.view.administratorProblems',
        'MathPASS.view.administratorItAnaly',
        'MathPASS.view.information',
        'MathPASS.store.userinfo',
        'MathPASS.model.userinfo'
    ],
    config: {
        //tabBarPosition: 'bottom',
        id:'administratorMainview',
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
                title: '<a href="users/index.html">Users</a>',
                iconCls:'team',
                xtype:'administratorUsersview',
                styleHtmlContent: true,
                scrollable: true
            },
            {
                title: '<a href="problems/index.html">Problems</a>',
                iconCls:'home',
                xtype:'administratorProblemsview',
                styleHtmlContent: true,
                scrollable: true
            },
            {
                title: '<a href="itemanalysis/index.html">ItemAnalysis</a>',
                iconCls:'home',
                xtype:'administratorItAnalyview',
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
    }
});
