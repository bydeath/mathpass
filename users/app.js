Ext.require([
    'Ext.DataView',
    'Ext.TitleBar',
    'Ext.form.Panel',
    'Ext.form.FieldSet',
    'Ext.field.Email',
'Ext.field.Password',
'Ext.MessageBox',
    'Ext.field.Hidden'
])
Ext.define('Type',{
    extend:'Ext.data.Model',
    config:{
        fields:['id','name','userCount'],
        hasMany:{
            model:'User',
            name:'users'
        },
        proxy:{
            type:'rest',
            url:'types.php'
        }
    }
});
Ext.define('User',{
    extend:'Ext.data.Model',
    config:{
        fields:['id','typeID','email','firstName','lastName','password'],
        validations:[                     
            {type: 'email',field:'email',message:'请输入有效的email地址'},      
            {type:'presence',field:'password',message: '密码必须输入'}, 
            {type:'length',field: 'password',min:7,message:'密码长度必须超过六位'},
	   {type:'presence',field:'firstName',message: 'firstName必须输入'},
	{type:'presence',field:'lastName',message: 'lastName必须输入'}
 	    
        ],
        proxy: {
            type: 'rest',
            url : 'users.php',
            appendId:true,
            writer:{
                type:'json'
            },
            listeners: { 
                exception:function(proxy,response)
                {
                    Ext.Msg.alert(Ext.decode(response.responseText).message);
                }
            }
        }
    }
});
Ext.application({
    name: 'MyApp',
    icon: 'images/icon.png',
    glossOnIcon: false,
    phoneStartupScreen: 'images/phone_startup.png',
    tabletStartupScreen: 'images/tablet_startup.png',
    launch: function() { 
        var typeStore=Ext.create('Ext.data.Store',{
            model:'Type',
            autoLoad:true,
            autoSync:false
        });
        var template = new Ext.XTemplate(              
            '<div class="type">',
                '<div class="header">',
                '<h3>{name}(User Count:{userCount})</h3><input type="button" class="normal_btn" id="addBtn" value=" Add "/>',  
                '</div>',            
                '<div class="listHeader">',
		    '<div class="title">UserId</div>',
                    
                    '<div class="title">Email</div>',
		    '<div class="title">Last Name</div>',
                    
                    '<div class="title">First Name</div>',
                    '<div class="title">Edit</div>',
                    '<div class="title">Delete</div>',
		    
                '</div>',
                '<tpl for="users">',
                    '<div class="users">',
                       '<div>{id}</div>',
                        '<div>{email}</div>',                          
                        
                        '<div>{lastName}</div>',
			'<div>{firstName}</div>',
                        '<div><input type="button" class="normal_btn" id="editBtn" value=" Edit "/></div>',
                        '<div><input type="button" class="normal_btn" id="deleteBtn" value=" Delete "/></div>',
                        '<div style="display:none">{password}</div>',
			 '<div style="display:none">{typeID}</div>',
                    '</div>',
                '</tpl>',
            '</div>'                   
        );
        var titleBar=Ext.create('Ext.TitleBar',{
            docked:'top',
            title:'User',
	    items: [{
                ui: 'back',
                align: 'left',
                text: '<a href="../index.html">back</a>',
                action: 'back'

            }]
        });
        var formpanel=Ext.create('Ext.form.Panel',{
            modal: true,
            hideOnMaskTap: false,
            centered: true,
            height: 350,
            width:'100%',
            layout:'vbox',
            items: [
            {
                docked:'top',
                xtype:'toolbar',
                title:'Edit Users\' Information'
            },
            {
                docked: 'bottom',
                xtype: 'toolbar',
                items: [
                {
                    text: 'Submit',           
                    handler: function() {
                        var id=Ext.ComponentManager.get('id').getValue();
                        var currentType=dataview.getSelection()[0];                    
                        var userStore=currentType.users();
                        if(id=="-1")    
                            var currentUser =Ext.create('User');
                        else                 
                            var currentUser =userStore.getById(id);
                        formpanel.updateRecord(currentUser);
                        var errors = currentUser.validate();   
                        if(errors.isValid())
                        {    
                           if(id=="-1") 
                               userStore.add(currentUser); 
                           currentUser.save({
                               success:function()
                               {
                                   typeStore.load(); 
                                   dataview.refresh();

                               }
                           });
                           formpanel.hide();                   
                        }
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
                        formpanel.hide();
                    }
                }]
            },
            {
                xtype: 'fieldset',
                items: [{
                    xtype:'emailfield',
                    name:'email',
                    label:'Email',
                    maxLength:40,
                    placeHolder:'Please enter your email',
                    required:true,
                    clearIcon: true                    
                },
                {
                    xtype:'textfield',
                    name:'firstName',
                    label:'FirstName',                    
                    maxLength:20,
                    placeHolder:'Please enter your firstname',
                    required:true,
                    clearIcon: true
                },
                {
                    xtype:'textfield',
                    name:'lastName',
                    label:'LastName',                    
                    maxLength:20,
                    placeHolder:'Please enter your lastname',
                    required:true,
                    clearIcon: true
                },
                {
                    xtype:'passwordfield',
                    name:'password',
                    label:'Password',
                    maxLength:20,
                    placeHolder:'Please enter your password',
                    required:true,
                    clearIcon: true                    
                },
                {
                    xtype:'hiddenfield',
                    name:'id',
                    id:'id'
                }]
            }]
        });
        var dataview=Ext.create('Ext.DataView',{
            items:titleBar,
            itemTpl:template,
            store:typeStore,
            listeners:{
                itemtap:function(mydataview,index,target,record,e){
                    var target=e.target;
                    if(target.id=="addBtn")
                    {
                        Ext.Viewport.add(formpanel);

                        var user = Ext.create('User',{id:-1,typeID:'',firstName: '',lastName: '',email:'',password:'' }); 
                        formpanel.setRecord(user);
                        formpanel.show();
                    }
                    else if(target.id=="editBtn")
                    {
                        Ext.Viewport.add(formpanel);
                        var id=target.parentElement.parentElement.children[0].innerHTML;
			var typeID=target.parentElement.parentElement.children[7].innerHTML;
                        var firstName=target.parentElement.parentElement.children[3].innerHTML;
			var lastName=target.parentElement.parentElement.children[2].innerHTML;
                        var email=target.parentElement.parentElement.children[1].innerHTML;
                       
                        var password=target.parentElement.parentElement.children[6].innerHTML;
                        var user =Ext.create('User',{id:id,typeID:typeID,firstName:firstName,lastName:lastName,email:email,password:password}); 
                        formpanel.setRecord(user);  
                        formpanel.show();
                    }
                    else if(target.id=="deleteBtn")
                    {
                        var id=target.parentElement.parentElement.children[0].innerHTML;                
                        var userStore=record.users();
                        var currentUser =userStore.getById(id);
                        currentUser.erase({
                           success:function()
                           {
                              typeStore.load(); 
				
                               dataview.refresh();
                               
                           }
                       });
                    }
                }
            }
        });
        Ext.Viewport.add(dataview);
    }
});


