Ext.define('MathPASS.controller.register',{
    extend:'Ext.app.Controller',
    requires:[
        'MathPASS.view.register'
    ],
config:{
    refs:{
        mainview:'mainview',
        registerview:'registerview',
        txt_email:'#txt_regisemail',
        txt_confirmemail:'#txt_confirmemail',
        txt_password:'#txt_regispassword',
        txt_confirmpassword:'#txt_confirmpassword',
        txt_lastname:'#txt_lastname',
        txt_firstname:'#txt_firstname',
        select_usertype:'#select_usertype',
        txt_accesscode:'#txt_accesscode',
        btn_register:'#btn_register'
    },
control:{
    btn_register:{
        tap:'btn_register_ontap'
    }
}
},
btn_register_ontap:function(){
   var emailValue=this.getTxt_email().getValue(),
       confirmemailValue=this.getTxt_confirmemail().getValue(),
       passwordValue=this.getTxt_password().getValue(),
       confirmpasswordValue=this.getTxt_confirmpassword().getValue(),
       lastnameValue=this.getTxt_lastname().getValue(),
       firstnameValue=this.getTxt_firstname().getValue(),
       accesscodeValue=this.getTxt_accesscode().getValue(),
       select_usertypeValue=this.getSelect_usertype().getValue();
   var flagemail;
   if(emailValue==confirmemailValue){
       flagemail=true;
   }else{
       flagemail=false;
   }
   var flagepassword;
   if(passwordValue==confirmpasswordValue){
       flagepassword=true;
   }else{
       flagepassword=false;
   }
   var register=Ext.create('MathPASS.model.register',
       {email:emailValue,confirmemail:confirmemailValue,
        password:passwordValue,confirmpassword:confirmpasswordValue,
        lastname:lastnameValue,firstname:firstnameValue,
        accesscode:accesscodeValue,usertype:select_usertypeValue
       });
   var errors = register.validate();
   if(errors.isValid()&&flagemail&&flagepassword){
       Ext.Ajax.request({
           url:'users.php',
           params:{
               email:emailValue,
               password:passwordValue,
               lastname:lastnameValue,
               firstname:firstnameValue,
               usertype:select_usertypeValue
           },
           success:function(response,success){
               responseText = Ext.decode(response.responseText);
               if(responseText.success==true)
               {
                   Ext.Msg.alert('注册成功','用户注册成功！',function(e){
                       if(e=='ok'){
                           Ext.Viewport.animateActiveItem(Ext.getCmp("mainview"), { type: 'slide', direction: 'left' });
                       }
                   });
               }
               else
                  Ext.Msg.alert('注册失败',responseText.message);
           },
           failure:function(){
               Ext.Msg.alert('请求失败','Ajax请求发送失败！');
           }
       });
   }
   else{
       var message="";
       Ext.each(errors.items,function(rec){
           message+=rec.getMessage()+"<br>";
       });
       if(!flagemail){
           message+="Email do not match!"+"<br>";
       }
       if(!flagepassword){
           message+="Password do not match!"+"<br>";
       }
       Ext.Msg.alert("验证失败",message);
   }
}
});
