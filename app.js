/*
   This file is generated and updated by Sencha Cmd. You can edit this file as
   needed for your application, but these edits will have to be merged by
   Sencha Cmd when it performs code generation tasks such as generating new
   models, controllers or views and when running "sencha app upgrade".

   Ideally changes to this file would be limited and most work would be done
   in other places (such as Controllers). If Sencha Cmd cannot merge your
   changes and its generated code, it will produce a "merge conflict" that you
   will need to resolve manually.
 */

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
        'Ext': 'touch/src'
});
//</debug>

Ext.application({
        name: 'MathPASS',
        viewport: {},
        requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.TitleBar',
        'Ext.data.Store',
        'MathPASS.view.studentMain',
        'MathPASS.view.teacherMain',
        'MathPASS.view.administratorMain'
        ],

        views: [
        'Main',
        'register',
        'homepage',
        'practice',
        'information',
        'contactus',
        'studentFindaClass',
        'studentGrades',
        'studentMain',
        'studentpage',
        'administratorItAnaly',
        'administratorMain',
        'administratorProblems',
        'administratorUsers',
        'teacherAssignments',
        'exportgrade',
        'teacherItemAnalysis',
        'teacherMain',
        'teacherpage',
        'ChapterList',
        'ChapterListItem',
        'ProblemList',
        'ProblemListItem',
        'ProblemSet'
        ],
        models:[
                'login',
        'register',
        'userinfo',
        'contactus',
        'pcourse',
        'Chapter',
        'Problem',
        'Class',
        'Assignment'
                ],
        controllers:[
                'register',
        'login',
        'contactus',
        'practice',
    'exportgrade',
    'TeachersAssignments'
                ],
        stores:[
        'userinfo',
        'Chapter',
        'pcourse',
        'Problem',
        'Class',
        'Assignment_teacher'
                ],
        launch: function() {
                // Initialize the main view
                var userInfoData=Ext.getStore('UserInfo');
                if(null!=userInfoData.getAt(0)){
                        var status = userInfoData.getAt(0).get('login_status');
                        var firstName = userInfoData.getAt(0).get('firstName');
                        var lastName = userInfoData.getAt(0).get('lastName');
                        var finallyValue = firstName+lastName;
                        if(status==3){
                                Ext.Viewport.add(Ext.create('MathPASS.view.studentMain'));
                                Ext.Viewport.add(Ext.create('MathPASS.view.Main'));
                                Ext.Viewport.add(Ext.create('MathPASS.view.register'));
                                Ext.Viewport.add(Ext.create('MathPASS.view.teacherMain'));
                                Ext.Viewport.add(Ext.create('MathPASS.view.administratorMain'));
                                Ext.getCmp('studentpageview').down('label').setHtml(finallyValue);
                        }else if(status==2){
                                Ext.Viewport.add(Ext.create('MathPASS.view.teacherMain'));
                                Ext.Viewport.add(Ext.create('MathPASS.view.Main'));
                                Ext.Viewport.add(Ext.create('MathPASS.view.register'));
                                Ext.Viewport.add(Ext.create('MathPASS.view.studentMain'));
                                Ext.Viewport.add(Ext.create('MathPASS.view.administratorMain'));
                                Ext.getCmp('teacherpageview').down('label').setHtml(finallyValue);
                        }else if(status==1){
                                Ext.Viewport.add(Ext.create('MathPASS.view.administratorMain'));
                                Ext.Viewport.add(Ext.create('MathPASS.view.Main'));
                                Ext.Viewport.add(Ext.create('MathPASS.view.register'));
                                Ext.Viewport.add(Ext.create('MathPASS.view.studentMain'));
                                Ext.Viewport.add(Ext.create('MathPASS.view.teacherMain'));
                        }
                }else{
                        Ext.Viewport.add(Ext.create('MathPASS.view.Main'));
                        Ext.Viewport.add(Ext.create('MathPASS.view.register'));
                        Ext.Viewport.add(Ext.create('MathPASS.view.studentMain'));
                        Ext.Viewport.add(Ext.create('MathPASS.view.teacherMain'));
                        Ext.Viewport.add(Ext.create('MathPASS.view.administratorMain'));
                }
        },
        onUpdated: function() {
                Ext.Msg.confirm(
                                "Application Update",
                                "This application has just successfully been updated to the latest version. Reload now?",
                                function(buttonId) {
                                        if (buttonId === 'yes') {
                                                window.location.reload();
                                        }
                                }
                               );
        }
});
