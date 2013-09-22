/**
 * @class voice.model.Chat
 * @extends Ext.data.Model
 * The model used by {@link voice.store.Chats}
 */
Ext.define('MathPASS.model.Problem', {
    extend: 'Ext.data.Model',
    
    config: {
			fields: [
			{ name: 'number'},{name: 'title'}
			],        
    }
});
