Ext.define('MathPASS.controller.ProblemSet', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            problemSet:'ProblemSet',
            problem:'#problem_dataview',
            problemSelected:'#problemSelected_dataview',
        },
        control: {
            problem:{
                itemtap:'addProblem'
            },
            problemSelected:{
                itemdoubletap:'deleteProblem'
            }
        }
    },
    addProblem:function(dataview,index,item,record,e){
        console.log('record add',record);
        Ext.getCmp('problemSelected_dataview').getStore().add(record);
        console.log('data:',Ext.getCmp('problemSelected_dataview').getStore());
    },
    deleteProblem:function(dataview,index,item,record,e){
        console.log('record delete',record);
        Ext.getCmp('problemSelected_dataview').getStore().remove(record);
        console.log('data:',Ext.getCmp('problemSelected_dataview').getStore());
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
