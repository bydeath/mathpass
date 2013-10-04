Ext.require(['Ext.data.Store','Ext.dataview.DataView'])
Ext.define('Problem',{
			extend:'Ext.data.Model',
			name:'problems',
			config:{
				fields:[{name:'problemId',type:'int'},
					{name:'questionIntro',type:'string'}
					
				],
 				proxy:{
                            		type:'ajax',
                            		url:'problem.php',
                            		reader:{
                                		type:'json'
                            		}
				}
                        }
});

Ext.application({
	name:'myapp',
	launch:function(){	
		var problemStore=Ext.create('Ext.data.Store',{
			model:'Problem',
			autoLoad:true,
            autoDestroy:true
		});
		var template = new Ext.XTemplate(
		'<div class="problem">',
                       
                '<div class="listHeader">',
                    '<div class="title" style="width:10%">Number</div>',
                    '<div class="title" style="width:90%">Description</div>',
                  
                '</div>',
                '<tpl for=".">',
                    '<div class="listHeader">',
                        '<div style="width:10%">{problemId}</div>',
			'<div style="width:80%">{questionIntro}</div>',
			'<div><input type="button" class="normal_btn" id="editBtn" value=" Edit "/></div>',
                    '</div>',
                '</tpl>',
            '</div>'     	
		);


/*var toolbar=Ext.create('Ext.Panel',{
	items:[
       		{
           	 xtype: 'fieldset',
            	 title: 'Problems',
		 html:'Enter the range of the problems:'
		
		}
	]

});
		var panel=Ext.create('Ext.Panel',{
			//docked:'top',
			layout:'hbox',
			items:[
				{baseCls:'title',html:'Number'},
				{baseCls:'title',html:'Description'}

			]
		});*/
	var titleBar=Ext.create('Ext.TitleBar',{
            docked:'top',
            title:'Problems',
 	    items: [{
                ui: 'back',
                align: 'left',
                text: '<a href="../index.html">back</a>',
                action: 'back'

            }]
        });
/*var toolbar=new Ext.Toolbar({
            docked:'top',
            items:[{
                      xtype:'spacer'
                  },
                  editButton
            ]
        });
 var editButton = Ext.create('Ext.Button',{
            text: '修改题目描述',
            disabled: true,
            handler: function() {
                var record = dataview.getSelection()[0];
                var description=record.get('questionIntro');
                Ext.Msg.prompt('编辑题目描述','请输入题目描述',
                function(button,value){
                    if(button=='ok'&&value!=''){
                        var record =dataview.getSelection()[0];
                        record.set('questionIntro',value);
                    }
                },
                this,
                false,
                discription,{width:280});                
            }
        });*/

       var formPanel=Ext.create('Ext.form.Panel',{
            modal: true,
            hideOnMaskTap: false,
            centered: true,
	url:'post.php',
            height: 350,
            width:'100%',
            layout:'vbox',
            items: [
            {
                docked:'top',
                xtype:'toolbar',
                title:'Edit Title Description'
            },
            {
                docked: 'bottom',
                xtype: 'toolbar',
                items: [
                {
                    text:'Submit',
                    handler:function(){
                        var model = Ext.create('Problem',formPanel.getValues());
                        var errors = model.validate();
                        if(errors.isValid())
                            formPanel.submit({
                                success:function(){
                                    Ext.Msg.alert('SUCCESS','Title edited successfully！');
					 problemStore.load(); 
                                   dataview.refresh();
			
				 formPanel.hide();    
                                },
                                failure:function(form,result){
                                    var message="";
                                    Ext.each(result.errors,function(rec,i){
                                        message += rec.message+"<br>";
                                    });
                                    Ext.Msg.alert("Edit failed！", message);
                                }
                            });
                        else {
                            var message = "";
                            Ext.each(errors.items,function(rec){                            
                                message += rec.getMessage()+"<br>";
                            });
                            Ext.Msg.alert("Validation failed!", message);
                        }
                    }
                              
                                         
                        
                                              
                   
                },
                {
                    xtype: 'spacer'
                },
                {
                    text: 'Cancel',
                    handler: function() {
                        formPanel.hide();
                    }
                }]
            },
            {
                xtype: 'fieldset',
                items: [{
                    xtype:'textfield',
                    name:'questionIntro',
		    id:'questionIntro',
                    label:'Problems Description',
                    maxLength:200,
                    
                    required:true,
                    clearIcon: true                    
                },
                {
                    xtype:'hiddenfield',
                    name:'problemId',
                    id:'id'
                }]
            }]
        });
		var dataview=Ext.create('Ext.DataView',{
			items:titleBar,
			fullscreen:true,
			store:problemStore,
			baseCls:'problem',
			//items:[toolbar,panel],
			itemTpl:template,
 listeners:{
                itemtap:function(mydataview,index,target,record,e){
                    var target=e.target;
                   if(target.id=="editBtn")
                    {
                        Ext.Viewport.add(formPanel);
                        var id=target.parentElement.parentElement.children[0].innerHTML;
			var questionIntro=target.parentElement.parentElement.children[1].innerHTML;
                      
                        var problem =Ext.create('Problem',{problemId:id,questionIntro:questionIntro}); 
                        formPanel.setRecord(problem);  
                        formPanel.show();
                    }
                   
                }
            }
		});
		Ext.Viewport.add(dataview);

	}
});
