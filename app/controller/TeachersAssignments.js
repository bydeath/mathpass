Ext.define('MathPASS.controller.TeachersAssignments', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            teachersAssignment:'teacherAssignmentsview',
            teachersass:'#assignmentdatav',
            addBtn:'#addBtn',
            problemSet:'ProblemSet',
            problemSelected:'#problemSelected_dataview'
        },
        control: {
            addBtn:{
                tap:'addAssignment'
            }
        }
    },
    addAssignment:function(){
        var formpanel=Ext.create('Ext.form.Panel',{
            modal: true,
            hideOnMaskTap: false,
            centered: true,
            height: '100%',
            width:'100%',
            layout:'vbox',
            items: [
                {
                    docked:'top',
                    xtype:'toolbar',
                    title:'Add Assignment'
                },
                {
                    docked: 'bottom',
                    xtype: 'toolbar',
                    items: [
                        {
                            text: '确定',           
                            handler: function() {
                                var currentAssignment =Ext.create('MathPASS.model.Assignment');
                                //var problemField=formpanel.getComponent('problemFieldset');
                                //var panelProblem=problemField.getComponent('panelProblem');
                                //var panelproblemSelected=panelProblem.getComponent('problemSelected_dataview');
                                console.log('problems:',Ext.getCmp('problemSelected_dataview').getStore().getData());
                                    formpanel.updateRecord(currentAssignment);
                                    console.log('currentAss:',currentAssignment);
                                //    var errors = currentStudent.validate();   
                                //    if(errors.isValid())
                                    //    {    
                                        currentAssignment.save({
                                            success:function() {
                                                this.getTeachersass.getStore().load();
                                                this.getTeachersass.refresh();
                                            }
                                        });
                                        //       formpanel.hide();                   
                                        //    }
        //    else {
            //        currentStudent.reject();
            //        var message = "";
            //        Ext.each(errors.items,function(rec){
                //            message += rec.getMessage()+"<br>";
        //        });
        //        Ext.Msg.alert("验证失败", message);                                    
        //    }                        
                            }
                        },
                        {
                            xtype: 'spacer'
                        },
                        {
                            text: '取消',
                            handler: function() {
                                formpanel.destroy();
                            }
                        }]
                },
                {
                    xtype: 'fieldset',
                    title:'Assignment Information',
                    items: [{
                        xtype:'textfield',
                        name:'assignmentTitle',
                        label:'Title',
                        maxLength:10,
                        placeHolder:'Please enter assignment title',
                        required:true,
                        clearIcon: true                    
                    },
                    {
                    xtype: 'selectfield',
                    name:'assignmentType',
                    label: 'Type',
                    options: [
                        {text: 'Homework',  value: '1'},
                        {text: 'Quiz', value: '2'},
                        {text: 'Test',  value: '3'}
                    ]
                    },
                    {
                    xtype: 'selectfield',
                    name:'takes',
                    label: 'Takes',
                    options: [
                        {text: 'unlimited',  value: '0'},
                        {text: '1', value: '1'},
                        {text: '2',  value: '2'},
                        {text: '3',  value: '3'},
                        {text: '4',  value: '4'},
                        {text: '5',  value: '5'},
                        {text: '6',  value: '6'},
                        {text: '7',  value: '7'},
                        {text: '8',  value: '8'},
                        {text: '9',  value: '9'},
                        {text: '10',  value: '10'},
                        {text: '11',  value: '11'},
                        {text: '12',  value: '12'},
                        {text: '13',  value: '13'},
                        {text: '14',  value: '14'},
                        {text: '15',  value: '15'}
                    ]
                    },
                    {
                        xtype: 'togglefield',
                        name: 'shared',
                        value: 0,
                        label: 'Shared',
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        name: 'password'
                    }
                    ]
                },
                {
                    xtype:'fieldset',
                    title:'Class Assignments',
                    name:'courses',
                    items:[
                    {
                        xtype: 'checkboxfield',
                        name : 'tomato',
                        label: 'Tomato',
                        value: 'tomato',
                        checked: true
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'salami',
                        label: 'Salami'
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Start Date',
                        name: 'startDate',
                        value: new Date()
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Due Date',
                        name: 'dueDate',
                        value: new Date()
                    },
                    ]
                },
                {
                    xtype:'fieldset',
                    title:'Problem Set',
                    name:'problem',
                    id:'problemFieldset',
                    items:[
                    {
                        xtype:'ProblemSet'
                    }
                    ]
                },
            ]
        });
        Ext.Viewport.add(formpanel);
        //var student = Ext.create('Student',{number:'',
            //    name: '',age:0,phone:'' }); 
            //    formpanel.setRecord(student);
            //    formpanel.show();
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
