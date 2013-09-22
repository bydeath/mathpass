Ext.define('MathPASS.controller.login',{
	extend:'Ext.app.Controller',
    requires:[
        'MathPASS.view.Main',
        'MathPASS.view.studentMain',
        'MathPASS.view.teacherMain',
        'MathPASS.view.administratorMain',
        'MathPASS.store.userinfo',
        'MathPASS.model.userinfo'
    ],
config:{
	refs:{
		mainview:'mainview',
        homepageview:'homepageview',
        txt_email:'#txt_email',
        txt_password:'#txt_password',
        btn_login:'#btn_login'
	},
    control:{
	    btn_login:{
		    tap:'btn_login_ontap'
	    }
    }
},
btn_login_ontap:function(){
    var emailValue = this.getTxt_email().getValue(),
        passwordValue = this.getTxt_password().getValue();
    var user = Ext.create('MathPASS.model.login',
        {email:emailValue,password:passwordValue});
    var errors=user.validate();
    if(errors.isValid()){
        Ext.Viewport.setMasked({
            xtype:'loadmask',
            message:'Signing In...'
        });
        Ext.Ajax.request({
            url:'finduser.php',
            params:{
                email:emailValue,
                password:passwordValue
            },
            scope:this,
            success:function(response){
                var responseText = Ext.decode(response.responseText);
                if(responseText.success==true){
                    var resultdata = responseText.data;
                    var obj;
                    for(var i=0;i<resultdata.length;i++)
                    {
                         obj=resultdata[i];
                    }
                    var  objfirstname = obj.firstName;
                    var  objlastname = obj.lastName;
                    var  objtype = obj.type;
                    var  objuserId = obj.userId;
                    var userInfoData=Ext.getStore('UserInfo');
                    userInfoData.removeAll();
                    userInfoData.getProxy().clear();
                    userInfoData.add({login_status:objtype,firstName:objfirstname,lastName:objlastname,userId:objuserId});
                    userInfoData.sync();
                    var status = userInfoData.getAt(0).get('login_status');
                    Ext.Viewport.setMasked(false);
                    if(status==3){
                        Ext.getCmp("studentmainview").updateConfigValue();
                        Ext.Viewport.animateActiveItem(Ext.getCmp("studentmainview"), { type: 'slide', direction: 'left'});
                    }else if(status==2){
                        Ext.getCmp("teachermainview").updateConfigValue();
                        Ext.Viewport.animateActiveItem(Ext.getCmp("teachermainview"), { type: 'slide', direction: 'left'});
                    }else if(status==1){
                        Ext.Viewport.animateActiveItem(Ext.getCmp("administratorMainview"), { type: 'slide', direction: 'left'});
                    }
                }
                else{
                   Ext.Viewport.setMasked(false);
                   Ext.Msg.alert('登录失败',responseText.message);
                }
            },
            failure:function(){
                Ext.Viewport.setMasked(false);
                Ext.Msg.alert('请求失败','AJAX请求发送失败!');
            }
        });
    }
    else{
        var message = "";
        Ext.each(errors.items,function(rec){
            message += rec.getMessage()+"<br>";
        });
        Ext.Msg.alert("验证失败",message);
    }
}
});
