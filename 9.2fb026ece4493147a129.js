(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1LmZ":function(t,e,c){"use strict";c.d(e,"a",(function(){return A}));var i=c("fXoL"),n=c("SV+Y"),r=c("XiUz"),s=c("bTqV"),o=c("NFeN"),a=c("QibW");let d=(()=>{class t{constructor(t){this.mdService=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.bc(n.a))},t.\u0275cmp=i.Vb({type:t,selectors:[["app-notifications-info"]],decls:36,vars:17,consts:[["fxLayout","column"],[1,"div-task-checked"],["fxLayoutAlign","center"],["fxLayout","row"],["fxLayout","column","fxLayoutAlign","center","mat-raised-button",""],["color","warn"]],template:function(t,e){1&t&&(i.hc(0,"div",0),i.hc(1,"div"),i.cc(2,"div",1),i.hc(3,"div",2),i.Qc(4,"**TASK CHECKED**"),i.gc(),i.gc(),i.hc(5,"div",0),i.hc(6,"div",3),i.hc(7,"button",4),i.hc(8,"mat-icon"),i.Qc(9,"done"),i.gc(),i.gc(),i.Qc(10,"CLICK TO CHANGE NOTIFICATION STATUS AS CHECKED "),i.gc(),i.hc(11,"div",3),i.hc(12,"button",4),i.hc(13,"mat-icon",5),i.Qc(14,"assignment_late"),i.gc(),i.gc(),i.Qc(15,"CLICK TO SEE REQUIRED ASSIGNMENT DETAIL"),i.gc(),i.hc(16,"div",3),i.hc(17,"button",4),i.hc(18,"mat-icon"),i.Qc(19),i.gc(),i.gc(),i.Qc(20,"CLICK TO SEE NOTIFICATION ITEM DETAIL"),i.gc(),i.gc(),i.hc(21,"div",3),i.hc(22,"mat-radio-button"),i.Qc(23,"v x"),i.gc(),i.hc(24,"p"),i.Qc(25,"SELECT THE VERSION OF THE ITEM YOU WANT TO CHECK"),i.gc(),i.gc(),i.hc(26,"div",3),i.hc(27,"mat-icon"),i.Qc(28,"edit"),i.gc(),i.hc(29,"p"),i.Qc(30,"EDIT THE ITEM"),i.gc(),i.gc(),i.hc(31,"div",3),i.hc(32,"mat-icon"),i.Qc(33,"settings_backup_restore"),i.gc(),i.hc(34,"p"),i.Qc(35,"RESTORE A PREVIOUS VERSION OF THE ITEM"),i.gc(),i.gc(),i.gc()),2&t&&(i.Ob(1),i.Nc("margin-bottom","10px"),i.Ob(18),i.Rc(e.mdService.desktop?"launch":"info"),i.Ob(2),i.Nc("margin-top","15px"),i.Ob(1),i.Nc("color","#7b87cc"),i.Ob(2),i.Nc("margin-left","20px"),i.Ob(2),i.Nc("margin-top","10px"),i.Ob(3),i.Nc("margin-left","20px"),i.Ob(2),i.Nc("margin-top","10px"),i.Ob(3),i.Nc("margin-left","20px"))},directives:[r.f,r.e,s.b,o.a,a.a],styles:[".div-task-checked[_ngcontent-%COMP%]{background-color:#fcebcd;width:100%;height:50px}"]}),t})();var l=c("PqYM"),h=c("Brg/"),p=c("tyNb"),u=c("Yt/C"),g=c("ofXK"),f=c("znSr"),b=c("own3"),m=c("wZkO"),v=c("LRne"),S=c("lJxs"),O=c("JIr8"),j=c("EY2u"),x=c("S6We"),y=c("T1xj"),k=c("Wp6s"),C=c("jVv/"),I=c("qmzK"),E=c("RCfm");let T=(()=>{class t{constructor(t,e,c,i){this.taskService=t,this.cdr=e,this.authService=c,this.dialogsService=i,this.date=(new Date).getTime()}restoreVersion(t){let e=h.d.copyObject(t.taskChanges);t.taskChanges.user=this.authService.userOnline._id,t.taskChanges.participants&&(t.taskChanges.participants=t.taskChanges.participants.map(t=>t._id)),this.taskService.putTask(t.taskChanges,t.id).subscribe(t=>{this.taskSelected=h.d.mergeObjects(t,e),this.cdr.detectChanges()})}editTask(t){this.dialogsService.openEditCreateTaskDialog(t)}}return t.\u0275fac=function(e){return new(e||t)(i.bc(x.a),i.bc(i.i),i.bc(C.a),i.bc(I.a))},t.\u0275cmp=i.Vb({type:t,selectors:[["app-task-detail-smart"]],inputs:{taskSelected:"taskSelected",date:"date"},decls:1,vars:2,consts:[[3,"taskSelected","date","restoreVersion","editTask"]],template:function(t,e){1&t&&(i.hc(0,"app-task-detail",0),i.pc("restoreVersion",(function(t){return e.restoreVersion(t)}))("editTask",(function(t){return e.editTask(t)})),i.gc()),2&t&&i.zc("taskSelected",e.taskSelected)("date",e.date)},directives:[E.a],encapsulation:2}),t})();var w=c("YtIn");function P(t,e){if(1&t&&(i.hc(0,"div",6),i.cc(1,"app-task-detail-smart",7),i.gc()),2&t){const t=i.tc(2);i.Ob(1),i.zc("taskSelected",t.itemSelected)("date",t.notification.date)}}function N(t,e){if(1&t&&(i.hc(0,"div",6),i.cc(1,"app-project-detail-smart",8),i.gc()),2&t){const t=i.tc(2);i.Ob(1),i.zc("date",t.notification.date)("projectSelected",t.itemSelected)}}function L(t,e){if(1&t&&(i.hc(0,"div",9),i.hc(1,"p"),i.Qc(2),i.gc(),i.gc()),2&t){const t=i.tc(2);i.Nc("margin-top","30px"),i.Ob(1),i.Nc("color","red"),i.Ob(1),i.Uc(" ",t.notification.type," ",t.notification.prevItem.name," has been deleted by ",t.notification.userFrom.name," ")}}function _(t,e){if(1&t){const t=i.ic();i.hc(0,"mat-card",1),i.Oc(1,P,2,2,"div",2),i.Oc(2,N,2,2,"div",2),i.hc(3,"div",3),i.hc(4,"mat-icon",4),i.pc("click",(function(){return i.Hc(t),i.tc().unselectNotification.emit()})),i.Qc(5,"highlight_off"),i.gc(),i.gc(),i.Oc(6,L,3,7,"div",5),i.gc()}if(2&t){const t=i.tc();i.Ob(1),i.zc("ngIf",t.itemSelected&&"Task"===t.notification.type&&!t.itemSelected.deleted),i.Ob(1),i.zc("ngIf",t.itemSelected&&"Project"===t.notification.type&&!t.itemSelected.deleted),i.Ob(4),i.zc("ngIf",t.itemSelected&&t.itemSelected.deleted)}}let V=(()=>{class t{constructor(t,e,c){this.taskService=t,this.projectService=e,this.cdr=c,this.unselectNotification=new i.r}ngOnChanges(t){if(t.notification&&this.notification){let t;switch(this.itemSelected=void 0,this.getItems(this.notification),this.itemSubscription&&this.itemSubscription.unsubscribe(),this.notification.type){case"Task":t=this.taskService.task$;break;case"Project":t=this.projectService.project$}this.itemSubscription=t.subscribe(t=>{if(t){const e=t.task?t.task:t.project;if(e._id===this.itemSelected._id){switch(t.action){case"PUT":this.itemSelected=e;break;case"DELETE":this.itemSelected=this.notification.prevItem,this.itemSelected.deleted=!0}this.cdr.detectChanges()}}})}}getItems(t){let e;switch(t.type){case"Task":e="DELETE"!=t.method?this.taskService.getTaskById(t.item._id?t.item._id:t.item):Object(v.a)(t.prevItem).pipe(Object(S.a)(t=>(t.deleted=!0,t)));break;case"Project":e="DELETE"!=t.method?this.projectService.getProjectById(t.item._id?t.item._id:t.item):Object(v.a)(t.prevItem)}e.pipe(Object(O.a)(e=>(this.itemSelected=t.prevItem,this.itemSelected.deleted=!0,Object(j.b)()))).subscribe(t=>{this.itemSelected=null!=t?t:this.itemSelected})}ngOnDestroy(){this.itemSubscription&&this.itemSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.bc(x.a),i.bc(y.a),i.bc(i.i))},t.\u0275cmp=i.Vb({type:t,selectors:[["app-notification-change-detail"]],inputs:{notification:"notification"},outputs:{unselectNotification:"unselectNotification"},features:[i.Mb],decls:1,vars:1,consts:[["class","mat-card-notification-detail",4,"ngIf"],[1,"mat-card-notification-detail"],["fxFlex","90",4,"ngIf"],["fxFlex","10","fxLayoutAlign","flex-end"],["color","warn",1,"mat-icon-close",3,"click"],["fxLayoutAlign","center",3,"margin-top",4,"ngIf"],["fxFlex","90"],[3,"taskSelected","date"],[3,"date","projectSelected"],["fxLayoutAlign","center"]],template:function(t,e){1&t&&i.Oc(0,_,7,3,"mat-card",0),2&t&&i.zc("ngIf",e.notification)},directives:[g.t,k.a,r.b,r.e,o.a,T,w.a],styles:[".mat-card-notification-detail[_ngcontent-%COMP%]{height:78vh;width:100%;margin:20px 0 0}@media (max-width:1279px){.mat-card-notification-detail[_ngcontent-%COMP%]{height:60vh}}mat-icon[_ngcontent-%COMP%]{font-size:30px!important}.mat-icon-close[_ngcontent-%COMP%]{margin-right:13px}"]}),t})();function M(t,e){if(1&t){const t=i.ic();i.hc(0,"div",9),i.hc(1,"app-notification-change-detail",10),i.pc("unselectNotification",(function(){return i.Hc(t),i.tc().unselectNotification()})),i.gc(),i.gc()}if(2&t){const t=i.tc();i.Nc("margin-top","5vh"),i.Ob(1),i.zc("notification",t.notificationSelected)}}const Q=function(t){return{"div-info-icon-desktop-without-task":t}};let A=(()=>{class t{constructor(t,e,c,i){this.ar=t,this.router=e,this.cdr=c,this.notificationService=i,this.infoComponent=d}ngOnInit(){this.notificationSubs=this.notificationService.notificationSelected$.subscribe(t=>{this.notificationSelected=t,this.selecTab()})}ngAfterViewInit(){this.childPath=this.router.url.split("/")[3],h.c.set("state-data",this.childPath,"home-path"),this.tabIndex="new"===this.childPath?0:1,this.cdr.detectChanges()}navigate(t){this.selecTab();let e=0===t?"new":"record";e+=this.notificationSelected?"/"+this.notificationSelected._id:"",this.router.navigate([e],{relativeTo:this.ar}).then(()=>{this.childPath=0===t?"new":"record",h.c.set("state-data",this.childPath,"home-path")})}unselectNotification(){this.notificationService.selectNotification(),this.navigate("new"===this.childPath?0:1)}selecTab(){this.tabIndex="new"===this.childPath?1:0,this.cdr.detectChanges(),Object(l.a)().subscribe(()=>{this.tabIndex="new"===this.childPath?0:1})}ngOnDestroy(){this.notificationSubs&&this.notificationSubs.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.bc(p.a),i.bc(p.d),i.bc(i.i),i.bc(u.a))},t.\u0275cmp=i.Vb({type:t,selectors:[["app-home"]],decls:18,vars:9,consts:[[1,"div-info-icon",3,"ngClass"],[3,"componentToShow"],["fxLayout.gt-sm","row","fxLayout.lt-md","column",1,"div-home"],["fxLayout","column","fxFlex.lt-md","100",3,"fxFlex.gt-md","fxFlex.md"],["mat-stretch-tabs","","mat-tab-nav-bar",""],["mat-tab-link","",3,"active","click"],["fxHide.lt-md",""],["fxFlex","90"],["fxHide.lt-md","","fxFlex.gt-md","28","fxFlex.md","40","fxFlex.lt-md","30",3,"margin-top",4,"ngIf"],["fxHide.lt-md","","fxFlex.gt-md","28","fxFlex.md","40","fxFlex.lt-md","30"],[3,"notification","unselectNotification"]],template:function(t,e){1&t&&(i.hc(0,"div",0),i.cc(1,"lp-bottom-sheet-info",1),i.gc(),i.hc(2,"div",2),i.hc(3,"div",3),i.hc(4,"nav",4),i.hc(5,"a",5),i.pc("click",(function(){return e.navigate(0)})),i.hc(6,"mat-icon"),i.Qc(7,"notification_important"),i.gc(),i.hc(8,"span",6),i.Qc(9,"NOTIFICATIONS TO CHECK"),i.gc(),i.gc(),i.hc(10,"a",5),i.pc("click",(function(){return e.navigate(1)})),i.hc(11,"mat-icon"),i.Qc(12,"folder"),i.gc(),i.hc(13,"span",6),i.Qc(14,"NOTIFICATIONS RECORD"),i.gc(),i.gc(),i.gc(),i.hc(15,"div",7),i.cc(16,"router-outlet"),i.gc(),i.gc(),i.Oc(17,M,2,3,"div",8),i.gc()),2&t&&(i.zc("ngClass",i.Bc(7,Q,!e.notificationSelected)),i.Ob(1),i.zc("componentToShow",e.infoComponent),i.Ob(2),i.zc("fxFlex.gt-md",e.notificationSelected?"70":"100")("fxFlex.md",e.notificationSelected?"60":"100"),i.Ob(2),i.zc("active",0===e.tabIndex),i.Ob(5),i.zc("active",1===e.tabIndex),i.Ob(7),i.zc("ngIf",e.notificationSelected))},directives:[g.q,f.a,b.a,r.f,r.b,m.f,m.e,o.a,f.c,p.h,g.t,V],styles:[".div-home[_ngcontent-%COMP%]{height:87vh}  .mat-tab-list .mat-tab-label{flex-basis:1;flex-grow:1}.mat-tab-link[_ngcontent-%COMP%]{height:5vh}mat-icon[_ngcontent-%COMP%]{margin:5px}.div-info-icon[_ngcontent-%COMP%]{top:65px}.div-info-icon-desktop-without-task[_ngcontent-%COMP%]{top:19%}@media (min-width:600px) and (max-width:959px){.div-info-icon[_ngcontent-%COMP%], .div-info-icon-desktop-without-task[_ngcontent-%COMP%]{top:17vh!important}}@media (min-width:0px) and (max-width:600px){.div-home[_ngcontent-%COMP%]{height:90vh}.div-info-icon[_ngcontent-%COMP%], .div-info-icon-desktop-without-task[_ngcontent-%COMP%]{top:18.7vh!important}}"]}),t})()},"99Un":function(t,e,c){"use strict";c.r(e),c.d(e,"HomeModule",(function(){return rt}));var i=c("ofXK"),n=c("tyNb"),r=c("1LmZ"),s=c("Brg/"),o=c("fXoL");let a=[{path:"",component:r.a,canActivate:[(()=>{class t{constructor(t,e){this.router=t,this.ar=e}canActivate(){let t=s.c.get("state-data","home-path");return!t||(s.c.remove("state-data","home-path"),void this.router.navigate(["pages/home/"+t]))}}return t.\u0275fac=function(e){return new(e||t)(o.lc(n.d),o.lc(n.a))},t.\u0275prov=o.Xb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()],children:[{path:"",redirectTo:"new",pathMatch:"full"},{path:"record",loadChildren:()=>Promise.all([c.e(0),c.e(2)]).then(c.bind(null,"atIr")).then(t=>t.NotificationsListModule)},{path:"new",loadChildren:()=>Promise.all([c.e(0),c.e(2)]).then(c.bind(null,"atIr")).then(t=>t.NotificationsListModule)}]}],d=(()=>{class t{}return t.\u0275mod=o.Zb({type:t}),t.\u0275inj=o.Yb({factory:function(e){return new(e||t)},imports:[[i.c,n.g.forChild(a)],n.g]}),t})();var l=c("YUcS"),h=c("jAig"),p=c("zAIM"),u=c("HlmG"),g=c("yGOH"),f=c("3Pt+"),b=c("DXCE"),m=c("mopJ"),v=c("YtIn"),S=c("ihCf"),O=c("cH1L"),j=c("kmnG"),x=c("qFsG"),y=c("bSwM"),k=c("bTqV"),C=c("0IaG"),I=c("/t3+"),E=c("NFeN"),T=c("vxfF"),w=c("STbY"),P=c("XhcP"),N=c("MutI"),L=c("FKr1"),_=c("f0Cb"),V=c("d3UM"),M=c("Qu3c"),Q=c("+0xr"),A=c("M9IT"),z=c("7EHt"),F=c("Wp6s"),H=c("iadO"),D=c("dNgK"),R=c("wZkO"),U=c("QibW"),K=c("Xa2L"),X=c("bv9b"),q=c("TU8p"),Y=c("XiUz"),B=c("znSr"),G=c("zpSk"),W=c("jVv/");let J=(()=>{class t{constructor(t,e,c){this.authService=t,this.el=e,this.renderer=c,this.administrators=[]}ngOnInit(){this.administrators.includes(this.authService.userOnline._id)||this.renderer.setStyle(this.el.nativeElement,"display","none")}}return t.\u0275fac=function(e){return new(e||t)(o.bc(W.a),o.bc(o.o),o.bc(o.Q))},t.\u0275dir=o.Wb({type:t,selectors:[["","appProjectAdmRole",""]],inputs:{administrators:"administrators"}}),t})(),Z=(()=>{class t{constructor(t,e,c){this.authService=t,this.el=e,this.renderer=c,this.reverseDirective=!1}ngOnInit(){this.reverseDirective?this.user._id===this.authService.userOnline._id&&this.renderer.setStyle(this.el.nativeElement,"display","none"):this.user._id!=this.authService.userOnline._id&&this.renderer.setStyle(this.el.nativeElement,"display","none")}}return t.\u0275fac=function(e){return new(e||t)(o.bc(W.a),o.bc(o.o),o.bc(o.Q))},t.\u0275dir=o.Wb({type:t,selectors:[["","appIsUserOnline",""]],inputs:{user:"user",reverseDirective:"reverseDirective"}}),t})();var $=c("T1xj");let tt=(()=>{class t{constructor(t,e,c,i){this.authService=t,this.renderer=e,this.el=c,this.projectService=i,this.check(),this.projectSubs=this.projectService.project$.subscribe(()=>{this.check()}),this.projectSelectionSubs=this.projectService.selectedProject$.subscribe(()=>{this.check()})}check(){this.projectService.selectedProject.administrators.map(t=>t._id).includes(this.authService.userOnline._id)?this.renderer.setStyle(this.el.nativeElement,"display","inherit"):this.renderer.setStyle(this.el.nativeElement,"display","none")}ngOnDestroy(){this.projectSubs.unsubscribe(),this.projectSelectionSubs.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.bc(W.a),o.bc(o.Q),o.bc(o.o),o.bc($.a))},t.\u0275dir=o.Wb({type:t,selectors:[["","appIsAdm",""]]}),t})();var et=c("lVrL"),ct=c("FU17");let it=(()=>{class t{}return t.\u0275mod=o.Zb({type:t}),t.\u0275inj=o.Yb({factory:function(e){return new(e||t)},imports:[[i.c,h.a,l.a,g.a,f.i,b.a]]}),t})();o.Jc(m.a,[i.q,i.r,i.s,i.t,i.A,i.w,i.x,i.y,i.z,i.u,i.v,S.b,S.c,O.b,j.b,j.c,j.f,j.g,j.h,j.i,j.j,x.b,x.d,y.a,y.c,k.b,k.a,C.f,C.d,C.j,C.g,C.c,I.a,I.c,E.a,T.a,w.e,w.b,w.d,w.a,P.a,P.b,P.c,P.d,P.e,P.f,N.a,N.h,N.d,N.b,L.j,N.c,N.g,L.p,N.i,N.f,_.a,V.a,V.c,L.n,L.m,M.a,M.c,Q.o,Q.i,Q.k,Q.c,Q.b,Q.n,Q.e,Q.g,Q.h,Q.a,Q.d,Q.j,Q.m,Q.f,Q.l,Q.r,A.a,z.a,z.c,z.d,z.g,z.h,z.f,z.e,F.a,F.f,F.n,F.d,F.m,F.l,F.b,F.e,F.k,F.i,F.h,F.g,F.o,F.c,H.a,H.b,H.f,H.g,H.h,H.j,H.k,H.m,H.p,H.n,H.c,H.d,H.o,H.l,H.e,D.b,R.c,R.d,R.a,R.f,R.e,R.b,U.b,U.a,K.a,K.c,X.a,q.a,Y.f,Y.g,Y.e,Y.d,Y.c,Y.h,Y.a,Y.b,B.c,B.a,B.d,B.b,G.e,G.f,G.g,G.h,G.i,G.j,G.k,G.l,G.b,G.c,G.d,J,Z,tt,et.a,f.E,f.t,f.D,f.d,f.u,f.x,f.a,f.A,f.B,f.w,f.o,f.p,f.z,f.k,f.j,f.v,f.b,f.e,f.r,f.s,f.q,ct.a,u.a,m.a,v.a],[i.b,i.G,i.p,i.k,i.E,i.g,i.C,i.F,i.d,i.f,i.i,i.j,i.l]);var nt=c("own3");let rt=(()=>{class t{}return t.\u0275mod=o.Zb({type:t}),t.\u0275inj=o.Yb({factory:function(e){return new(e||t)},imports:[[i.c,d,h.a,l.a,p.a,it,nt.b]]}),t})()},HlmG:function(t,e,c){"use strict";c.d(e,"a",(function(){return k}));var i=c("fXoL"),n=c("Brg/"),r=c("T1xj"),s=c("WLNs"),o=c("qmzK"),a=c("ofXK"),d=c("XiUz"),l=c("3Pt+"),h=c("FU17"),p=c("znSr"),u=c("NFeN");function g(t,e){if(1&t){const t=i.ic();i.hc(0,"mat-icon",20),i.pc("click",(function(){return i.Hc(t),i.tc(3).back.emit()})),i.Qc(1,"keyboard_backspace"),i.gc()}}function f(t,e){if(1&t){const t=i.ic();i.hc(0,"mat-icon",20),i.pc("click",(function(){return i.Hc(t),i.tc(3).restore()})),i.Qc(1,"settings_backup_restore"),i.gc()}}function b(t,e){if(1&t){const t=i.ic();i.hc(0,"mat-icon",20),i.pc("click",(function(){return i.Hc(t),i.tc(3).editProject()})),i.Qc(1,"edit"),i.gc()}}function m(t,e){if(1&t&&(i.hc(0,"small",21),i.Qc(1),i.gc()),2&t){const t=i.tc(3);i.Ob(1),i.Tc("",0===t.currentVersion?"created by":"edited by"," ",0===t.currentVersion?t.projectSelected.createdBy.name:t.projectSelected.prevStates&&t.projectSelected.prevStates[t.currentVersion-1]?t.projectSelected.prevStates[t.currentVersion-1].user.name:"","")}}function v(t,e){1&t&&(i.hc(0,"small",22),i.Qc(1,"*current state*"),i.gc()),2&t&&i.Nc("color","#7b87cc")}function S(t,e){if(1&t&&(i.hc(0,"li",23),i.Qc(1),i.gc()),2&t){const t=e.$implicit,c=i.tc(3);i.Qb(c.propertyHasChanged("participants")?"property-changed":""),i.Ob(1),i.Rc(t.name)}}function O(t,e){if(1&t&&(i.hc(0,"li",23),i.Qc(1),i.gc()),2&t){const t=e.$implicit,c=i.tc(3);i.Qb(c.propertyHasChanged("administrators")?"property-changed":""),i.Ob(1),i.Rc(t.name)}}const j=function(t){return{color:t}};function x(t,e){if(1&t&&(i.hc(0,"div",7),i.hc(1,"div",8),i.Oc(2,g,2,0,"mat-icon",9),i.Oc(3,f,2,0,"mat-icon",9),i.Oc(4,b,2,0,"mat-icon",9),i.gc(),i.hc(5,"div",10),i.Oc(6,m,2,2,"small",11),i.Oc(7,v,2,2,"small",12),i.gc(),i.hc(8,"div",13),i.hc(9,"h3",1),i.Qc(10),i.gc(),i.gc(),i.hc(11,"div",13),i.hc(12,"div",14),i.hc(13,"div",15),i.hc(14,"h5"),i.Qc(15," Participants: "),i.gc(),i.hc(16,"ul",16),i.Oc(17,S,2,3,"li",17),i.gc(),i.gc(),i.hc(18,"div",15),i.hc(19,"h5"),i.Qc(20," Administrators: "),i.gc(),i.hc(21,"ul",16),i.Oc(22,O,2,3,"li",17),i.gc(),i.gc(),i.gc(),i.hc(23,"div",18),i.hc(24,"h5"),i.Qc(25," Status: "),i.gc(),i.hc(26,"p",19),i.Qc(27),i.gc(),i.gc(),i.gc(),i.gc()),2&t){const t=i.tc(2);i.Ob(1),i.Nc("margin-left","20","px"),i.Ob(1),i.zc("ngIf",t.isDialog),i.Ob(1),i.zc("ngIf",t.versionIsDifferent()&&!t.isLastVersion),i.Ob(1),i.zc("ngIf",t.isLastVersion),i.Ob(2),i.zc("ngIf",null!==t.currentVersion),i.Ob(1),i.zc("ngIf",t.isLastVersion),i.Ob(2),i.Qb(t.propertyHasChanged("name")?"property-changed":""),i.Ob(1),i.Rc(t.projectSelected.name),i.Ob(7),i.zc("ngForOf",t.projectSelected.participants),i.Ob(5),i.zc("ngForOf",t.projectSelected.administrators),i.Ob(4),i.Qb(t.propertyHasChanged("status")?"property-changed":""),i.zc("ngStyle",i.Bc(16,j,t.projectSelected.status?"#6a74ad":"#ff0000")),i.Ob(1),i.Sc(" ",t.projectSelected.status?"ACTIVE":"UNACTIVE"," ")}}function y(t,e){if(1&t){const t=i.ic();i.hc(0,"div"),i.hc(1,"div",1),i.hc(2,"form",2),i.hc(3,"app-item-versions",3),i.pc("ngModelChange",(function(e){return i.Hc(t),i.tc().setVersion(e)}))("prevVersion",(function(e){return i.Hc(t),i.tc().prevProject=e}))("currentVersion",(function(e){return i.Hc(t),i.tc().currentVersion=e})),i.gc(),i.gc(),i.gc(),i.hc(4,"div",4),i.hc(5,"small",5),i.Qc(6,"*Property edited*"),i.gc(),i.gc(),i.Oc(7,x,28,18,"div",6),i.gc()}if(2&t){const t=i.tc();i.Ob(3),i.zc("ngModel",t.projectSelected)("date",t.date),i.Ob(1),i.Nc("margin","20px"),i.Ob(3),i.zc("ngIf",t.prevProject)}}let k=(()=>{class t{constructor(t,e,c){this.projectService=t,this.lpDialogsService=e,this.dialogsService=c,this.propertiesNoEditables=["prevStates","actionsRequired","__v","createdBy"],this.isDialog=!1,this.close=new i.r,this.back=new i.r,this.isLastVersion=!1,this.restoreVersion=new i.r}ngOnChanges(t){t.projectSelected&&this.projectSelected&&(this.projectPristine=n.d.copyObject(this.projectSelected))}restore(){this.lpDialogsService.openConfirmDialog("THIS VERSION WILL REPLACE THE CURRENT ONE","Are you sure?").subscribe(t=>{t&&(this.restoreVersion.emit(this.checkChangesToEdit()),this.checkChangesToEdit())})}checkChangesToEdit(){const t=Object.keys(this.projectSelected).reduce((t,e)=>(!this.propertiesNoEditables.includes(e)&&(t[e]=this.projectSelected[e]),t),{}),e=Object.keys(this.projectPristine).reduce((t,e)=>(!this.propertiesNoEditables.includes(e)&&(t[e]=this.projectPristine[e]),t),{});return{projectChanges:n.d.getObjectDifferences(e,t),id:this.projectSelected._id}}versionIsDifferent(){return!n.d.areEquals(this.prevProject,this.projectSelected)}propertyHasChanged(t){return 0!==this.currentVersion&&!!this.prevProject&&JSON.stringify(this.prevProject[t])!=JSON.stringify(this.projectSelected[t])}setVersion(t){this.projectSelected=t;const e=Object.keys(this.projectSelected).reduce((t,e)=>(!this.propertiesNoEditables.includes(e)&&(t[e]=this.projectSelected[e]),t),{}),c=Object.keys(this.projectPristine).reduce((t,e)=>(!this.propertiesNoEditables.includes(e)&&(t[e]=this.projectPristine[e]),t),{});this.isLastVersion=n.d.areEquals(e,c)}editProject(){this.dialogsService.openEditProjectDialog(this.projectSelected),this.close.emit()}}return t.\u0275fac=function(e){return new(e||t)(i.bc(r.a),i.bc(s.b),i.bc(o.a))},t.\u0275cmp=i.Vb({type:t,selectors:[["app-project-detail"]],inputs:{isDialog:"isDialog",date:"date",projectSelected:"projectSelected"},outputs:{close:"close",back:"back",restoreVersion:"restoreVersion"},features:[i.Mb],decls:1,vars:1,consts:[[4,"ngIf"],["fxLayoutAlign","center"],["action",""],["name","projectSelected",3,"ngModel","date","ngModelChange","prevVersion","currentVersion"],["fxLayoutAlign","flex-start"],[1,"property-changed"],["fxLayout","column","fxLayoutAlign","center",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center"],["fxLayoutAlign","flex-end"],[3,"click",4,"ngIf"],["fxLayoutAlign","space-between"],["class","small-user",4,"ngIf"],["class","small-current-state","fxLayoutAlign","center",3,"color",4,"ngIf"],["fxLayout","column"],["fxLayout","row"],["fxFlex","50","fxLayout","column",1,"category-div"],[1,"ul-users"],["role","listitem",3,"class",4,"ngFor","ngForOf"],["fxFlex","33","fxLayout","row","fxLayoutAlign","center","fxLayoutGap","50px",1,"category-div"],[3,"ngStyle"],[3,"click"],[1,"small-user"],["fxLayoutAlign","center",1,"small-current-state"],["role","listitem"]],template:function(t,e){1&t&&i.Oc(0,y,8,5,"div",0),2&t&&i.zc("ngIf",e.date&&e.projectSelected)},directives:[a.t,d.e,l.E,l.p,l.q,h.a,l.o,l.r,d.f,d.b,a.s,d.g,a.w,p.d,u.a],styles:[".category-div[_ngcontent-%COMP%]{margin-top:20px;width:100%}.category-div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:bolder;margin-bottom:5px}.category-div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .category-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.property-changed[_ngcontent-%COMP%]{color:#d1870c}.ul-users[_ngcontent-%COMP%]{max-height:100px;overflow-y:scroll}.ul-users[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.small-current-state[_ngcontent-%COMP%], .small-user[_ngcontent-%COMP%]{font-weight:bolder;color:#7b87cc}"]}),t})()},YtIn:function(t,e,c){"use strict";c.d(e,"a",(function(){return d}));var i=c("Brg/"),n=c("lJxs"),r=c("fXoL"),s=c("jVv/"),o=c("T1xj"),a=c("HlmG");let d=(()=>{class t{constructor(t,e,c){this.authService=t,this.projectService=e,this.cdr=c,this.date=(new Date).getTime()}restoreVersion(t){let e=i.d.copyObject(t.projectChanges);t.projectChanges.user=this.authService.userOnline._id,t.projectChanges.participants&&(t.projectChanges.participants=t.projectChanges.participants.map(t=>t._id)),this.projectService.putProject(t.projectChanges,this.projectSelected._id).pipe(Object(n.a)(t=>t.project)).subscribe(t=>{this.projectSelected=i.d.mergeObjects(t,e),this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r.bc(s.a),r.bc(o.a),r.bc(r.i))},t.\u0275cmp=r.Vb({type:t,selectors:[["app-project-detail-smart"]],inputs:{date:"date",projectSelected:"projectSelected"},decls:1,vars:2,consts:[[3,"date","projectSelected","restoreVersion"]],template:function(t,e){1&t&&(r.hc(0,"app-project-detail",0),r.pc("restoreVersion",(function(t){return e.restoreVersion(t)})),r.gc()),2&t&&r.zc("date",e.date)("projectSelected",e.projectSelected)},directives:[a.a],encapsulation:2}),t})()}}]);