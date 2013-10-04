Ext.define('MathPASS.view.practice',{
    extend:'Ext.Container',
requires:[
    'MathPASS.model.pcourse'
    ],
view:[
    'MathPASS.view.ChapterList',
],
xtype:'practiceview',
config:{
    layout:{
        type:'vbox',
        //pack:'center'
    },
items:[
{
xtype:'selectfield',
id:'courseSelectfield',
name:'pcourse',
valueField:'pcourseid',
label:'Course:',
displayField:'name',
store:'pcourse'
}, 
{
    xtype:'panel',
    id:'panel_chapandpro',
    layout:{
        type:'hbox'
    },
    items:[
{
    xtype: 'chapterlistpanel',
    height:500,
    id:'chapterdataview',
    flex: 3
},
{
    xtype: 'problemdataview',
    id:'problemdataview',
    height:500,
    flex: 5
}
        ]
},
{
    xtype:'button',
    text:'Take this practice',
    id:'button_takepractice'
}
    ]
    }});
