/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-8-27
 * Time: 下午4:39
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.model.contactus',{
        extend:'Ext.data.Model',
        config:{
            fields:['youremail','yourname','Message'],
            validations:[
                {type:'email',field:'youremail',message:'You must enter your email address'},
                {type:'presence',field:'yourname',message:'You must enter your name'},
                {type:'presence',field:'Message',message:'You must enter your Message'}
            ]
        }
    }
);
