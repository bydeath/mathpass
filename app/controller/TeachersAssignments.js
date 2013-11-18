Ext.define('MathPASS.controller.TeachersAssignments', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            teachersAssignment:'teacherAssignmentsview',
            teachersclass:'#teachersclass',
        },
        control: {

        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
   // var classdata=Ext.create('MathPASS.model.Class',
    //{
     //   courseId:'0',
      //  title:'All Class'
    //}
    //);
 //   this.getTeachersclass().getStore().getData().add(classdata);
//    console.log('class:',this.getTeachersclass().getStore().getData());
  //  this.getTeachersclass().getStore().load();
    }
});
