Ext.define('MathPASS.model.TeacherClass', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'courseId', type: 'auto' },
            { name: 'title', type: 'auto' }

        ],
        hasMany:{
            model:'Assignments',
            name:'assignments'
        },
        proxy:{
            type:'rest',
            url:'fetchTeacherClass.php',
            listeners: { 
                exception:function(proxy,response)
                {
                    Ext.Msg.alert(Ext.decode(response.responseText).message);
                }
            }
        }
    }
});
