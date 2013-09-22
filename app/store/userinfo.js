/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-18
 * Time: 下午10:03
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.store.userinfo',{
    extend:'Ext.data.Store',
    requires:[
        'MathPASS.model.userinfo'
    ],
    config:{
        model:'MathPASS.model.userinfo',
        autoLoaded:true,
        autoLoad: true,
        autoSave:true,
        storeId:'UserInfo'
    }
});