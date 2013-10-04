/**
 * @class voice.view.ChapterList
 * @extends Ext.DataView
 * Description
 */
Ext.define('MathPASS.view.ProblemList', {
    extend: 'Ext.dataview.DataView',
    xtype: 'problemdataview',
				
    config: {
			defaultType: 'problemlistitem',
			store: 'Problem',
            mode:'multi',
			useComponents: true
	}
});
