Ext.define('MathPASS.model.Course', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'courseid', type: 'auto' },
            { name: 'fk_user_teacher', type: 'auto' },
            { name: 'title', type: 'auto' },
            { name: 'startDate', type: 'auto' },
            { name: 'endDate', type: 'auto' },
            { name: 'days', type: 'auto' },
            { name: 'room', type: 'auto' },
            { name: 'active', type: 'auto' },
            { name: 'password', type: 'auto' }

        ]
    }
});
