/**
 * @class voice.store.Chats
 * @extends Ext.data.Store
 * Description
 */
Ext.define('MathPASS.store.Problem', {
    extend: 'Ext.data.Store',
    requires: [ 'MathPASS.model.Problem' ],
		
    config: {
			model: 'MathPASS.model.Problem',
			storeId: 'Problem',
            autoLoad:true,
            remoteFilter:true,
            //filters: [
            //{
            //    property: 'pcourseid',
            //    value:9
            //},
            //{
            //    property: 'chapterid',
            //    value:24
            //}
            //],
            proxy:{
                type:'rest',
                url:'fetchProblem.php',
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
