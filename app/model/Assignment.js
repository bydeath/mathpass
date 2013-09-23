Ext.define('MathPASS.model.Assignment', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'assignmentId', type: 'auto' },
            { name: 'assignmentTitle', type: 'auto' },
            { name: 'assignmentType', type: 'auto' },
            { name: 'shared', type: 'auto' },
            { name: 'startDate', type: 'auto' },
            { name: 'dueDate', type: 'auto' }

        ]
    }
});
