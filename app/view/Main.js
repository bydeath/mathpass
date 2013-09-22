Ext.define('MathPASS.view.Main', {
     extend: 'Ext.tab.Panel',
xtype: 'mainview',
requires: [
    'Ext.TitleBar',
    'MathPASS.view.homepage',
    'MathPASS.view.practice',
    'MathPASS.view.information',
    'MathPASS.view.contactus'
    ],
config: {
    //fullscreen: true,
    //autoHeight: true,
    //tabBarPosition: 'bottom',
    id:'mainview',
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
    xtype:'homepageview',
    styleHtmlContent: true,
    scrollable: true
},
{
    title: 'Practice',
    iconCls:'compose',
    xtype:'practiceview',
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
},
{
    title:'Contact US',
    iconCls:'locate',
    xtype:'contactview',
    scrollbar:true,
    styleHtmlContent: true,
    scrollable: true
}
]
}
});
