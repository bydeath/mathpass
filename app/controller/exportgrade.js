Ext.define('MathPASS.controller.exportgrade', {
    extend: 'Ext.app.Controller',
    requires:'MathPASS.view.Gradeview',
    config: {
        refs: {
            exportgradeview:'exportgradeview',
            classselectfield:'#classforteacSelectfield',
            button_viewgrade:'#viewgrade',
            assignmentdataview:'#assignmentdataview',
            radioDisplayType:'#displayType'
        },
        control: {
            classselectfield:{
                change:'classChanged' 
            },
            button_viewgrade:{
                tap:'opengradeview'
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
    opengradeview:function(){
        var cid=this.getClassselectfield().getValue();
        console.log('cid',cid);
        if(this.getAssignmentdataview().getSelection().length>0)
        {
            var aid="";
            for(var i=0;i<this.getAssignmentdataview().getSelection().length;i++)
            {
                aid+=this.getAssignmentdataview().getSelection()[i].get('assignmentId')
                aid+=","
            }
            aid=aid.substr(0,aid.length-1);
            console.log('aid;',aid);
            console.log('rad:',this.getRadioDisplayType());
            var dt=this.getRadioDisplayType().getValues().displayformat;
            console.log('dt;',dt);
            var src="<iframe width=\"100%\" height=\"600\" name=\"takeAssignmentDo1\" marginwidth=\"0\" marginheight=\"0\" frameborder=\"0\" src=\"http://localhost/mathpass/exportgradeview.php?cid="+cid+"&aid="+aid+"&dt="+dt+"\"></iframe>";
            console.log('iframe:',src)
            gradeviewIframe=Ext.create('MathPASS.view.Gradeview');
            gradeviewIframe.setHtml(src);
            Ext.Viewport.add(gradeviewIframe);
        }
        else
        {
            Ext.Msg.alert("Please select at <br> least one assignment");
        }
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
