Ext.define('MathPASS.controller.exportgrade', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
          exportgradeview:'exportgradeview',
          classselectfield:'classforteacSelectfield',
          button_viewgrade:'viewgrade'
        },
        control: {
           classelectfield:{
               change:'classChanged' 
           } 
        }
    },
    classChanged:function(select,newValue,oldValue){
        Ext.Msg.alert('classChanged');
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
    }
});
