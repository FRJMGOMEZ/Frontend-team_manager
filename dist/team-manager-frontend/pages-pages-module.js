(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/library/components/global-dialogs/global-dialogs.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/library/components/global-dialogs/global-dialogs.service.ts ***!
  \*****************************************************************************/
/*! exports provided: GDService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GDService", function() { return GDService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _confirm_dialogs_confirm_dialogs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-dialogs/confirm-dialogs.component */ "./src/app/library/components/global-dialogs/confirm-dialogs/confirm-dialogs.component.ts");
/* harmony import */ var _inform_dialogs_inform_dialogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inform-dialogs/inform-dialogs.component */ "./src/app/library/components/global-dialogs/inform-dialogs/inform-dialogs.component.ts");
/* harmony import */ var _global_dialogs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global-dialogs.module */ "./src/app/library/components/global-dialogs/global-dialogs.module.ts");







//// Global dialogs service ////
class GDService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openConfirmDialog(title = 'CONFIRM DELETION', message = 'Are you sure?') {
        const dialog = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialog.disableClose = true;
        dialog.autoFocus = true;
        dialog.data = { title, message };
        let dialogRef = this.dialog.open(_confirm_dialogs_confirm_dialogs_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogsComponent"], dialog);
        return dialogRef.afterClosed();
    }
    openInfoDialog(message, title, item) {
        const dialog = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialog.disableClose = true;
        dialog.autoFocus = true;
        dialog.data = { message, title, item: item ? item : null };
        let dialogRef = this.dialog.open(_inform_dialogs_inform_dialogs_component__WEBPACK_IMPORTED_MODULE_3__["InformDialogsComponent"], dialog);
        return dialogRef.afterClosed();
    }
}
GDService.ɵfac = function GDService_Factory(t) { return new (t || GDService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
GDService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GDService, factory: GDService.ɵfac, providedIn: _global_dialogs_module__WEBPACK_IMPORTED_MODULE_4__["GlobalDialogsModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GDService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: _global_dialogs_module__WEBPACK_IMPORTED_MODULE_4__["GlobalDialogsModule"]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/library/providers/objects-operations.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/library/providers/objects-operations.service.ts ***!
  \*****************************************************************/
/*! exports provided: OOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OOService", function() { return OOService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/* Object-operations-service */
class OOService {
    static copyObject(object) {
        return JSON.parse(JSON.stringify(object));
    }
    static areEquals(obj1, obj2) {
        if (typeof obj1 !== typeof obj2) {
            return false;
        }
        if ((obj1 === undefined && obj2 !== undefined) ||
            (obj1 === undefined && obj1 !== undefined) ||
            (obj1 === null && obj2 !== null) ||
            (obj2 === null && obj1 !== null)) {
            return false;
        }
        if (typeof obj1 === 'object') {
            if (Array.isArray(obj1)) {
                if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
                    return false;
                }
                for (let i = 0; i < obj1.length; i++) {
                    if (!this.areEquals(obj1[i], obj2[i])) {
                        return false;
                    }
                }
            }
            else {
                for (let prop in obj1) {
                    if (obj1.hasOwnProperty(prop)) {
                        if (!obj2.hasOwnProperty(prop)) {
                            return false;
                        }
                        //Endless loop fix for recursive properties
                        if (!this.areEquals(obj1[prop], obj2[prop])) {
                            return false;
                        }
                    }
                }
                for (let prop in obj2) {
                    if (obj2.hasOwnProperty(prop)) {
                        if (!obj1.hasOwnProperty(prop)) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        return obj1 === obj2;
    }
}
OOService.ɵfac = function OOService_Factory(t) { return new (t || OOService)(); };
OOService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OOService, factory: OOService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OOService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/chat/chat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChatComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 2, vars: 0, template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chat works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");






let pagesRoutes = [
    {
        path: '', component: _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
        children: [
            {
                path: '', loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
            },
            /*    {
                 path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
               }, */
            {
                path: 'calendar', loadChildren: () => __webpack_require__.e(/*! import() | calendar-scheduler-calendar-scheduler-module */ "calendar-scheduler-calendar-scheduler-module").then(__webpack_require__.bind(null, /*! ./calendar-scheduler/calendar-scheduler.module */ "./src/app/pages/calendar-scheduler/calendar-scheduler.module.ts")).then(m => m.CalendarSchedulerModule)
            }
            /*  {
               path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
             },
             {
               path:'profile', loadChildren:()=> import('./profile/profile.module').then(m=> m.ProfileModule)
             },
             
              */
        ]
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(pagesRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(pagesRoutes)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_components_header_header_smart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/header/header-smart.component */ "./src/app/shared/components/header/header-smart.component.ts");
/* harmony import */ var _shared_components_projects_project_smart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/projects/project-smart.component */ "./src/app/shared/components/projects/project-smart.component.ts");









const _c0 = function () { return ["/calendar"]; };
const _c1 = function () { return ["/projects"]; };
class PagesComponent {
    constructor() { }
    ngOnInit() { }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 29, vars: 9, consts: [[3, "mode"], ["start", ""], ["matTooltip", "navigate to home"], ["routerLinkActive", "router-link-active"], ["color", "primary"], ["matTooltip", "navigate to calendar"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["matTooltip", "navigate to data visualization"], ["matTooltip", "navigate to chat"], ["matTooltip", "navigate to task manager"], [3, "toggleSideMenu"], [1, "main"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " show_chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-list-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-header-smart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSideMenu", function PagesComponent_Template_app_header_smart_toggleSideMenu_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-projects-smart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _shared_components_header_header_smart_component__WEBPACK_IMPORTED_MODULE_6__["HeaderSmartComponent"], _shared_components_projects_project_smart_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsSmartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\r\n  height: 85vh; \r\n  padding: 0px 10px;\r\n  padding-top:1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBRSxxQ0FBcUM7RUFDbkQsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgaGVpZ2h0OiA4NXZoOyAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOjFyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages',
                templateUrl: './pages.component.html',
                styleUrls: ['./pages.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/pages/chat/chat.component.ts");









class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/event-dialog/event-dialog-smart.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/event-dialog/event-dialog-smart.component.ts ***!
  \********************************************************************************/
/*! exports provided: EventDialogSmartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDialogSmartComponent", function() { return EventDialogSmartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _providers_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/events.service */ "./src/app/shared/providers/events.service.ts");
/* harmony import */ var _event_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-dialog.component */ "./src/app/shared/components/event-dialog/event-dialog.component.ts");






class EventDialogSmartComponent {
    constructor(dialogRef, data, eventService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.eventService = eventService;
    }
    ngOnInit() {
        this.eventService.getEventById(this.data.eventId).subscribe((event) => {
            this.eventSelected = event;
        });
    }
    closeDialog() {
        this.dialogRef.close();
    }
}
EventDialogSmartComponent.ɵfac = function EventDialogSmartComponent_Factory(t) { return new (t || EventDialogSmartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"])); };
EventDialogSmartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventDialogSmartComponent, selectors: [["app-event-dialog-smart"]], decls: 1, vars: 1, consts: [[3, "eventSelected", "close"]], template: function EventDialogSmartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-event-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function EventDialogSmartComponent_Template_app_event_dialog_close_0_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("eventSelected", ctx.eventSelected);
    } }, directives: [_event_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EventDialogComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventDialogSmartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-dialog-smart',
                template: `
    
    <app-event-dialog [eventSelected]="eventSelected" (close)="closeDialog()" > </app-event-dialog>
    `
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _providers_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/event-dialog/event-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/event-dialog/event-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: EventDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDialogComponent", function() { return EventDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");







function EventDialogComponent_mat_dialog_content_1_mat_list_item_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const participant_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](participant_r2.name);
} }
function EventDialogComponent_mat_dialog_content_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Description : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Start date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " End Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Recursive: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Time : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Participants: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EventDialogComponent_mat_dialog_content_1_mat_list_item_38_Template, 2, 1, "mat-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.eventSelected.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "#3f51b5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("created by ", ctx_r0.eventSelected.user["name"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.eventSelected.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 11, ctx_r0.eventSelected.startDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 14, ctx_r0.eventSelected.endDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.eventSelected.recursive, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.eventSelected.startTime, " - ", ctx_r0.eventSelected.endTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.eventSelected.participants);
} }
class EventDialogComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
}
EventDialogComponent.ɵfac = function EventDialogComponent_Factory(t) { return new (t || EventDialogComponent)(); };
EventDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventDialogComponent, selectors: [["app-event-dialog"]], inputs: { eventSelected: "eventSelected" }, outputs: { close: "close" }, decls: 5, vars: 1, consts: [["mat-dialog-title", ""], [4, "ngIf"], ["fxLayoutAlign", "center"], ["mat-raised-button", "", 3, "click"], [1, "category-div"], ["fxLayoutAlign", "space-between", 1, "category-div"], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["role", "listitem"]], template: function EventDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventDialogComponent_mat_dialog_content_1_Template, 39, 17, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDialogComponent_Template_button_click_3_listener() { return ctx.close.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eventSelected);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".event-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.category-div[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-right: 25px;\n  margin-left: 25px;\n  width: 150px;\n}\n\n.category-div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXZlbnQtZGlhbG9nL2V2ZW50LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBSko7O0FBTUk7RUFDSSxtQkFBQTtBQUpSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXZlbnQtZGlhbG9nL2V2ZW50LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5ldmVudC1jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJVxyXG59XHJcblxyXG5cclxuXHJcbi5jYXRlZ29yeS1kaXZ7XHJcbiAgICBtYXJnaW4tdG9wOjQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoyNXB4O1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcblxyXG4gICAgaDV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyXHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-dialog',
                templateUrl: './event-dialog.component.html',
                styleUrls: ['./event-dialog.component.scss']
            }]
    }], function () { return []; }, { eventSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/events-dialog/events-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/events-dialog/events-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: EventsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsDialogComponent", function() { return EventsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EventsDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
EventsDialogComponent.ɵfac = function EventsDialogComponent_Factory(t) { return new (t || EventsDialogComponent)(); };
EventsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventsDialogComponent, selectors: [["app-events-dialog"]], decls: 2, vars: 0, template: function EventsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "events-dialog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2V2ZW50cy1kaWFsb2cvZXZlbnRzLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-events-dialog',
                templateUrl: './events-dialog.component.html',
                styleUrls: ['./events-dialog.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/header/header-smart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/header/header-smart.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderSmartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSmartComponent", function() { return HeaderSmartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_shared_providers_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth/shared/providers/auth.service */ "./src/app/auth/shared/providers/auth.service.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/components/header/header.component.ts");




class HeaderSmartComponent {
    constructor(authService) {
        this.authService = authService;
        this.toggleSideMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    logout() {
        this.authService.logout();
    }
}
HeaderSmartComponent.ɵfac = function HeaderSmartComponent_Factory(t) { return new (t || HeaderSmartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_shared_providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HeaderSmartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderSmartComponent, selectors: [["app-header-smart"]], outputs: { toggleSideMenu: "toggleSideMenu" }, decls: 1, vars: 0, consts: [[3, "logout", "toggleSideMenu"]], template: function HeaderSmartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logout", function HeaderSmartComponent_Template_app_header_logout_0_listener() { return ctx.logout(); })("toggleSideMenu", function HeaderSmartComponent_Template_app_header_toggleSideMenu_0_listener() { return ctx.toggleSideMenu.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderSmartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-smart',
                template: `
    <app-header (logout)="logout()" (toggleSideMenu)="toggleSideMenu.emit()" > </app-header>`
            }]
    }], function () { return [{ type: _auth_shared_providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, { toggleSideMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _projects_project_smart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../projects/project-smart.component */ "./src/app/shared/components/projects/project-smart.component.ts");









const _c0 = function () { return ["/calendar"]; };
class HeaderComponent {
    constructor() {
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleSideMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    doLogout() {
        this.logout.emit();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { logout: "logout", toggleSideMenu: "toggleSideMenu" }, decls: 44, vars: 4, consts: [["fxShow.gt-xs", "", "fxHide.xs", ""], [1, "spacer"], ["matTooltip", "navigate to home", "color", "primary", 1, "icon-pages"], ["routerLinkActive", "router-link-active", "matTooltip", "navigate to calendar", "color", "primary", 1, "icon-pages", 3, "routerLink"], ["matTooltip", "navigate to data visualization", "color", "primary", 1, "icon-pages"], ["matTooltip", "navigate to chat", "color", "primary", 1, "icon-pages"], ["matTooltip", "navigate to task manager", "color", "primary", 1, "icon-pages"], ["color", "warn"], ["color", "primary"], ["color", "accent"], ["fxShow.xs", "", "fxHide.gt-xs", ""], ["color", "primary", 3, "click"], ["fxFlexFill", "", "fxLayout", "row", "fxLayoutAlign", "start"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " show_chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-toolbar-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_mat_icon_click_30_listener() { return ctx.toggleSideMenu.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-toolbar-row", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-projects-smart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", "2rem");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _projects_project_smart_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsSmartComponent"]], styles: [".icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  margin: 0.5em;\n}\n\n.icon-pages[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 3em;\n}\n\napp-projects-smart[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGVBQUE7QUFKRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNJLGFBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUE7RUFDRSxXQUFBO0FBSEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cbi5pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5tYXQtaWNvbntcbiAgICBtYXJnaW46MC41ZW1cbn1cblxuLmljb24tcGFnZXMge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW46M2VtXG59XG5cbmFwcC1wcm9qZWN0cy1zbWFydHtcbiAgd2lkdGg6MTAwJVxufVxuXG5cblxuIFxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, { logout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], toggleSideMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/project-dialog/project-dialog-smart-component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/project-dialog/project-dialog-smart-component.ts ***!
  \************************************************************************************/
/*! exports provided: ProjectDialogSmartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDialogSmartComponent", function() { return ProjectDialogSmartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/user.service */ "./src/app/shared/providers/user.service.ts");
/* harmony import */ var _providers_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/project.service */ "./src/app/shared/providers/project.service.ts");
/* harmony import */ var _auth_shared_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/shared/providers/auth.service */ "./src/app/auth/shared/providers/auth.service.ts");
/* harmony import */ var _project_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-dialog.component */ "./src/app/shared/components/project-dialog/project-dialog.component.ts");








class ProjectDialogSmartComponent {
    constructor(userService, projectService, authService, dialogRef, data) {
        this.userService = userService;
        this.projectService = projectService;
        this.authService = authService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.participantsOptions = [];
        this.userOnline = this.authService.userOnline;
    }
    ngOnInit() {
        var _a;
        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.project) {
            this.project = this.data.project;
        }
        this.userService.getUsers().subscribe((users) => {
            this.participantsOptions = users;
        });
    }
    postProject(project) {
        this.projectService.postProject(project).subscribe(() => {
            this.hideModal();
        });
    }
    putProject(project) {
        this.projectService.putProject(project).subscribe(() => {
            this.hideModal();
        });
    }
    hideModal() {
        this.dialogRef.close();
    }
}
ProjectDialogSmartComponent.ɵfac = function ProjectDialogSmartComponent_Factory(t) { return new (t || ProjectDialogSmartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_shared_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ProjectDialogSmartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDialogSmartComponent, selectors: [["app-project-dialog-smart"]], decls: 1, vars: 3, consts: [[3, "participantsOptions", "userOnline", "project", "hide", "postProject", "putProject"]], template: function ProjectDialogSmartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-project-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ProjectDialogSmartComponent_Template_app_project_dialog_hide_0_listener() { return ctx.hideModal(); })("postProject", function ProjectDialogSmartComponent_Template_app_project_dialog_postProject_0_listener($event) { return ctx.postProject($event); })("putProject", function ProjectDialogSmartComponent_Template_app_project_dialog_putProject_0_listener($event) { return ctx.putProject($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("participantsOptions", ctx.participantsOptions)("userOnline", ctx.userOnline)("project", ctx.project);
    } }, directives: [_project_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ProjectDialogComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDialogSmartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-dialog-smart',
                template: `
       <app-project-dialog [participantsOptions]="participantsOptions" [userOnline]="userOnline" [project]="project" (hide)="hideModal()" (postProject)="postProject($event)" (putProject)="putProject($event)" > </app-project-dialog>
    `,
            }]
    }], function () { return [{ type: _providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserServices"] }, { type: _providers_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }, { type: _auth_shared_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/project-dialog/project-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/project-dialog/project-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProjectDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDialogComponent", function() { return ProjectDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/project.model */ "./src/app/shared/models/project.model.ts");
/* harmony import */ var _library_providers_objects_operations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../library/providers/objects-operations.service */ "./src/app/library/providers/objects-operations.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");















function ProjectDialogComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDialogComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r8._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r8.name);
} }
function ProjectDialogComponent_mat_list_item_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const participant_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", participant_r9.name, " ");
} }
function ProjectDialogComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r10._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r10.name);
} }
function ProjectDialogComponent_mat_list_item_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adm_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](adm_r11.name);
} }
function ProjectDialogComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDialogComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.createProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.projectForm.invalid);
} }
function ProjectDialogComponent_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDialogComponent_button_42_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.saveProjectChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.projectForm.invalid || ctx_r7.projectForm.pristine || ctx_r7.checkProjectState());
} }
class ProjectDialogComponent {
    constructor(fb) {
        this.fb = fb;
        /* OPCIONES A ELEGIR DE USUARIOS , OPCIONES SELECCIONADAS(O DEL PROYECTO EDITADO) */
        this.participantsOptions = [];
        this.admOptions = [];
        this.participantsSelected = [];
        this.admSelected = [];
        this.hide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.postProject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.putProject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            participants: this.fb.array([]),
            administrators: this.fb.array([])
        });
    }
    ngOnInit() {
        /* SI CREAMOS UN NUEVO PROYECTO INCLUIMOS A USER-ONLINE COMO ADM Y PARTICIPANTE, POR DEFECTO */
        this.participantsSelected.push(this.userOnline);
        this.admSelected.push(this.userOnline);
        const controlParticipants = this.projectForm.get('participants');
        controlParticipants.push(this.fb.control(this.userOnline._id));
        const controlAdm = this.projectForm.get('administrators');
        controlAdm.push(this.fb.control(this.userOnline._id));
    }
    ngOnChanges(changes) {
        if (changes.project) {
            if (this.project) {
                let participantsToInclude = this.participantsOptions.filter((user) => { return this.project.participants.includes(user._id) && user._id != this.userOnline._id; });
                this.participantsSelected.push(...participantsToInclude);
                const controlParticipants = this.projectForm.get('participants');
                participantsToInclude.forEach((user) => {
                    let control = this.fb.control(user._id);
                    controlParticipants.push(control);
                });
                let admToInclude = this.admOptions.filter((user) => { return this.project.administrators.includes(user._id) && user._id != this.userOnline._id; });
                this.admSelected.push(...admToInclude);
                const controlAdm = this.projectForm.get('administrators');
                admToInclude.forEach((user) => {
                    let control = this.fb.control(user._id);
                    controlAdm.push(control);
                });
                this.projectForm.patchValue({
                    name: this.project.name,
                    status: this.project.status
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])().subscribe(() => {
                    this.projectPristine = _library_providers_objects_operations_service__WEBPACK_IMPORTED_MODULE_4__["OOService"].copyObject(this.projectForm.value);
                });
            }
        }
    }
    participantsChange(participantIds) {
        this.participantsSelected = [this.userOnline, ...this.participantsOptions.filter((user) => { return participantIds.includes(user._id); })];
        const arrayControl = this.projectForm.get('participants');
        let controls = arrayControl.controls;
        controls = controls.filter((control) => { return participantIds.includes(control.value) || control.value === this.userOnline._id; });
        arrayControl.clear();
        controls.forEach((control) => {
            arrayControl.push(control);
        });
        this.admOptions = this.participantsOptions.filter((user) => { return participantIds.includes(user._id); });
        this.projectForm.markAsDirty();
        this.administratorsChange(this.admSelected.filter((user) => { return participantIds.includes(user._id); }).map((user) => { return user._id; }));
    }
    administratorsChange(administratorsIds) {
        this.admSelected = [this.userOnline, ...this.admOptions.filter((user) => { return administratorsIds.includes(user._id); })];
        const arrayControl = this.projectForm.get('administrators');
        let controls = arrayControl.controls;
        controls = controls.filter((control) => { return administratorsIds.includes(control.value) || control.value === this.userOnline._id; });
        arrayControl.clear();
        controls.forEach((control) => {
            arrayControl.push(control);
        });
        this.projectForm.markAsDirty();
    }
    createProject() {
        let project = new _models_project_model__WEBPACK_IMPORTED_MODULE_3__["Project"](this.projectForm.value.name, this.projectForm.value.participants, this.projectForm.value.administrators, this.projectForm.value.description);
        this.postProject.emit(project);
    }
    saveProjectChanges() {
        this.project = Object.assign(Object.assign({}, this.project), this.projectForm.value);
        this.putProject.emit(this.project);
    }
    checkProjectState() {
        return _library_providers_objects_operations_service__WEBPACK_IMPORTED_MODULE_4__["OOService"].areEquals(this.projectForm.value, this.projectPristine);
    }
    hideModal() {
        this.hide.emit();
    }
}
ProjectDialogComponent.ɵfac = function ProjectDialogComponent_Factory(t) { return new (t || ProjectDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ProjectDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDialogComponent, selectors: [["app-project-dialog"]], inputs: { participantsOptions: "participantsOptions", project: "project", userOnline: "userOnline" }, outputs: { hide: "hide", postProject: "postProject", putProject: "putProject" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 45, vars: 10, consts: [["mat-dialog-title", ""], ["fxFlex", "100%"], ["fxLayout", "column", 3, "formGroup"], ["fxFlex", "100%", "fxLayout.gt-xs", "row", "fxLayout.xs", "column", "fxLayoutGap.gt-xs", "20px", "fxLayoutAlign", "center"], ["matInput", "", "formControlName", "name", "id", "name", "name", "name", "type", "text", "placeholder", "Name", 1, "form-control"], ["nameControl", ""], ["class", "error-message", 4, "ngIf"], ["formControlName", "status"], ["value", "true"], ["value", "false"], ["fxFlex", "100%", "fxLayout.gt-xs", "row", "fxLayoutAlign", "space-around", "fxLayout.xs", "column"], ["fxFlex", "45%"], ["multiple", "", 1, "form-control", "mb-2", 3, "disabled", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["multiple", "", 3, "disabled", "selectionChange"], ["fxLayoutAlign", "center"], ["class", "mat-raised-button", 3, "disabled", "click", 4, "ngIf"], [1, "mat-raised-button", 3, "click"], [1, "error-message"], [3, "value"], ["role", "listitem"], [1, "mat-raised-button", 3, "disabled", "click"]], template: function ProjectDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectDialogComponent_p_9_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " unactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ProjectDialogComponent_Template_mat_select_selectionChange_24_listener($event) { return ctx.participantsChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProjectDialogComponent_mat_option_25_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProjectDialogComponent_mat_list_item_29_Template, 3, 1, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Administrators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ProjectDialogComponent_Template_mat_select_selectionChange_34_listener($event) { return ctx.administratorsChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProjectDialogComponent_mat_option_35_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Administrators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProjectDialogComponent_mat_list_item_39_Template, 3, 1, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-dialog-actions", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ProjectDialogComponent_button_41_Template, 3, 1, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProjectDialogComponent_button_42_Template, 3, 1, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDialogComponent_Template_button_click_43_listener() { return ctx.hideModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.projectForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.projectForm.controls.name.errors == null ? null : ctx.projectForm.controls.name.errors.minlength) && !(ctx.projectForm.controls.name.errors == null ? null : ctx.projectForm.controls.name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.participantsOptions.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.participantsOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.participantsSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.admOptions.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.admOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.admSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatList"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"]], styles: ["mat-form-field[_ngcontent-%COMP%]{\r\n    margin-top:20px!important;\r\n    width:100% !important\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvamVjdC1kaWFsb2cvcHJvamVjdC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7SUFDSSx5QkFBeUI7SUFDekI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2plY3QtZGlhbG9nL3Byb2plY3QtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHghaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-dialog',
                templateUrl: './project-dialog.component.html',
                styleUrls: ['./project-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { participantsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userOnline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], postProject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], putProject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/projects/project-smart.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/projects/project-smart.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProjectsSmartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsSmartComponent", function() { return ProjectsSmartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/project.service */ "./src/app/shared/providers/project.service.ts");
/* harmony import */ var _library_providers_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/providers/local-storage.service */ "./src/app/library/providers/local-storage.service.ts");
/* harmony import */ var _providers_dialogs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/dialogs.service */ "./src/app/shared/providers/dialogs.service.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/shared/components/projects/projects.component.ts");






class ProjectsSmartComponent {
    constructor(projectService, localStorageService, dialogsService) {
        this.projectService = projectService;
        this.localStorageService = localStorageService;
        this.dialogsService = dialogsService;
        this.projects = [];
    }
    ngOnInit() {
        this.projectService.getProjects().subscribe((projects) => {
            this.projects = projects;
            this.projectSelected = this.localStorageService.get('state-data', 'project');
        });
        this.projectSubs = this.projectService.project$.subscribe((data) => {
            switch (data.order) {
                case 'put':
                    this.projects = this.projects.map((project) => { return data.project._id === project._id ? data.project : project; });
                    break;
                case 'post':
                    this.projects = [...this.projects, data.project];
                    break;
                case 'delete':
                    this.projects = this.projects.filter((project) => { return project._id != data.project; });
                    break;
            }
        });
    }
    selectProject(projectId) {
        console.log('all');
        this.projectService.selectProject(projectId ? projectId : '');
    }
    putProject(project) {
        this.dialogsService.openEditProjectDialog(project._id);
    }
    postProject() {
        this.dialogsService.openPostProjectDialog();
    }
    deleteProject(projectId) {
        this.projectService.deleteProject(projectId).subscribe();
    }
    ngOnDestroy() {
        this.projectSubs.unsubscribe();
    }
}
ProjectsSmartComponent.ɵfac = function ProjectsSmartComponent_Factory(t) { return new (t || ProjectsSmartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_library_providers_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_dialogs_service__WEBPACK_IMPORTED_MODULE_3__["DialogsService"])); };
ProjectsSmartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsSmartComponent, selectors: [["app-projects-smart"]], decls: 1, vars: 2, consts: [[3, "projects", "projectSelectedIn", "projectSelectedOut", "deleteProject", "putProject", "postProject"]], template: function ProjectsSmartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-projects", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("projectSelectedOut", function ProjectsSmartComponent_Template_app_projects_projectSelectedOut_0_listener($event) { return ctx.selectProject($event); })("deleteProject", function ProjectsSmartComponent_Template_app_projects_deleteProject_0_listener($event) { return ctx.deleteProject($event); })("putProject", function ProjectsSmartComponent_Template_app_projects_putProject_0_listener($event) { return ctx.putProject($event); })("postProject", function ProjectsSmartComponent_Template_app_projects_postProject_0_listener() { return ctx.postProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projects", ctx.projects)("projectSelectedIn", ctx.projectSelected);
    } }, directives: [_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsSmartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-smart',
                template: `
       <app-projects  [projects]="projects" (projectSelectedOut)="selectProject($event)" [projectSelectedIn]="projectSelected" (deleteProject)="deleteProject($event)" (putProject)="putProject($event)" (postProject)="postProject()" ></app-projects>
    `,
            }]
    }], function () { return [{ type: _providers_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }, { type: _library_providers_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }, { type: _providers_dialogs_service__WEBPACK_IMPORTED_MODULE_3__["DialogsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/projects/projects.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/projects/projects.component.ts ***!
  \******************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");















function ProjectsComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r18._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r18.name, " ");
} }
function ProjectsComponent_mat_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.name, " ");
} }
function ProjectsComponent_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Administrators");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.administrators.length, " ");
} }
function ProjectsComponent_mat_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Participants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.participants.length, " ");
} }
function ProjectsComponent_mat_header_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Number of messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.messages.length, " ");
} }
function ProjectsComponent_mat_header_cell_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Number of tasks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.tasks.length, " ");
} }
function ProjectsComponent_mat_header_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.status === true ? "active" : "unactive", " ");
} }
function ProjectsComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-cell", 30);
} }
function ProjectsComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_mat_cell_34_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const element_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.putProject.emit(element_r25._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_mat_cell_34_Template_a_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const element_r25 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); $event.stopPropagation(); return ctx_r28.deleteProject.emit(element_r25._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_header_row_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function ProjectsComponent_mat_row_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function () { return [3, 6, 12]; };
class ProjectsComponent {
    constructor() {
        this.projects = [];
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleSideMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectSelectedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectSelectedIn = '';
        this.putProject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.postProject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayedColumns = ['name', 'administrators', 'participants', 'messagesNum', 'tasksNum', 'status', 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.deleteProject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes.projects) {
            this.dataSource.data = this.projects;
            this.dataSource.paginator = this.paginator;
        }
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], viewQuery: function ProjectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { projects: "projects", projectSelectedIn: "projectSelectedIn" }, outputs: { logout: "logout", toggleSideMenu: "toggleSideMenu", projectSelectedOut: "projectSelectedOut", putProject: "putProject", postProject: "postProject", deleteProject: "deleteProject" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 38, vars: 11, consts: [[3, "collapsedHeight", "expandedHeight"], ["fxFlex", "55", "fxLayoutAlign", "flex-end", 3, "click"], ["fxLayout", "center"], ["value", "", 3, "ngModel", "ngModelChange", "selectionChange"], ["select", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], [3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "fxShow", "", "fxHide.lt-xs", "", 4, "matHeaderCellDef"], ["mat-cell", "", "fxShow", "", "fxHide.lt-xs", "", 4, "matCellDef"], ["matColumnDef", "administrators"], ["mat-header-cell", "", "fxShow", "", "fxHide.lt-sm", "", 4, "matHeaderCellDef"], ["mat-cell", "", "fxShow", "", "fxHide.lt-sm", "", 4, "matCellDef"], ["matColumnDef", "participants"], ["matColumnDef", "messagesNum"], ["matColumnDef", "tasksNum"], ["matColumnDef", "status"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], [3, "value"], ["mat-header-cell", "", "fxShow", "", "fxHide.lt-xs", ""], ["mat-cell", "", "fxShow", "", "fxHide.lt-xs", ""], ["mat-header-cell", "", "fxShow", "", "fxHide.lt-sm", ""], ["mat-cell", "", "fxShow", "", "fxHide.lt-sm", ""], ["mat-header-cell", ""], ["mat-cell", ""], [1, "icon_options"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_form_field_click_2_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_select_ngModelChange_5_listener($event) { return ctx.projectSelectedIn = $event; })("selectionChange", function ProjectsComponent_Template_mat_select_selectionChange_5_listener($event) { return ctx.projectSelectedOut.emit($event.value || ""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsComponent_mat_option_9_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_10_listener($event) { $event.stopPropagation(); return ctx.postProject.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectsComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectsComponent_mat_cell_16_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectsComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProjectsComponent_mat_cell_19_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectsComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectsComponent_mat_cell_22_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProjectsComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProjectsComponent_mat_cell_25_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProjectsComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProjectsComponent_mat_cell_28_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProjectsComponent_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProjectsComponent_mat_cell_31_Template, 2, 1, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProjectsComponent_mat_header_cell_33_Template, 1, 0, "mat-header-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProjectsComponent_mat_cell_34_Template, 7, 0, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProjectsComponent_mat_header_row_35_Template, 1, 0, "mat-header-row", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProjectsComponent_mat_row_36_Template, 1, 0, "mat-row", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-paginator", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsedHeight", "90px")("expandedHeight", "90px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.projectSelectedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.dataSource.data.length)("pageSize", 3)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultShowHideDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["mat-expansion-panel[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\nmat-expansion-panel[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtBQURGO0FBR0U7RUFDRSxzQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG5cclxuICBtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudFxyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, { projects: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], logout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], toggleSideMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], projectSelectedOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], projectSelectedIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], putProject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], postProject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }]
        }], deleteProject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/models/project.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/project.model.ts ***!
  \************************************************/
/*! exports provided: Project, ProjectOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectOrder", function() { return ProjectOrder; });
class Project {
    constructor(name, participants, administrators, messages, tasks, status, _id) {
        this.name = name;
        this.participants = participants;
        this.administrators = administrators;
        this.messages = messages;
        this.tasks = tasks;
        this.status = status;
        this._id = _id;
    }
}
class ProjectOrder {
    constructor(project, order) {
        this.project = project;
        this.order = order;
    }
}


/***/ }),

/***/ "./src/app/shared/providers/dialogs.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/providers/dialogs.service.ts ***!
  \*****************************************************/
/*! exports provided: DialogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsService", function() { return DialogsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _components_event_dialog_event_dialog_smart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/event-dialog/event-dialog-smart.component */ "./src/app/shared/components/event-dialog/event-dialog-smart.component.ts");
/* harmony import */ var _components_project_dialog_project_dialog_smart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/project-dialog/project-dialog-smart-component */ "./src/app/shared/components/project-dialog/project-dialog-smart-component.ts");






class DialogsService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openEventDialog(eventId) {
        const dialog = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialog.disableClose = true;
        dialog.autoFocus = true;
        dialog.data = { eventId: eventId };
        let dialogRef = this.dialog.open(_components_event_dialog_event_dialog_smart_component__WEBPACK_IMPORTED_MODULE_2__["EventDialogSmartComponent"], dialog);
        return dialogRef.afterClosed();
    }
    openEventsInfoDialog(date) {
        const dialog = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialog.disableClose = true;
        dialog.autoFocus = true;
        dialog.data = { date };
        let dialogRef = this.dialog.open(_components_event_dialog_event_dialog_smart_component__WEBPACK_IMPORTED_MODULE_2__["EventDialogSmartComponent"], dialog);
        return dialogRef.afterClosed();
    }
    openEditProjectDialog(project) {
        const projectDialog = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        projectDialog.disableClose = true;
        projectDialog.autoFocus = true;
        projectDialog.data = { project };
        this.dialog.open(_components_project_dialog_project_dialog_smart_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDialogSmartComponent"], projectDialog);
    }
    openPostProjectDialog() {
        const projectDialog = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        projectDialog.disableClose = true;
        projectDialog.autoFocus = true;
        this.dialog.open(_components_project_dialog_project_dialog_smart_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDialogSmartComponent"], projectDialog);
    }
}
DialogsService.ɵfac = function DialogsService_Factory(t) { return new (t || DialogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
DialogsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogsService, factory: DialogsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/providers/events.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/providers/events.service.ts ***!
  \****************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-handler.service */ "./src/app/shared/providers/error-handler.service.ts");
/* harmony import */ var _library_components_global_dialogs_global_dialogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../library/components/global-dialogs/global-dialogs.service */ "./src/app/library/components/global-dialogs/global-dialogs.service.ts");








class EventsService {
    constructor(http, errorHandlerService, gdService) {
        this.http = http;
        this.errorHandlerService = errorHandlerService;
        this.gdService = gdService;
        this.eventSrc = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.event$ = this.eventSrc.asObservable();
    }
    postEvent(event) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICES"]}event`;
        return this.http.post(url, event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => { return res.event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => { this.gdService.openInfoDialog('SUCESFULLY CREATED', 'CREATION', event.name); this.eventSrc.next({ event, order: 'post' }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => { console.log({ err }); this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err); }));
    }
    putEvent(event) {
        const url = `${_config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICES"]}event`;
        return this.http.put(url, event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => { return res.event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => { this.gdService.openInfoDialog('SUCESFULLY UPDATED', 'EDITION', event.name); this.eventSrc.next({ event, order: 'put' }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err); }));
    }
    getEventsByTimeRange(selector, range, projectId = '', recursiveFilter) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICES"]}events-by-time-range/${selector}?from=${range[0]}&to=${range[1]}&projectId=${projectId}&recursiveFilter=${recursiveFilter}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => { return res.events; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err); }));
    }
    deleteEvent(eventId) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICES"]}event/${eventId}`;
        let backRequest = this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => { return res.event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => { this.gdService.openInfoDialog('SUCESFULLY DELETED', 'DELETION', event.name); this.eventSrc.next({ event, order: 'delete' }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err); }));
        return this.gdService.openConfirmDialog()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((res) => {
            return res ? backRequest : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        }));
    }
    getEventById(id) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICES"]}event-by-id/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => { return res.event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err); }));
    }
}
EventsService.ɵfac = function EventsService_Factory(t) { return new (t || EventsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_library_components_global_dialogs_global_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["GDService"])); };
EventsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventsService, factory: EventsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"] }, { type: _library_components_global_dialogs_global_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["GDService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/providers/project.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/providers/project.service.ts ***!
  \*****************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-handler.service */ "./src/app/shared/providers/error-handler.service.ts");
