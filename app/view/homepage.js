Ext.define('MathPASS.view.homepage',{
	extend:'Ext.Panel',
	xtype:'homepageview',
    requires: [
        'Ext.TitleBar',
        'Ext.Img',
        'MathPASS.view.register'
    ],
		config:{
            id:'homepageview',
            scroll: 'vertical',
            layout: {type:'vbox',align:'center'},
            items:[
              {
                  xtype: 'container',
                  height:78,
                  width:232,
                  html:'<img src="images/logo.png"/>'
              },
              {
                  styleHtmlContent: true,
                  html: [
                      "<div style='padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);'><p><h3>Home Page</h3></p>MathPASS is an interactive approach to learning mathematical skills.It allow the instructor to manage assignments and classes easily.MathPASS provides an opportunity to practice algebraic skills.The sutdent is able to work at his own pace through material that has been customized for his needs.<br><br>We hope you enjoy the newer,cleaner,more user friendly version of MathPASS.<br><br>To work with MathPASS, you should check and set up your browser as directions.</div>"
                  ],
                  items:[
                      {
                          xtype:'fieldset',
                          docked:'bottom',
                          title:'Log in',
                          defaults:{
                              labelwidth:'20%',
                              required:true,
                              clearIcon:true
                          },
                          items:[
                              {
                                  xtype: 'emailfield',
                                  itemId:'txt_email',
                                  name : 'email',
                                  label: 'Email',
                                  placeHolder:'Please enter your email address'
                              },
                              {
                                  xtype:'passwordfield',
                                  itemId:'txt_password',
                                  name:'password',
                                  label:'Password',
                                  placeHolder:'Please enter your password'
                              },
                              {
                                  xtype:'panel',
                                  defaults:{
                                      xtype:'button',
                                      ui:'action'
                                  },
                                  layout:{
                                      type:'hbox',
                                      pack:'end'
                                  },
                                  items:[
                                      {
                                          id:'register1',
                                          text:'register',
                                          handler:function(){
                                              Ext.Viewport.animateActiveItem(Ext.getCmp("registerview"), { type: 'slide', direction: 'left' });
                                          }
                                      },
                                      {
                                          xtype:'spacer',
                                          width:20
                                      },
                                      {
                                          id:'btn_login',
                                          text:'Submit'
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              }
            ]
}
});
