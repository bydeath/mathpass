Ext.define('MathPASS.model.Assignment', {
    extend: 'Ext.data.Model',

    
    config: {
        fields: [
            { name: 'assignmentTitle', type: 'auto' },
            { name: 'assignmentType', type: 'auto' },
            { name: 'takes', type: 'auto' },
            { name: 'shared', type: 'auto' },
            { name: 'password', type: 'auto' },
            { name: 'startDate', type: 'auto' },
            { name: 'dueDate', type: 'auto' },
            { name: 'assignmentId', type: 'auto' },
            { name: 'assignmentOwner', type: 'auto' },
            { name: 'assignmentCreator', type: 'auto' },
            { name: 'problem', type: 'auto' },
            { name: 'courses', type: 'auto' },

        ],
            proxy:{
                type:'rest',
                url:'fetchAssignment_teacher.php',
                reader:{
                    type:'json'
                },
                listeners: { 
                    exception:function(proxy,response)
                    {
                        if(Ext.decode(response.responseText)!=null)
                        Ext.Msg.alert(Ext.decode(response.responseText).message);
                    }
                }
            }
    }
});