/* harmony import */ var _library_components_global_dialogs_global_dialogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../library/components/global-dialogs/global-dialogs.service */ "./src/app/library/components/global-dialogs/global-dialogs.service.ts");
/* harmony import */ var _library_providers_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../library/providers/local-storage.service */ "./src/app/library/providers/local-storage.service.ts");









class ProjectService {
    constructor(http, errorHandlerService, gdService, localStorageService) {
        this.http = http;
        this.errorHandlerService = errorHandlerService;
        this.gdService = gdService;
        this.localStorageService = localStorageService;
        /* Store all the projects */
        this.projects = [];
        this.projectsSrc = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.projects$ = this.projectsSrc.asObservable();
        /* To spread single project changes */
        this.projectSrc = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.project$ = this.projectSrc.asObservable();
        /* To spread projects selected */
        this.selectedProjectSrc = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.selectedProject$ = this.selectedProjectSrc.asObservable();
    }
    getProjects() {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}projects`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => { this.projectsSrc.next(res.projects); this.projects = res.projects; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res.projects;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe(); ; return this.errorHandlerService.handleError(err); }));
    }
    selectProject(projectId) {
        if (!projectId) {
            this.selectedProjectSrc.next('');
            this.localStorageService.remove('state-data', 'project');
            return '';
        }
        else {
            let selectedProject = this.projects.filter((eachProject) => { return eachProject._id === projectId; })[0];
            this.selectedProjectSrc.next(selectedProject);
            this.localStorageService.set('state-data', selectedProject._id, 'project');
            this.selectedProject = selectedProject;
            return this.selectedProject;
        }
    }
    postProject(project) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}project`;
        return this.http.post(url, project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => { this.projectSrc.next({ project: res.project, order: 'post' }); this.gdService.openInfoDialog('SUCCESFULLY CREATED', null, res.project.name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res.project;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe(); ; return this.errorHandlerService.handleError(err); }));
    }
    putProject(project) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}project`;
        return this.http.put(url, project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => { this.projectSrc.next({ project: res.project, order: 'put' }); this.gdService.openInfoDialog('SUCCESFULLY UPDATED', null, res.project.name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => { return res.project; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe(); ; return this.errorHandlerService.handleError(err); }));
    }
    changeProjectStatus(id) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}project/changeStatus/${id}`;
        return this.http.put(url, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => { this.projectSrc.next({ project: res.project, order: 'put' }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe(); ; return this.errorHandlerService.handleError(err); }));
    }
    deleteProject(id) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}project/${id}`;
        let backRequest = this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => { this.projectSrc.next({ project: id, order: 'delete' }); this.gdService.openInfoDialog('succesfully deleted', 'DELETION', res.project.name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => { console.log(err); this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe(); ; return this.errorHandlerService.handleError(err); }));
        return this.gdService.openConfirmDialog()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((res) => {
            return res ? backRequest : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
        }));
    }
    getParticipants(projectId) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}getParticipants/${projectId}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res.participants;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe(); ; return this.errorHandlerService.handleError(err); }));
    }
    getProjectFiles(projectId) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}project-files/${projectId}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => { return res.files; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe(); ; return this.errorHandlerService.handleError(err); }));
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_library_components_global_dialogs_global_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["GDService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_library_providers_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"] }, { type: _library_components_global_dialogs_global_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["GDService"] }, { type: _library_providers_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/shared/pipes/pipes.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _components_header_header_smart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header-smart.component */ "./src/app/shared/components/header/header-smart.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_project_dialog_project_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project-dialog/project-dialog.component */ "./src/app/shared/components/project-dialog/project-dialog.component.ts");
/* harmony import */ var _components_project_dialog_project_dialog_smart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/project-dialog/project-dialog-smart-component */ "./src/app/shared/components/project-dialog/project-dialog-smart-component.ts");
/* harmony import */ var _components_event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/event-dialog/event-dialog.component */ "./src/app/shared/components/event-dialog/event-dialog.component.ts");
/* harmony import */ var _components_event_dialog_event_dialog_smart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/event-dialog/event-dialog-smart.component */ "./src/app/shared/components/event-dialog/event-dialog-smart.component.ts");
/* harmony import */ var _components_events_dialog_events_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/events-dialog/events-dialog.component */ "./src/app/shared/components/events-dialog/events-dialog.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/shared/components/projects/projects.component.ts");
/* harmony import */ var _components_projects_project_smart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/projects/project-smart.component */ "./src/app/shared/components/projects/project-smart.component.ts");

















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_smart_component__WEBPACK_IMPORTED_MODULE_7__["HeaderSmartComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _components_project_dialog_project_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ProjectDialogComponent"],
        _components_project_dialog_project_dialog_smart_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDialogSmartComponent"],
        _components_event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_11__["EventDialogComponent"],
        _components_event_dialog_event_dialog_smart_component__WEBPACK_IMPORTED_MODULE_12__["EventDialogSmartComponent"],
        _components_events_dialog_events_dialog_component__WEBPACK_IMPORTED_MODULE_13__["EventsDialogComponent"],
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
        _components_projects_project_smart_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsSmartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]], exports: [_components_header_header_smart_component__WEBPACK_IMPORTED_MODULE_7__["HeaderSmartComponent"],
        _components_projects_project_smart_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsSmartComponent"],
        _components_project_dialog_project_dialog_smart_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDialogSmartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_header_header_smart_component__WEBPACK_IMPORTED_MODULE_7__["HeaderSmartComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _components_project_dialog_project_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ProjectDialogComponent"],
                    _components_project_dialog_project_dialog_smart_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDialogSmartComponent"],
                    _components_event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_11__["EventDialogComponent"],
                    _components_event_dialog_event_dialog_smart_component__WEBPACK_IMPORTED_MODULE_12__["EventDialogSmartComponent"],
                    _components_events_dialog_events_dialog_component__WEBPACK_IMPORTED_MODULE_13__["EventsDialogComponent"],
                    _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
                    _components_projects_project_smart_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsSmartComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ],
                exports: [
                    _components_header_header_smart_component__WEBPACK_IMPORTED_MODULE_7__["HeaderSmartComponent"],
                    _components_projects_project_smart_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsSmartComponent"],
                    _components_project_dialog_project_dialog_smart_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDialogSmartComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map