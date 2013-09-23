/**
 * @class voice.store.Chats
 * @extends Ext.data.Store
 * Description
 */
Ext.define('MathPASS.store.Class', {
    extend: 'Ext.data.Store',
    requires: [ 'MathPASS.model.Class' ],
		
    config: {
			model: 'MathPASS.model.Class',
			storeId: 'Class',
            autoLoad:true,
            remoteFilter:true,
            /*
            data:[
                {id:"1",name:"wang"},
                {id:"2",name:"wang"},
                {id:"3",name:"wang"}
            ]
            */
      //      filters: [
      //      {
      //          propety: 'pcourseid',
      //          value:9
      //      }
      //      ],
            
            proxy:{
                type:'rest',
                url:'fetchClass.php',
                reader:{
                    type:'json'
                },
                listeners: { 
                    exception:function(proxy,response)
                    {
                        Ext.Msg.alert(Ext.decode(response.responseText).message);
                    }
                }
            }
    }
});

