/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-27
 * Time: 下午11:17
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.controller.contactus',{
    extend:'Ext.app.Controller',
    requires:[
        'MathPASS.view.contactus'
    ],
    config:{
        refs:{
            contactview:'#contactview',
            txt_youremail:'#txt_youremail',
            txt_yourname:'#txt_yourname',
            txt_Message:'#txt_Message',
            select_subject:'#select_subject',
            btn_send:'#btn_send'
        },
        control:{
            btn_send:{
                tap:'btn_send_ontap'
            }
        }
    },
    btn_send_ontap:function(){
        var youremailValue = this.getTxt_youremail().getValue(),
            yournameValue = this.getTxt_yourname().getValue(),
            yourmessageValue = this.getTxt_Message().getValue(),
            yourselect_subject=this.getSelect_subject().getValue();
        var user = Ext.create('MathPASS.model.contactus',
            {youremail:youremailValue,yourname:yournameValue,Message:yourmessageValue});
        var errors=user.validate();
        if(errors.isValid()){
            Ext.Viewport.setMasked({
                xtype:'loadmask',
                message:'Signing In...'
            });
            Ext.Ajax.request({
                url:'sendemail.php',
                params:{
                    email:youremailValue,
                    name:yournameValue,
                    message:yourmessageValue,
                    subject:yourselect_subject
                },
                scope:this,
                success:function(response){
                    var responseText = Ext.decode(response.responseText);
                    if(responseText.success==true){
                        Ext.Viewport.setMasked(false);
                        Ext.Msg.alert('send success!');
                    }
                    else{
                        Ext.Viewport.setMasked(false);
                        Ext.Msg.alert('send failure!');
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
