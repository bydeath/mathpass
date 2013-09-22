/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-18
 * Time: 下午9:56
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.model.userinfo',{
    extend:'Ext.data.Model',
    requires:[
        'Ext.data.proxy.LocalStorage'
    ],
    config:{
        identifier: 'uuid',
        fields:[
            {name:'login_status',type:'int'},
            {name:'firstName',type:'string'},
            {name:'lastName',type:'string'},
            {name:'userId',type:'int'}
        ],
        proxy:{
            type:'localstorage',
            id:'testUserInfo'
        }
    }
});