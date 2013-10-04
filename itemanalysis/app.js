Ext.require(['Ext.data.Store','Ext.dataview.DataView'])
Ext.application({
	name:'myapp',
	launch:function(){
		Ext.define('Analysis',{
			extend:'Ext.data.Model',
			config:{
				fields:[{name:'problemId'},
					{name:'problemTotalNum'},
{name:'problemCorrectNum'},
{name:'problemNoSimpleNum'},
{name:'problemCorrectRate'},
{name:'answerDetail'}					
				]
			}
		});
		var store=Ext.create('Ext.data.Store',{
			model:'Analysis',
			autoLoad:true,
                        autoDestroy:true,
                        proxy:{
                            type:'ajax',
                            url:'itemanalysis.php',
                            reader:{
                                type:'json'
                            }
                        }

			
		});


var titleBar=Ext.create('Ext.TitleBar',{
            docked:'top',
            title:'Item Analysis',
 	    items: [{
                ui: 'back',
                align: 'left',
                text: '<a href="../index.html">back</a>',
                action: 'back'
            }]
        });
		var panel=Ext.create('Ext.Panel',{
			//docked:'top',
			layout:'hbox',
			items:[
				{baseCls:'title',html:'Problem'},
				{baseCls:'title',html:'Attempts'},
				{baseCls:'title',html:'Correct Attempts'},
				{baseCls:'title',html:'Simplify Error'},
				{baseCls:'title',html:'Percentage Correct'},
				{baseCls:'title',html:'Answer Detail'}

			]
		});
		var dataview=Ext.create('Ext.DataView',{
			fullscreen:true,
			store:store,
			baseCls:'user',
			items:[titleBar,panel],
			itemTpl:'<div>P{problemId}</div><div>{problemTotalNum}</div><div>{problemCorrectNum}</div><div>{problemNoSimpleNum}</div><div>{problemCorrectRate}</div><div><a href="./answerKindAdmin.php?number={answerDetail}&page=1">Answer Detail For P{answerDetail}</a></div>'
		});
		Ext.Viewport.add(dataview);

	}
});
