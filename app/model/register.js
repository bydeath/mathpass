Ext.define('MathPASS.model.register',{
	extend:'Ext.data.Model',
	config:{
		fields:['email','password','confirmemail','confirmpassword','lastname','firstname','usertype','accesscode'],
		validations:[
			{type:'email',field:'email',message:'You must check your email address'},
			{type:'email',field:'confirmemail',message:'You must check your confirmemail address'},
			{type:'presence',field:'password',message:'You must enter your password'},
			{type:'presence',field:'confirmpassword',message:'You must enter your password again'},
            {type:'length',field:'password',min:6,message:'the password\' length must more than 6'},
            {type:'length',field:'confirmpassword',min:6,message:'the confirmpassword\' length must more than 6'},
            {type:'presence',field:'lastname',message:'you must enter your lastname'},
            {type:'presence',field:'firstname',message:'you must enter your firstname'},
            {type:'presence',field:'accesscode',message:'you must enter a accesscode'},
            {type:'inclusion',field:'accesscode',list:['ywcmathpass','ywcteacher','ywcstudent'],message:'the accesscode you entered is incorrect'}
	]
	}
});
