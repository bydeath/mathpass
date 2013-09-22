/**
 * @class voice.store.Chats
 * @extends Ext.data.Store
 * Description
 */
Ext.define('MathPASS.store.pcourse', {
    extend: 'Ext.data.Store',
    requires: [ 'MathPASS.model.pcourse' ],
		
    config: {
			model: 'MathPASS.model.pcourse',
			storeId: 'pcourse',
            autoLoad:true,
            remoteFilter:true,

      //      filters: [
      //      {
      //          propety: 'pcourseid',
      //          value:9
      //      }
      //      ],
            
            proxy:{
                type:'rest',
                url:'fetchCourse.php',
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

