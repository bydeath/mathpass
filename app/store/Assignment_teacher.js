/*
 * @class voice.store.Chats
 * @extends Ext.data.Store
 * Description
 */
Ext.define('MathPASS.store.Assignment_teacher', {
    extend: 'Ext.data.Store',
    requires: [ 'MathPASS.model.Assignment' ],
		
    config: {
			model: 'MathPASS.model.Assignment',
			storeId: 'Assignment_teacher',
            autoLoad:true,
            remoteFilter:true,
           // filters: [
           // {
           //     property: 'pcourseid',
           //     value:9
           // },
           // {
           //     property: 'chapterid',
           //     value:24
           // }
           // ],
    }
});
