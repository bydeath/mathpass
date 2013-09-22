/**
 * @class voice.model.Chat
 * @extends Ext.data.Model
 * The model used by {@link voice.store.Chats}
 */
Ext.define('MathPASS.model.Chapter', {
    extend: 'Ext.data.Model',
    
    config: {
			fields: [
			{ name: 'chapterId'},{name: 'title'}
			],        
//fields: [ "name", "image" ]
    }
});
