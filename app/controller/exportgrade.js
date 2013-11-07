Ext.define('MathPASS.controller.exportgrade', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
          exportgradeview:'exportgradeview',
          classselectfield:'#classforteacSelectfield',
          button_viewgrade:'#viewgrade',
          assignmentdataview:'#assignmentdataview'
        },
        control: {
           classselectfield:{
               change:'classChanged' 
           } 
        }
    },
    classChanged:function(select,newValue,oldValue){
        console.log("class chenged");
        this.getAssignmentdataview().getStore().clearFilter();
        this.getAssignmentdataview().getStore().filter('courseid',newValue);                        
        this.getAssignmentdataview().getStore().load();
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
    }
});
