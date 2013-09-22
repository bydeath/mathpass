Ext.define('MathPASS.controller.practice',{
    extend:'Ext.app.Controller',
    config:{
    refs:{
        practiceview:'practiceview',
        courseSelectfield:'#courseSelectfield',    
        chapterdataview:'#chapterdataview',
        problemdataview:'#problemdataview',
        button_takepractice:'#button_takepractice'
    },
    control:{
        courseSelectfield:{
        change:'courseChanged'
    },
    chapterdataview:{
        itemtap:'chapterTaped',
       // refresh:'chapterRefresh'
    },
    problemdataview:{
        itemtap:'problemTaped'
    },
button_takepractice:{
    tap:'button_takepractice_taped'
}
    }
    },
    courseChanged:function(select,newValue,oldValue){
        console.log("course chenged");
        this.getChapterdataview().getStore().clearFilter();
        this.getChapterdataview().getStore().filter('pcourseid',newValue);                        
        this.getChapterdataview().getStore().load();
    },
    chapterTaped:function(dataview,index,item,record,e){
        console.log('store=',this.getProblemdataview().getStore());
        this.getProblemdataview().getStore().removeAll();
        this.getProblemdataview().getStore().clearFilter();
        this.getProblemdataview().getStore().filter('pcourseId',this.getCourseSelectfield().getRecord().get('pcourseid'));
        this.getProblemdataview().getStore().filter('chapterId',record.get('chapterId'));
        this.getProblemdataview().getStore().load();

    },
   // chapterRefresh:function(dataview){
   //     console.log("refreshed=",dataview.getItemAt(0));
   //     dataview.select(dataview.getItemAt(0));
   // },
    problemTaped:function(dataview,index,item,record,e){
        var ptype=record.get('number');
    },
button_takepractice_taped:function(){
    if(this.getProblemdataview().getSelection().length>0)
    {
     var ptype="";
     for(var i=0;i<this.getProblemdataview().getSelection().length;i++)
     {
        ptype+=this.getProblemdataview().getSelection()[i].get('number')
            ptype+=","
     }
     ptype=ptype.substr(0,ptype.length-1);
        var link="takeAssignmentDo1.php?openmode=1&number=1&types="+ptype;
	    window.open(link,"assignment","location=no,menubar=no,toolbar=no,width=780,height=550,status=no,scrollbars=yes");
            this.getProblemdataview().deselectAll();
    }
    else
    {
        Ext.Msg.alert("Please select at <br> least one problem");
    }
}
});
