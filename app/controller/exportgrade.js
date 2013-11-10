Ext.define('MathPASS.controller.exportgrade', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            exportgradeview:'exportgradeview',
            classselectfield:'#classforteacSelectfield',
            button_viewgrade:'#viewgrade',
            assignmentdataview:'#assignmentdataview'
        },
        control: {
            classselectfield:{
                change:'classChanged' 
            } 
        }
    },
    classChanged:function(select,newValue,oldValue){
        var userId="";
        var userInfoData=Ext.getStore('UserInfo');
        console.log('userinfo',userInfoData);
        if(null!=userInfoData.getAt(0)){
            userId = userInfoData.getAt(0).get('userId');
        };
        this.getAssignmentdataview().getStore().clearFilter();
        this.getAssignmentdataview().getStore().filter('userid',userId);                        
        this.getAssignmentdataview().getStore().filter('classid',newValue);                        
        this.getAssignmentdataview().getStore().load();
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        var userInfoData=Ext.getStore('UserInfo');
        var status = userInfoData.getAt(0).get('login_status');
        if(status==2)
        {
            var userId="";
            var userInfoData=Ext.getStore('UserInfo');
            console.log('userinfo',userInfoData);
            if(null!=userInfoData.getAt(0)){
                userId = userInfoData.getAt(0).get('userId');
            };
            var teacherclass=this.getClassselectfield().getStore();
            if(userId!="")
            {
                teacherclass.removeAll();
                teacherclass.clearFilter();
                console.log('teacher filter');
                teacherclass.filter(
                    [
                        {propety:"userID",value:userId}
                    ]
                );
                teacherclass.load();
            }
        }
    }
});
