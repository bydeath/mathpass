//var userInfoData=Ext.getStore('UserInfo');
//console.log('userinfo',userInfoData);
//if(null!=userInfoData.getAt(0)){
//    userId = userInfoData.getAt(0).get('userId');
//};
Ext.define('MathPASS.store.Class', {
    extend: 'Ext.data.Store',
    requires: [
    'MathPASS.model.Class',
    'MathPASS.model.userinfo',
    'MathPASS.store.userinfo'
    ],

    config: {
        model: 'MathPASS.model.Class',
        storeId: 'Class',
        autoLoad:true,
        remoteFilter:true,
        /*
        data:[
        {id:"1",name:"wang"},
        {id:"2",name:"wang"},
        {id:"3",name:"wang"}
        ]
        */
        filters: [
            {
                propety: 'pcourseid',
                value: 2227
            }
        ],

        proxy:{
            type:'rest',
            url:'fetchClass.php',
            reader:{
                type:'json'
            },
            listeners: { 
                exception:function(proxy,response)
                {
                    Ext.Msg.alert(Ext.decode(response.responseText).message);
                }
            }
        },
listeners:{
refresh:function (data, eOpts){
console.log('store loading');
Ext.Msg.alert("store loading");
var userId="";
var userInfoData=Ext.getStore('UserInfo');
console.log('userinfo',userInfoData);
if(null!=userInfoData.getAt(0)){
    userId = userInfoData.getAt(0).get('userId');
};
console.log('userid:',userId);
if(userId!="")
{
userInfoData.removeAll();
userInfoData.clearFilter();
userInfoData.filter(
[
{propety:"userID",value:userId}
]
);
userInfoData.load();
}
}
}
}
});

