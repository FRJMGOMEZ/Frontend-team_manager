(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"SV+Y":function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var s=c("lJxs"),a=c("vkgz"),i=c("fXoL"),n=c("pD6V");let o=(()=>{class t{constructor(t){this.media=t,this.media$=this.media.asObservable(),this.mediaSubscription=this.getCurrentMedia().subscribe()}getCurrentMedia(){return this.media$.pipe(Object(s.a)(t=>t[0].mqAlias),Object(a.a)(t=>{const e=this.desktop;switch(t){case"xl":case"lg":case"md":this.desktop=!0;break;case"sm":case"xs":this.desktop=!1}this.mqAlias&&e!=this.desktop&&window.location.reload(),this.mqAlias=t}))}ngOnDestroy(){this.mediaSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.lc(n.g))},t.\u0275prov=i.Xb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},d6DY:function(t,e,c){"use strict";c.r(e),c.d(e,"TaskManagerModule",(function(){return ot}));var s=c("ofXK"),a=c("YUcS"),i=c("PyEr"),n=c("0IaG"),o=c("fXoL");let r=(()=>{class t{}return t.\u0275mod=o.Zb({type:t}),t.\u0275inj=o.Yb({factory:function(e){return new(e||t)},providers:[],imports:[[s.c,n.h]]}),t})();var l=c("tyNb"),g=c("wZkO"),h=c("vkgz"),d=c("Brg/"),u=c("T1xj"),p=c("S6We"),m=c("SV+Y"),f=c("XiUz"),k=c("znSr"),b=c("bTqV"),O=c("STbY"),S=c("NFeN"),v=c("kmnG"),x=c("qFsG"),y=c("3Pt+"),T=c("d3UM"),L=c("e/WU"),I=c("FKr1");function C(t,e){if(1&t&&(o.hc(0,"mat-option",19),o.Qc(1),o.gc()),2&t){const t=e.$implicit;o.zc("value",t),o.Ob(1),o.Rc(t)}}function M(t,e){if(1&t&&(o.hc(0,"mat-option",19),o.Qc(1),o.gc()),2&t){const t=e.$implicit;o.zc("value",t.value),o.Ob(1),o.Rc(t.label)}}function w(t,e){if(1&t&&(o.hc(0,"mat-option",19),o.Qc(1),o.gc()),2&t){const t=e.$implicit;o.zc("value",t._id),o.Ob(1),o.Rc(t.name)}}function z(t,e){if(1&t&&(o.hc(0,"mat-option",19),o.Qc(1),o.gc()),2&t){const t=e.$implicit;o.zc("value",t._id),o.Ob(1),o.Rc(t.name)}}let j=(()=>{class t{constructor(){this.getItems=new o.r,this.filters={_id:"",name:"",createdBy:"",participants:[],status:"",from:null,to:null,priority:"",project:""},this.options={status:["done","pending","overdue"],createdBy:[],participants:[],priority:[{label:"low",value:3},{label:"medium",value:2},{label:"high",value:1}]}}ngOnInit(){this.filters.project=this.projectId}ngOnChanges(t){t.participants&&this.participants&&(this.options.participants=d.d.copyObject(this.participants),this.options.createdBy=this.participants.filter(t=>"ADMIN_ROLE"===t.role))}setDate(t,e){this.filters[e]=t.getTime()}searchItems(){let t=d.d.toQueryString(this.filters);this.getItems.next(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Vb({type:t,selectors:[["app-task-manager-filter"]],inputs:{projectId:"projectId",participants:"participants"},outputs:{getItems:"getItems"},features:[o.Mb],decls:49,vars:19,consts:[["fxLayoutAlign","center"],["mat-button","","mat-mini-fab","","color","accent","ngClass.gt-xs","btn-search-desktop","ngClass.xs","btn-search-mobile",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],["filtersMenu","matMenu"],["fxLayout","column",3,"click"],["fxLayout","row","fxLayoutAlign","space-around","fxLayoutGap","15px"],["fxFlex","40",1,"example-full-width"],["matInput","","placeholder","Task ID","autocomplete","off",3,"ngModel","ngModelChange"],["matInput","","placeholder","Task name","autocomplete","off",3,"ngModel","ngModelChange"],["fxLayout","row","fxLayoutGap","15px","fxLayoutAlign","space-around"],["fxFlex","40","appearance","fill"],["matNativeControl","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["multiple","","matNativeControl","",3,"ngModel","ngModelChange"],["fxLayout","column","fxLayoutAlign","center","fxFlex","40",1,"dates-container"],["dateFormat","time","placeholder","Start date",3,"ngModel","ngModelChange"],["dateFormat","time","placeholder","End date",3,"ngModel","ngModelChange"],["fxFlex","40","fxLayoutAlign","space-around"],["mat-mini-fab","","color","accent",1,"btn-search-dialog",3,"click"],[3,"value"]],template:function(t,e){if(1&t){const t=o.ic();o.hc(0,"div",0),o.hc(1,"button",1,2),o.hc(3,"mat-icon"),o.Qc(4,"search"),o.gc(),o.gc(),o.gc(),o.hc(5,"mat-menu",null,3),o.hc(7,"div",4),o.pc("click",(function(t){return t.stopPropagation()})),o.hc(8,"div",5),o.hc(9,"mat-form-field",6),o.hc(10,"mat-label"),o.Qc(11,"ID"),o.gc(),o.hc(12,"input",7),o.pc("ngModelChange",(function(t){return e.filters._id=t})),o.gc(),o.gc(),o.hc(13,"mat-form-field",6),o.hc(14,"mat-label"),o.Qc(15,"Name"),o.gc(),o.hc(16,"input",8),o.pc("ngModelChange",(function(t){return e.filters.name=t})),o.gc(),o.gc(),o.gc(),o.hc(17,"div",9),o.hc(18,"mat-form-field",10),o.hc(19,"mat-label"),o.Qc(20,"Status"),o.gc(),o.hc(21,"mat-select",11),o.pc("ngModelChange",(function(t){return e.filters.status=t})),o.Oc(22,C,2,2,"mat-option",12),o.gc(),o.gc(),o.hc(23,"mat-form-field",10),o.hc(24,"mat-label"),o.Qc(25,"Priority"),o.gc(),o.hc(26,"mat-select",11),o.pc("ngModelChange",(function(t){return e.filters.priority=t})),o.Oc(27,M,2,2,"mat-option",12),o.gc(),o.gc(),o.gc(),o.hc(28,"div",9),o.hc(29,"mat-form-field",10),o.hc(30,"mat-label"),o.Qc(31,"Creator/editor"),o.gc(),o.hc(32,"mat-select",11),o.pc("ngModelChange",(function(t){return e.filters.createdBy=t})),o.Oc(33,w,2,2,"mat-option",12),o.gc(),o.gc(),o.hc(34,"mat-form-field",10),o.hc(35,"mat-label"),o.Qc(36,"Participants"),o.gc(),o.hc(37,"mat-select",13),o.pc("ngModelChange",(function(t){return e.filters.participants=t})),o.Oc(38,z,2,2,"mat-option",12),o.gc(),o.gc(),o.gc(),o.hc(39,"div",5),o.hc(40,"div",14),o.hc(41,"lp-date-selector",15),o.pc("ngModelChange",(function(t){return e.setDate(t,"from")})),o.uc(42,"lpParseDate"),o.gc(),o.hc(43,"lp-date-selector",16),o.pc("ngModelChange",(function(t){return e.setDate(t,"to")})),o.uc(44,"lpParseDate"),o.gc(),o.gc(),o.hc(45,"div",17),o.hc(46,"button",18),o.pc("click",(function(){o.Hc(t);const c=o.Fc(2);return e.searchItems(),c.closeMenu()})),o.hc(47,"mat-icon"),o.Qc(48,"search"),o.gc(),o.gc(),o.gc(),o.gc(),o.gc(),o.gc()}if(2&t){const t=o.Fc(6);o.Ob(1),o.zc("matMenuTriggerFor",t),o.Ob(11),o.zc("ngModel",e.filters._id),o.Ob(4),o.zc("ngModel",e.filters.name),o.Ob(5),o.zc("ngModel",e.filters.status),o.Ob(1),o.zc("ngForOf",e.options.status),o.Ob(4),o.zc("ngModel",e.filters.priority),o.Ob(1),o.zc("ngForOf",e.options.priority),o.Ob(5),o.zc("ngModel",e.filters.createdBy),o.Ob(1),o.zc("ngForOf",e.options.createdBy),o.Ob(4),o.zc("ngModel",e.filters.participants),o.Ob(1),o.zc("ngForOf",e.options.participants),o.Ob(3),o.zc("ngModel",o.wc(42,13,e.filters.from,"date")),o.Ob(2),o.zc("ngModel",o.wc(44,16,e.filters.to,"date"))}},directives:[f.e,b.b,k.a,O.d,S.a,O.e,f.f,f.g,v.c,f.b,v.g,x.b,y.d,y.o,y.r,T.a,s.s,L.a,I.n],pipes:[i.b],styles:[".dates-container[_ngcontent-%COMP%]{margin:20px}.btn-search-desktop[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:10px}.btn-search-mobile[_ngcontent-%COMP%]{margin:15px}.btn-search-dialog[_ngcontent-%COMP%]{margin-top:25px}  .mat-menu-panel{top:0;max-width:none!important}"],changeDetection:0}),t})();var P=c("+0xr"),F=c("M9IT");const Q=["paginator"];function D(t,e){1&t&&(o.hc(0,"th",12),o.Qc(1," Name "),o.gc())}function _(t,e){if(1&t&&(o.hc(0,"td",13),o.Qc(1),o.gc()),2&t){const t=e.$implicit;o.Ob(1),o.Sc(" ",t.name," ")}}function A(t,e){1&t&&(o.hc(0,"th",12),o.Qc(1," Status "),o.gc())}const E=function(t){return{color:t}};function H(t,e){if(1&t&&(o.hc(0,"td",13),o.hc(1,"p",14),o.Qc(2),o.gc(),o.gc()),2&t){const t=e.$implicit;o.Ob(1),o.zc("ngStyle",o.Bc(2,E,!0===t.status?"#7b87cc":"#d1870c")),o.Ob(1),o.Sc(" ",t.status," ")}}function R(t,e){1&t&&(o.hc(0,"th",12),o.Qc(1," Priority "),o.gc())}function N(t,e){if(1&t&&(o.hc(0,"td",13),o.hc(1,"p",15),o.Qc(2),o.gc(),o.hc(3,"p",16),o.Qc(4),o.gc(),o.gc()),2&t){const t=e.$implicit;o.Ob(2),o.Sc(" ",1===t.priority?"HIGH":2===t.priority?"MEDIUM":"LOW"," "),o.Ob(2),o.Rc(t.priority)}}function $(t,e){1&t&&o.cc(0,"th",12)}function B(t,e){if(1&t){const t=o.ic();o.hc(0,"td",13),o.hc(1,"mat-icon",17),o.pc("click",(function(){o.Hc(t);const c=e.$implicit,s=o.tc();return s.taskSelected!=c._id?s.selectTask.next(c._id):null})),o.Qc(2,"launch"),o.gc(),o.gc()}if(2&t){const t=e.$implicit,c=o.tc();o.Ob(1),o.zc("color",c.taskSelected===t._id?"accent":"primary")}}function G(t,e){1&t&&o.cc(0,"tr",18)}function U(t,e){1&t&&o.cc(0,"tr",19)}let Y=(()=>{class t{constructor(){this.pageSize=5,this.taskTotal=0,this.taskFrom=0,this.tasksList=[],this.selectTask=new o.r,this.getItems=new o.r,this.displayedColumns=["name","status","priority","options"]}ngOnInit(){}paginatorChange(t){this.getItems.emit(this.pageSize*t.pageIndex)}ngOnChanges(t){t.taskTotal&&null!=this.taskTotal&&this.paginator&&(this.paginator.pageIndex=0)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Vb({type:t,selectors:[["app-task-manager-list"]],viewQuery:function(t,e){var c;1&t&&o.Wc(Q,!0),2&t&&o.Ec(c=o.qc())&&(e.paginator=c.first)},inputs:{taskTotal:"taskTotal",taskFrom:"taskFrom",taskSelected:"taskSelected",tasksList:"tasksList"},outputs:{selectTask:"selectTask",getItems:"getItems"},features:[o.Mb],decls:18,vars:5,consts:[["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","status"],["matColumnDef","priority"],["matColumnDef","options","stickyEnd",""],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["fxLayoutAlign","center"],["fxFlex","100",3,"length","pageSize","page"],["paginator",""],["mat-header-cell",""],["mat-cell",""],[3,"ngStyle"],["fxHide.xs","","fxShow.gt-xs",""],["fxHide.gt-xs","","fxShow.xs",""],[3,"color","click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(o.hc(0,"table",0),o.fc(1,1),o.Oc(2,D,2,0,"th",2),o.Oc(3,_,2,1,"td",3),o.ec(),o.fc(4,4),o.Oc(5,A,2,0,"th",2),o.Oc(6,H,3,4,"td",3),o.ec(),o.fc(7,5),o.Oc(8,R,2,0,"th",2),o.Oc(9,N,5,2,"td",3),o.ec(),o.fc(10,6),o.Oc(11,$,1,0,"th",2),o.Oc(12,B,3,1,"td",3),o.ec(),o.Oc(13,G,1,0,"tr",7),o.Oc(14,U,1,0,"tr",8),o.gc(),o.hc(15,"div",9),o.hc(16,"mat-paginator",10,11),o.pc("page",(function(t){return e.paginatorChange(t)})),o.gc(),o.gc()),2&t&&(o.zc("dataSource",e.tasksList),o.Ob(13),o.zc("matHeaderRowDef",e.displayedColumns),o.Ob(1),o.zc("matRowDefColumns",e.displayedColumns),o.Ob(2),o.zc("length",e.taskTotal)("pageSize",e.pageSize))},directives:[P.o,P.c,P.i,P.b,P.k,P.n,f.e,F.a,f.b,P.h,P.a,s.w,k.d,k.c,S.a,P.j,P.m],styles:["table[_ngcontent-%COMP%]{width:100%!important}"]}),t})();function q(t,e){1&t&&o.cc(0,"router-outlet")}function V(t,e){1&t&&(o.hc(0,"h4",9),o.Qc(1,"NO TASK SELECTED"),o.gc())}const K=function(){return{"margin-top":"70px"}};function W(t,e){if(1&t){const t=o.ic();o.hc(0,"div",2),o.hc(1,"div",3),o.hc(2,"div",4),o.hc(3,"app-task-manager-filter",5),o.pc("getItems",(function(e){return o.Hc(t),o.tc().getTasks(e,0).subscribe()})),o.gc(),o.gc(),o.hc(4,"div",4),o.hc(5,"app-task-manager-list",6),o.pc("selectTask",(function(e){return o.Hc(t),o.tc().selectTask(e)}))("getItems",(function(e){o.Hc(t);const c=o.tc();return c.getTasks(c.taskQueryString,e).subscribe()})),o.gc(),o.gc(),o.gc(),o.hc(6,"div",7),o.Oc(7,q,1,0,"router-outlet",1),o.hc(8,"div",4),o.Oc(9,V,2,0,"h4",8),o.gc(),o.gc(),o.gc()}if(2&t){const t=o.tc();o.Ob(1),o.zc("ngStyle.lt-md",o.Ac(8,K)),o.Ob(2),o.zc("participants",t.participants)("projectId",t.selectedProject),o.Ob(2),o.zc("tasksList",t.tasksList)("taskSelected",t.taskSelected?t.taskSelected:null)("taskTotal",t.taskTotal),o.Ob(2),o.zc("ngIf",t.taskSelected),o.Ob(2),o.zc("ngIf",!t.taskSelected)}}function X(t,e){1&t&&(o.hc(0,"mat-icon"),o.Qc(1,"list"),o.gc())}function J(t,e){if(1&t){const t=o.ic();o.hc(0,"div",16),o.hc(1,"div",4),o.hc(2,"app-task-manager-filter",17),o.pc("getItems",(function(e){return o.Hc(t),o.tc(2).getTasks(e,0).subscribe()})),o.gc(),o.gc(),o.hc(3,"div",4),o.hc(4,"app-task-manager-list",18),o.pc("selectTask",(function(e){return o.Hc(t),o.tc(2).selectTask(e)}))("getItems",(function(e){o.Hc(t);const c=o.tc(2);return c.getTasks(c.taskQueryString,e).subscribe()})),o.gc(),o.gc(),o.gc()}if(2&t){const t=o.tc(2);o.Ob(2),o.zc("participants",t.participants)("projectId",t.selectedProject),o.Ob(2),o.zc("tasksList",t.tasksList)("taskSelected",t.taskSelected?t.taskSelected._id:null)("taskTotal",t.taskTotal)}}function Z(t,e){1&t&&(o.hc(0,"div",19),o.hc(1,"h4"),o.Qc(2,"THERE ARE NO TASKS IN THE CURRENT PROJECT"),o.gc(),o.gc())}function tt(t,e){1&t&&o.cc(0,"router-outlet")}function et(t,e){1&t&&(o.hc(0,"div",19),o.hc(1,"h4"),o.Qc(2,"NO TASK SELECTED"),o.gc(),o.gc())}function ct(t,e){if(1&t&&(o.hc(0,"div"),o.hc(1,"mat-tab-group",10),o.hc(2,"mat-tab"),o.Oc(3,X,2,0,"ng-template",11),o.Oc(4,J,5,5,"div",12),o.Oc(5,Z,3,0,"div",13),o.gc(),o.hc(6,"mat-tab",14),o.Oc(7,tt,1,0,"router-outlet",1),o.Oc(8,et,3,0,"div",15),o.gc(),o.gc(),o.gc()),2&t){const t=o.tc();o.Ob(4),o.zc("ngIf",t.tasksList.length>0),o.Ob(1),o.zc("ngIf",0===t.tasksList.length),o.Ob(1),o.zc("label",t.taskSelected?t.taskSelectedName:""),o.Ob(1),o.zc("ngIf",t.taskSelected),o.Ob(1),o.zc("ngIf",!t.taskSelected)}}let st=[{path:"",component:(()=>{class t{constructor(t,e,c,s,a){this.projectService=t,this.taskService=e,this.ar=c,this.router=s,this.mdService=a,this.tasksList=[],this.taskSkip=0,this.taskLimit=5,this.selectedProjectSubs=null,this.taskSubs=null}get taskSelectedName(){const t=this.tasksList.length>0?this.tasksList.find(t=>t._id===this.taskSelected):void 0;return t?t.name:""}ngOnInit(){this.listenProjectChanges(),this.listenTaskChanges(),this.selectedProject=this.projectService.selectedProject._id,this.taskSelected=d.c.get("state-data","task-selected"),this.selectedProject&&(this.getTasks("?project="+this.selectedProject,0).subscribe(()=>{this.taskSelected||(this.tasksList[this.tasksList.length-1]?this.navigateToTask(this.tasksList[this.tasksList.length-1]._id):this.taskSelected="")}),this.getParticipants())}listenProjectChanges(){this.selectedProjectSubs=this.projectService.selectedProject$.subscribe(t=>{this.selectedProject=t._id,this.removeTaskInStorage(),this.redirectTo("pages/task-manager")})}listenTaskChanges(){this.taskSubs=this.taskService.task$.subscribe(t=>{if(t)switch(t.action){case"POST":this.taskTotal++,this.taskLimit>this.tasksList.length&&(this.tasksList=[...this.tasksList,t.task]),this.taskSelected||this.navigateToTask(t.task._id);break;case"PUT":this.tasksList=this.tasksList.map(e=>e._id===t.task._id?t.task:e);break;case"DELETE":this.tasksList=this.tasksList.filter(e=>e._id!=t.task._id),this.taskSelected=t.task._id===this.taskSelected?"":this.taskSelected}})}getParticipants(){this.projectService.getParticipants(this.selectedProject).subscribe(t=>{this.participants=t})}getTasks(t,e){return this.taskQueryString=t,this.taskSkip=e,this.taskService.getTasks("month",this.taskQueryString,this.taskSkip,this.taskLimit).pipe(Object(h.a)(t=>{this.taskTotal=t.count,this.tasksList=t.tasks}))}selectTask(t){this.tabsGroup&&(this.tabsGroup.selectedIndex=1),this.navigateToTask(t,"info")}setTaskInStorage(){d.c.set("state-data",this.taskSelected,"task-selected")}removeTaskInStorage(){d.c.remove("state-data","task-selected")}redirectTo(t){this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>this.router.navigate([t]))}navigateToTask(t,e){this.taskSelected=t,this.router.navigate([this.taskSelected,e||d.c.get("state-data","task-manager-tab")||"info"],{relativeTo:this.ar})}ngOnDestroy(){this.selectedProjectSubs&&null!=this.selectedProjectSubs&&this.selectedProjectSubs.unsubscribe(),this.taskSubs&&null!=this.taskSubs&&this.taskSubs.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.bc(u.a),o.bc(p.a),o.bc(l.a),o.bc(l.d),o.bc(m.a))},t.\u0275cmp=o.Vb({type:t,selectors:[["app-task-manager"]],viewQuery:function(t,e){var c;1&t&&o.Wc(g.c,!0),2&t&&o.Ec(c=o.qc())&&(e.tabsGroup=c.first)},decls:2,vars:2,consts:[["fxLayoutAlign.gt-sm","space-around","fxLayout.lt-md","column","fxLayout.gt-sm","row","class","task-manager-container",4,"ngIf"],[4,"ngIf"],["fxLayoutAlign.gt-sm","space-around","fxLayout.lt-md","column","fxLayout.gt-sm","row",1,"task-manager-container"],["fxFlex.gt-sm","22","fxFlex.md","35","fxFlex.lt-md","30","fxLayout","column",3,"ngStyle.lt-md"],["fxLayoutAlign","center"],["fxFlex","100",3,"participants","projectId","getItems"],["fxFlex","100",3,"tasksList","taskSelected","taskTotal","selectTask","getItems"],["fxFlex.gt-sm","75","fxFlex.lt-md","70"],["class","div-no-tasks",4,"ngIf"],[1,"div-no-tasks"],["mat-stretch-tabs","","mat-align-tabs","center"],["mat-tab-label",""],["fxLayout","column",4,"ngIf"],["fxLayoutAlign","center","class","div-no-tasks",4,"ngIf"],[3,"label"],["class","div-no-tasks","fxLayoutAlign","center",4,"ngIf"],["fxLayout","column"],["fxFlex","10",3,"participants","projectId","getItems"],["fxFlex","90",3,"tasksList","taskSelected","taskTotal","selectTask","getItems"],["fxLayoutAlign","center",1,"div-no-tasks"]],template:function(t,e){1&t&&(o.Oc(0,W,10,9,"div",0),o.Oc(1,ct,9,5,"div",1)),2&t&&(o.zc("ngIf",e.mdService.desktop),o.Ob(1),o.zc("ngIf",!e.mdService.desktop))},directives:[s.t,f.e,f.f,f.b,k.d,j,Y,l.h,g.c,g.a,g.d,S.a],styles:[".task-manager-container[_ngcontent-%COMP%]{height:88vh}@media (max-width:1279px){.task-manager-container[_ngcontent-%COMP%]{height:75vh!important}}  .mat-tab-body-wrapper{height:100%!important;margin:0!important}.div-no-tasks[_ngcontent-%COMP%]{margin:50px}"]}),t})(),children:[{path:":id",loadChildren:()=>Promise.all([c.e(0),c.e(16)]).then(c.bind(null,"e+hA")).then(t=>t.TaskManagerPanelModule)}]}],at=(()=>{class t{}return t.\u0275mod=o.Zb({type:t}),t.\u0275inj=o.Yb({factory:function(e){return new(e||t)},imports:[[s.c,l.g.forChild(st)],l.g]}),t})();var it=c("jAig"),nt=c("mvOm");let ot=(()=>{class t{}return t.\u0275mod=o.Zb({type:t}),t.\u0275inj=o.Yb({factory:function(e){return new(e||t)},imports:[[s.c,at,it.a,a.a,L.b,i.a,r,y.i,nt.a]]}),t})()}}]);