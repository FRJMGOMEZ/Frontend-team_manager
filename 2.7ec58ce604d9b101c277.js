(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"9AGB":function(t,i,n){"use strict";var e=n("yoF8");function o(t){return 0===t.length?e.identity:1===t.length?t[0]:function(i){return t.reduce((function(t,i){return i(t)}),i)}}i.pipe=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return o(t)},i.pipeFromArray=o},FWf1:function(t,i,n){"use strict";var e=this&&this.__extends||function(){var t=function(i,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])})(i,n)};return function(i,n){function e(){this.constructor=i}t(i,n),i.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),o=n("pshJ"),r=n("GiSu"),c=n("zB/H"),s=n("p//D"),a=n("n3uD"),u=n("MkmW"),f=function(t){function i(n,e,o){var c=t.call(this)||this;switch(c.syncErrorValue=null,c.syncErrorThrown=!1,c.syncErrorThrowable=!1,c.isStopped=!1,arguments.length){case 0:c.destination=r.empty;break;case 1:if(!n){c.destination=r.empty;break}if("object"==typeof n){n instanceof i?(c.syncErrorThrowable=n.syncErrorThrowable,c.destination=n,n.add(c)):(c.syncErrorThrowable=!0,c.destination=new h(c,n));break}default:c.syncErrorThrowable=!0,c.destination=new h(c,n,e,o)}return c}return e(i,t),i.prototype[s.rxSubscriber]=function(){return this},i.create=function(t,n,e){var o=new i(t,n,e);return o.syncErrorThrowable=!1,o},i.prototype.next=function(t){this.isStopped||this._next(t)},i.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},i.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},i.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},i.prototype._next=function(t){this.destination.next(t)},i.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},i.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},i.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},i}(c.Subscription);i.Subscriber=f;var h=function(t){function i(i,n,e,c){var s,a=t.call(this)||this;a._parentSubscriber=i;var u=a;return o.isFunction(n)?s=n:n&&(s=n.next,e=n.error,c=n.complete,n!==r.empty&&(u=Object.create(n),o.isFunction(u.unsubscribe)&&a.add(u.unsubscribe.bind(u)),u.unsubscribe=a.unsubscribe.bind(a))),a._context=u,a._next=s,a._error=e,a._complete=c,a}return e(i,t),i.prototype.next=function(t){if(!this.isStopped&&this._next){var i=this._parentSubscriber;a.config.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable?this.__tryOrSetError(i,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},i.prototype.error=function(t){if(!this.isStopped){var i=this._parentSubscriber,n=a.config.useDeprecatedSynchronousErrorHandling;if(this._error)n&&i.syncErrorThrowable?(this.__tryOrSetError(i,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(i.syncErrorThrowable)n?(i.syncErrorValue=t,i.syncErrorThrown=!0):u.hostReportError(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;u.hostReportError(t)}}},i.prototype.complete=function(){var t=this;if(!this.isStopped){var i=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};a.config.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable?(this.__tryOrSetError(i,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},i.prototype.__tryOrUnsub=function(t,i){try{t.call(this._context,i)}catch(n){if(this.unsubscribe(),a.config.useDeprecatedSynchronousErrorHandling)throw n;u.hostReportError(n)}},i.prototype.__tryOrSetError=function(t,i,n){if(!a.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{i.call(this._context,n)}catch(e){return a.config.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(u.hostReportError(e),!0)}return!1},i.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},i}(f);i.SafeSubscriber=h},GMZp:function(t,i,n){"use strict";i.isObject=function(t){return null!==t&&"object"==typeof t}},GiSu:function(t,i,n){"use strict";var e=n("n3uD"),o=n("MkmW");i.empty={closed:!0,next:function(t){},error:function(t){if(e.config.useDeprecatedSynchronousErrorHandling)throw t;o.hostReportError(t)},complete:function(){}}},LBXl:function(t,i,n){"use strict";i.UnsubscriptionError=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,i){return i+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}()},MkmW:function(t,i,n){"use strict";i.hostReportError=function(t){setTimeout((function(){throw t}),0)}},Q1FS:function(t,i,n){"use strict";var e=n("yx2s"),o=n("Xwq/"),r=n("zfKp"),c=n("9AGB"),s=n("n3uD");function a(t){if(t||(t=s.config.Promise||Promise),!t)throw new Error("no Promise impl found");return t}i.Observable=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(i){var n=new t;return n.source=this,n.operator=i,n},t.prototype.subscribe=function(t,i,n){var e=this.operator,r=o.toSubscriber(t,i,n);if(r.add(e?e.call(r,this.source):this.source||s.config.useDeprecatedSynchronousErrorHandling&&!r.syncErrorThrowable?this._subscribe(r):this._trySubscribe(r)),s.config.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable&&(r.syncErrorThrowable=!1,r.syncErrorThrown))throw r.syncErrorValue;return r},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(i){s.config.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=i),e.canReportError(t)?t.error(i):console.warn(i)}},t.prototype.forEach=function(t,i){var n=this;return new(i=a(i))((function(i,e){var o;o=n.subscribe((function(i){try{t(i)}catch(n){e(n),o&&o.unsubscribe()}}),e,i)}))},t.prototype._subscribe=function(t){var i=this.source;return i&&i.subscribe(t)},t.prototype[r.observable]=function(){return this},t.prototype.pipe=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return 0===t.length?this:c.pipeFromArray(t)(this)},t.prototype.toPromise=function(t){var i=this;return new(t=a(t))((function(t,n){var e;i.subscribe((function(t){return e=t}),(function(t){return n(t)}),(function(){return t(e)}))}))},t.create=function(i){return new t(i)},t}()},"Xwq/":function(t,i,n){"use strict";var e=n("FWf1"),o=n("p//D"),r=n("GiSu");i.toSubscriber=function(t,i,n){if(t){if(t instanceof e.Subscriber)return t;if(t[o.rxSubscriber])return t[o.rxSubscriber]()}return t||i||n?new e.Subscriber(t,i,n):new e.Subscriber(r.empty)}},aJGj:function(t,i,n){"use strict";var e=n("Q1FS");i.EMPTY=new e.Observable((function(t){return t.complete()})),i.empty=function(t){return t?function(t){return new e.Observable((function(i){return t.schedule((function(){return i.complete()}))}))}(t):i.EMPTY}},atIr:function(t,i,n){"use strict";n.r(i),n.d(i,"NotificationsListModule",(function(){return V}));var e=n("ofXK"),o=n("tyNb"),r=n("xgIS"),c=n("eIep"),s=n("lJxs"),a=n("aJGj"),u=n("Brg/"),f=n("fXoL"),h=n("Yt/C"),l=n("1LmZ"),b=n("O31/"),p=n("qmzK"),d=n("EY2u"),g=n("S6We");let y=(()=>{class t{constructor(t,i){this.taskService=t,this.dialogsService=i}actionProcess(t,i){let n,e;switch(t){case"Task":n=this.taskService.getTaskById(i)}return n.pipe(Object(c.a)(i=>(e=i,this.dialogsService.showActionsRequired(i.actionsRequired).pipe(Object(c.a)(n=>{let e;switch(t){case"Task":e=this.taskService.putTask({[Object.keys(n)[0]]:n[Object.keys(n)[0]]},i._id)}return e||Object(d.b)()})))))}}return t.\u0275fac=function(i){return new(i||t)(f.lc(g.a),f.lc(p.a))},t.\u0275prov=f.Xb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var S=n("WLNs"),m=n("SV+Y"),v=n("XiUz"),w=n("bTqV"),_=n("znSr"),x=n("mVP8"),E=n("Wp6s"),O=n("NFeN"),N=n("Qu3c");function k(t,i){if(1&t){const t=f.ic();f.hc(0,"div",10),f.hc(1,"button",11),f.pc("click",(function(){f.Hc(t);const i=f.tc(2);return i.toggleNotification.emit(i.notification._id)})),f.hc(2,"mat-icon"),f.Pc(3,"done"),f.gc(),f.gc(),f.gc()}}function P(t,i){if(1&t){const t=f.ic();f.hc(0,"div",10),f.hc(1,"button",12),f.pc("click",(function(){f.Hc(t);const i=f.tc(2);return i.showActionsRequired.emit(i.notification)})),f.hc(2,"mat-icon",13),f.Pc(3,"assignment_late"),f.gc(),f.gc(),f.gc()}}function T(t,i){if(1&t){const t=f.ic();f.hc(0,"mat-card",1),f.hc(1,"div",2),f.Pc(2),f.gc(),f.hc(3,"div",3),f.Pc(4),f.gc(),f.hc(5,"div",2),f.Pc(6),f.gc(),f.hc(7,"div",3),f.Pc(8),f.gc(),f.hc(9,"div",4),f.Pc(10),f.uc(11,"date"),f.gc(),f.hc(12,"div",5),f.Nc(13,k,4,0,"div",6),f.Nc(14,P,4,0,"div",6),f.hc(15,"div",7),f.hc(16,"button",8),f.pc("click",(function(){f.Hc(t);const i=f.tc();return i.selectNotification.emit(i.notification)})),f.hc(17,"mat-icon"),f.Pc(18,"launch"),f.gc(),f.gc(),f.gc(),f.hc(19,"div",9),f.hc(20,"button",8),f.pc("click",(function(){f.Hc(t);const i=f.tc();return i.selectNotification.emit(i.notification)})),f.hc(21,"mat-icon"),f.Pc(22,"info"),f.gc(),f.gc(),f.gc(),f.gc(),f.gc()}if(2&t){const t=f.tc();f.Mc("background-color",t.isChecked?"#fcebcd":"white"),f.Ob(2),f.Rc(" ",t.notification.project?t.notification.project.name:""," "),f.Ob(2),f.Rc(" ",t.notification.type," "),f.Ob(2),f.Rc(" ",t.notification.userFrom.name," "),f.Ob(2),f.Rc(" ",t.method," "),f.Ob(2),f.Rc(" ",f.wc(11,13,t.notification.date,"M/d/yy HH:mm")," "),f.Ob(3),f.zc("ngIf",!t.isChecked&&!t.hasActionsRequired),f.Ob(1),f.zc("ngIf",t.hasActionsRequired),f.Ob(2),f.Mc("background-color","white"!=t.color||t.isChecked?t.color:"white"),f.Ob(4),f.Mc("color","#7b87cc")}}let F=(()=>{class t{constructor(t,i){this.authService=t,this.mdService=i,this.selectNotification=new f.r,this.toggleNotification=new f.r,this.showActionsRequired=new f.r}get isChecked(){const t=this.notification.usersTo.find(t=>t.user===this.userOnline._id);return!t||!!t.checked}get method(){let t;switch(this.notification.method){case"POST":t="CREATION";break;case"PUT":t="EDITION";break;case"DELETE":t="DELETION"}return t}ngOnInit(){this.hasActionsRequired=!!this.notification.actionsRequired.find(t=>t.usersTo.includes(this.authService.userOnline._id))}}return t.\u0275fac=function(i){return new(i||t)(f.bc(b.a),f.bc(m.a))},t.\u0275cmp=f.Vb({type:t,selectors:[["app-notification-card"]],inputs:{notification:"notification",color:"color",userOnline:"userOnline"},outputs:{selectNotification:"selectNotification",toggleNotification:"toggleNotification",showActionsRequired:"showActionsRequired"},decls:1,vars:1,consts:[["fxLayout","row",3,"background-color",4,"ngIf"],["fxLayout","row"],["fxFlex.gt-sm","14","fxFlex.lt-md","20"],["fxHide.lt-md","","fxShow.gt-sm","","fxFlex","14"],["fxFlex","30"],["fxLayoutAlign","space-around","fxFlex.gt-sm","24","fxFlex.lt-md","40"],["fxFlex","50",4,"ngIf"],["fxHide.lt-md","","fxShow.gt-sm","","fxFlex","50"],["mat-raised-button","","fxLayout","column","fxLayoutAlign","center",3,"click"],["fxShow.lt-md","","fxHide.gt-sm","","fxFlex","50"],["fxFlex","50"],["fxLayout","column","fxLayoutAlign","center","mat-raised-button","",3,"click"],["matTooltip","ACTIONS REQUIRED","fxLayout","column","fxLayoutAlign","center","mat-raised-button","",3,"click"],["color","warn"]],template:function(t,i){1&t&&f.Nc(0,T,23,16,"mat-card",0),2&t&&f.zc("ngIf",i.notification)},directives:[e.l,E.a,v.c,v.a,_.b,v.b,w.a,O.a,N.a],pipes:[e.e],styles:[".button-hidden[_ngcontent-%COMP%]{display:none!important}"]}),t})();const R=["divNotifications"];function D(t,i){1&t&&(f.hc(0,"div",7),f.hc(1,"span",8),f.Pc(2,"Project"),f.gc(),f.hc(3,"span",9),f.Pc(4,"Type"),f.gc(),f.hc(5,"span",8),f.Pc(6,"User"),f.gc(),f.hc(7,"span",9),f.Pc(8,"Method"),f.gc(),f.hc(9,"span",10),f.Pc(10,"Date"),f.gc(),f.gc())}function A(t,i){if(1&t){const t=f.ic();f.hc(0,"div"),f.hc(1,"app-notification-card",11),f.pc("selectNotification",(function(i){return f.Hc(t),f.tc().selectNotification(i)}))("toggleNotification",(function(i){return f.Hc(t),f.tc().toggleNotification(i)}))("showActionsRequired",(function(i){return f.Hc(t),f.tc().showActionsRequired(i)})),f.gc(),f.gc()}if(2&t){const t=i.$implicit,n=f.tc();f.Ob(1),f.zc("color",n.notificationSelected&&n.notificationSelected._id===t._id?"#7b87cc":"white")("notification",t)("userOnline",n.userOnline)}}let H=(()=>{class t{constructor(t,i,n,e,o,r,c,s,a,u){this.notificationService=t,this.ar=i,this.router=n,this.homeComponent=e,this.authService=o,this.cdr=r,this.dialogsService=c,this.actionsRequiredService=s,this.lpDialogsService=a,this.mdService=u,this.notifications=[],this.notificationsFrom=0,this.notificationsLimit=11,this.notificationsCount=0}ngOnInit(){this.params=this.ar.firstChild?this.ar.firstChild.snapshot.paramMap:void 0,this.path=this.router.url.includes("new")?"new":"record",this.cdr.detectChanges(),this.userOnline=this.authService.userOnline,this.notificationSelectedSubs=this.notificationService.notificationSelected$.subscribe(t=>{this.notificationSelected=t}),this.notificationSubs=this.notificationService.notification$.subscribe(t=>{this.notifications=[t,...this.notifications]}),this.queryString=u.c.get("state-data","notification-filters"),this.getNotifications(this.queryString).subscribe(t=>{this.notificationsCount=t.count,this.notifications=[...t.notifications].sort((t,i)=>i.date-t.date),this.setNotificationSelected()})}ngAfterViewInit(){this.listenningScroll()}setNotificationSelected(){const t=this.params&&this.params.get("id")?this.params.get("id"):void 0,i=u.c.get("state-data","notification-selected");if(this.homeComponent.notificationSelected)this.notificationSelected=this.homeComponent.notificationSelected;else if(t){const i=this.notifications.find(i=>i._id===t);i?this.notificationService.selectNotification(i):this.getNotificationById(t)}else if(i){const t=this.notifications.find(t=>t._id===i);t?this.selectNotification(t):this.getNotificationById(i)}}getNotifications(t){let i;return this.queryString=t,u.c.set("state-data",this.queryString,"notification-filters"),i="new"===this.path?this.notificationService.getNotificationsUnchecked(this.queryString,this.notificationsFrom,this.notificationsLimit):this.notificationService.getNotifications(this.queryString,this.notificationsFrom,this.notificationsLimit),i}listenningScroll(){Object(r.a)(this.divNotifications.nativeElement,"scroll").subscribe(t=>{const i=t.target;i.scrollHeight-i.scrollTop===i.clientHeight&&this.notifications.length<this.notificationsCount&&(this.notificationsFrom+=this.notificationsLimit,this.getNotifications(this.queryString).subscribe(t=>{this.notificationsCount=t.count,t.notifications=t.notifications.sort((t,i)=>i.date-t.date),t.notifications.forEach(t=>{this.notifications.push(t)})}))})}selectNotification(t){this.notificationService.selectNotification(t),console.log({notification:t}),this.router.navigate([""+t._id],{relativeTo:this.ar}).then(()=>{if(!this.mdService.desktop)switch(t.type){case"Task":this.dialogsService.openTaskInfoDialog(t.item);break;case"Project":this.dialogsService.openProjectInfoDialog(t.item)}})}getNotificationById(t){this.notificationService.getNotificationById(t).subscribe(t=>{this.selectNotification(t)})}unselectNotification(){this.notificationService.selectNotification()}toggleNotification(t){this.lpDialogsService.openConfirmDialog("SET NOTIFICATION AS CHECKED","").pipe(Object(c.a)(i=>i?this.notificationService.toggleNotification(t):Object(a.empty)())).subscribe(i=>{i&&(this.notifications.find(i=>i._id===t).usersTo.find(t=>t.user===this.authService.userOnline._id).checked=!0)})}showActionsRequired(t){this.actionsRequiredService.actionProcess(t.type,t.item._id?t.item._id:t.item).pipe(Object(c.a)(()=>this.notificationService.toggleNotification(t._id))).subscribe(t=>{this.notifications=this.notifications.map(i=>i._id===t._id?t:i)})}searchNotifications(t){this.getNotifications(t).pipe(Object(s.a)(t=>t.notifications)).subscribe(t=>this.notifications=t)}openSearchDialog(){this.dialogsService.openNotificationsFilters(this.queryString).subscribe(t=>{this.notificationsFrom=0,this.searchNotifications(t)})}ngOnDestroy(){this.notificationSubs&&this.notificationSubs.unsubscribe(),this.notificationSelectedSubs&&this.notificationSelectedSubs.unsubscribe(),this.notificationSubs&&this.notificationSubs.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(f.bc(h.a),f.bc(o.a),f.bc(o.b),f.bc(l.a),f.bc(b.a),f.bc(f.i),f.bc(p.a),f.bc(y),f.bc(S.b),f.bc(m.a))},t.\u0275cmp=f.Vb({type:t,selectors:[["app-notifications-list"]],viewQuery:function(t,i){var n;1&t&&f.Vc(R,!0),2&t&&f.Ec(n=f.qc())&&(i.divNotifications=n.first)},decls:8,vars:3,consts:[["fxLayout","column",1,"div-notifications-container"],["fxLayout","column","fxLayoutAlign","center","mat-raised-button","","fxFlex.lt-md","5","fxShow.lt-md","","fxHide.gt-sm","",3,"click"],["fxHide.lt-md","","fxShow.gt-sm","",3,"queryString","getNotifications"],["fxFlex.lt-md","7","class","div-notifications-labels",4,"ngIf"],["fxFlex.lt-md","88",1,"div-notifications-list"],["divNotifications",""],[4,"ngFor","ngForOf"],["fxFlex.lt-md","7",1,"div-notifications-labels"],["fxFlex.gt-sm","14","fxFlex.lt-md","20"],["fxHide.lt-md","","fxShow.gt-sm","","fxFlex","14"],["fxFlex.gt-sm","20","fxFlex.lt-md","30"],[3,"color","notification","userOnline","selectNotification","toggleNotification","showActionsRequired"]],template:function(t,i){1&t&&(f.hc(0,"div",0),f.hc(1,"button",1),f.pc("click",(function(){return i.openSearchDialog()})),f.Pc(2,"SEARCH"),f.gc(),f.hc(3,"app-notifications-filter",2),f.pc("getNotifications",(function(t){return i.notificationsFrom=0,i.searchNotifications(t)})),f.gc(),f.Nc(4,D,11,0,"div",3),f.hc(5,"div",4,5),f.Nc(7,A,2,3,"div",6),f.gc(),f.gc()),2&t&&(f.Ob(3),f.zc("queryString",i.queryString),f.Ob(1),f.zc("ngIf",i.notifications&&i.notifications.length>0),f.Ob(3),f.zc("ngForOf",i.notifications))},directives:[v.c,w.a,v.b,v.a,_.b,x.a,e.l,e.k,F],styles:[".div-notifications-container[_ngcontent-%COMP%]{height:100%}.div-notifications-list[_ngcontent-%COMP%]{height:100%;overflow-y:scroll}.div-notifications-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;background:transparent}.div-notifications-labels[_ngcontent-%COMP%]{margin-top:0;padding:1.5vh;background-color:#f1f1f1}"]}),t})();const q=[{path:"",component:H,children:[{path:":id",component:H}]}];let I=(()=>{class t{}return t.\u0275mod=f.Zb({type:t}),t.\u0275inj=f.Yb({factory:function(i){return new(i||t)},imports:[[e.c,o.e.forChild(q)],o.e]}),t})();var j=n("jAig"),C=n("YUcS"),L=n("CDL9"),M=n("e/WU"),U=n("3Pt+"),z=n("mvOm"),B=n("PyEr");let V=(()=>{class t{}return t.\u0275mod=f.Zb({type:t}),t.\u0275inj=f.Yb({factory:function(i){return new(i||t)},imports:[[e.c,I,j.a,C.a,L.a,M.b,U.g,B.a,z.b]]}),t})()},mbIT:function(t,i,n){"use strict";i.isArray=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}()},n3uD:function(t,i,n){"use strict";var e=!1;i.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){var i=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+i.stack)}else e&&console.log("RxJS: Back to a better error behavior. Thank you. <3");e=t},get useDeprecatedSynchronousErrorHandling(){return e}}},"p//D":function(t,i,n){"use strict";i.rxSubscriber=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),i.$$rxSubscriber=i.rxSubscriber},pshJ:function(t,i,n){"use strict";i.isFunction=function(t){return"function"==typeof t}},yoF8:function(t,i,n){"use strict";i.identity=function(t){return t}},yx2s:function(t,i,n){"use strict";var e=n("FWf1");i.canReportError=function(t){for(;t;){var i=t.destination;if(t.closed||t.isStopped)return!1;t=i&&i instanceof e.Subscriber?i:null}return!0}},"zB/H":function(t,i,n){"use strict";var e=n("mbIT"),o=n("GMZp"),r=n("pshJ"),c=n("LBXl");function s(t){return t.reduce((function(t,i){return t.concat(i instanceof c.UnsubscriptionError?i.errors:i)}),[])}i.Subscription=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var i;return t.prototype.unsubscribe=function(){var i;if(!this.closed){var n=this._parentOrParents,a=this._unsubscribe,u=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var f=0;f<n.length;++f)n[f].remove(this);if(r.isFunction(a))try{a.call(this)}catch(b){i=b instanceof c.UnsubscriptionError?s(b.errors):[b]}if(e.isArray(u)){f=-1;for(var h=u.length;++f<h;){var l=u[f];if(o.isObject(l))try{l.unsubscribe()}catch(b){i=i||[],b instanceof c.UnsubscriptionError?i=i.concat(s(b.errors)):i.push(b)}}}if(i)throw new c.UnsubscriptionError(i)}},t.prototype.add=function(i){var n=i;if(!i)return t.EMPTY;switch(typeof i){case"function":n=new t(i);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var e=n;(n=new t)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+i+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof t){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var r=this._subscriptions;return null===r?this._subscriptions=[n]:r.push(n),n},t.prototype.remove=function(t){var i=this._subscriptions;if(i){var n=i.indexOf(t);-1!==n&&i.splice(n,1)}},t.EMPTY=((i=new t).closed=!0,i),t}()},zfKp:function(t,i,n){"use strict";i.observable=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}()}}]);