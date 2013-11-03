/**
* @class voice.view.ChapterListItem
* @extends Ext.dataview.component.DataItem
* Description
*/
Ext.define('MathPASS.view.ProblemListItem', {
    requires:[
        'Ext.Label'
    ],
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'problemlistitem',

    config: {
        styleHtmlContent: true,
        //baseCls: 'problem-dataItem',
        cls: 'problem-item',
        items: [
            {
                xtype: 'label',
                html: 'title',
                itemId: 'myLabel',
                flex: 1,
            }]
    },

    updateRecord: function(record) {
        var me = this;
        if(record!=null)
        {
            me.down('#myLabel')
            .setHtml(record.get('title'));
        }
        me.callParent(arguments);
    }
});
