/**
 * @class voice.store.Chats
 * @extends Ext.data.Store
 * Description
 */
Ext.define('MathPASS.store.Chapter', {
    extend: 'Ext.data.Store',
    requires: [ 'MathPASS.model.Chapter' ],
		
    config: {
			model: 'MathPASS.model.Chapter',
			storeId: 'Chapter',
            autoLoad:true,
            remoteFilter:true,
            //filters: [
            //{
            //    propety: 'pcourseid',
            //    value:9
            //}
            //],
            
            proxy:{
                type:'rest',
                url:'fetchChapter.php',
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
