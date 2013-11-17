Ext.define('MathPASS.view.Gradeview',{
    extend:'Ext.form.Panel',
    xtype:'gradeview',
    requires: [
    ],
    config:{
        id:'formpanel1',
        name:'formpanel1',
        centered:true,
        fullscreen:'true',
        height:'100%',
        width:'100%',
        layout:'fit',
        items:[
            {
                docked: 'bottom',
                xtype: 'toolbar',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        text: 'Close',
                        handler: function() {
                            Ext.getCmp('formpanel1').destroy();
                        }
                    }
                    ]
            }
        ]
    }
});
