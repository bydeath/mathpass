Ext.define('MathPASS.model.Assignments', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'assignmentId', type: 'auto' },
            { name: 'assignmentTitle', type: 'auto' },
            { name: 'assignmentType', type: 'auto' },
            { name: 'shared', type: 'auto' },
            { name: 'startDate', type: 'auto' },
            { name: 'dueDate', type: 'auto' }

        ],
        proxy:{
            type:'rest',
            appendId:true,
            writer:{
                type:'json',
            },
            reader:{
                type:'json'
            },
            url:'Assignments.php',
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
