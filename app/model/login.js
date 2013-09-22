Ext.define('MathPASS.model.login',{
	extend:'Ext.data.Model',
	config:{
		fields:['email','password'],
		validations:[
			{type:'email',field:'email',message:'You must enter your email address'},
			{type:'presence',field:'password',message:'You must enter your password'}
	]
	}
}
);
