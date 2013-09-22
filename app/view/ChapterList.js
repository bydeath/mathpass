/**
 * @class voice.view.ChapterList
 * @extends Ext.DataView
 * Description
 */
Ext.define('MathPASS.view.ChapterList', {
    extend: 'Ext.dataview.DataView',
    xtype: 'chapterlistpanel',
				
    config: {
			defaultType: 'chapterlistitem',
			store: 'Chapter',
			useComponents: true
	}
});
