(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_shared_guards_check_token_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/shared/guards/check-token.guard */ "./src/app/auth/shared/guards/check-token.guard.ts");






const appRoutes = [
    { path: 'auth', loadChildren: () => Promise.all(/*! import() | auth-auth-module */[__webpack_require__.e("default~auth-auth-module~pages-pages-module"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(m => m.AuthModule) },
    { path: '', loadChildren: () => Promise.all(/*! import() | pages-pages-module */[__webpack_require__.e("default~auth-auth-module~pages-pages-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/pages/pages.module.ts")).then(m => m.PagesModule), canLoad: [_auth_shared_guards_check_token_guard__WEBPACK_IMPORTED_MODULE_3__["CheckTokenGuard"]] },
    { path: 'not-page-found', loadChildren: () => __webpack_require__.e(/*! import() | not-page-found-not-page-found-module */ "not-page-found-not-page-found-module").then(__webpack_require__.bind(null, /*! ./not-page-found/not-page-found.module */ "./src/app/not-page-found/not-page-found.module.ts")).then(m => m.NotPageFoundModule) },
    /*   { path: 'pages-modals', outlet: 'modals', loadChildren: () => import('./modals/modals.module').then(m => m.ModalsModule) }, */
    { path: "**", redirectTo: '/not-page-found', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor(router, ar) {
        this.router = router;
        this.ar = ar;
        this.title = 'cargomusicapp-front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/shared/interceptors/token.interceptor */ "./src/app/auth/shared/interceptors/token.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _library_components_global_dialogs_global_dialogs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./library/components/global-dialogs/global-dialogs.module */ "./src/app/library/components/global-dialogs/global-dialogs.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptor"], multi: true }], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _library_components_global_dialogs_global_dialogs_module__WEBPACK_IMPORTED_MODULE_7__["GlobalDialogsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _library_components_global_dialogs_global_dialogs_module__WEBPACK_IMPORTED_MODULE_7__["GlobalDialogsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _library_components_global_dialogs_global_dialogs_module__WEBPACK_IMPORTED_MODULE_7__["GlobalDialogsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptor"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/shared/guards/check-token.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/shared/guards/check-token.guard.ts ***!
  \*********************************************************/
/*! exports provided: CheckTokenGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckTokenGuard", function() { return CheckTokenGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/auth/shared/providers/auth.service.ts");



class CheckTokenGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(next, state) {
        return this.authService.checkToken();
    }
    canActivateChild(next, state) {
        return this.authService.checkToken();
    }
    canLoad(route, segments) {
        return this.authService.checkToken();
    }
}
CheckTokenGuard.ɵfac = function CheckTokenGuard_Factory(t) { return new (t || CheckTokenGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
CheckTokenGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CheckTokenGuard, factory: CheckTokenGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckTokenGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/shared/interceptors/token.interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/auth/shared/interceptors/token.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/auth/shared/providers/auth.service.ts");



class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        if (this.authService.userOnline) {
            const token = this.authService.userOnline['token'];
            const authReq = req.clone({
                setHeaders: { token: `${token}` }
            });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/shared/providers/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/shared/providers/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_providers_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/providers/error-handler.service */ "./src/app/shared/providers/error-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _library_providers_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../library/providers/local-storage.service */ "./src/app/library/providers/local-storage.service.ts");









class AuthService {
    constructor(http, errorHandlerService, router, localStorageService) {
        this.http = http;
        this.errorHandlerService = errorHandlerService;
        this.router = router;
        this.localStorageService = localStorageService;
        this.uploadFromStorage();
    }
    /////// LOGIN //////
    login(credentials, rememberMe = false) {
        rememberMe ? this.localStorageService.set('rememberMe', credentials.email) : this.localStorageService.remove('rememberMe');
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}login`;
        return this.http.post(url, credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => { this.saveInStorage(res.user, res.token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => { console.log({ err }); return this.errorHandlerService.handleError(err); }));
    }
    /////// STORAGE ACCESS AND WRITE //////
    saveInStorage(user, token) {
        return new Promise((resolve, reject) => {
            token ? user.token = token : null;
            this.localStorageService.set('user', JSON.stringify(user));
            this.userOnline = user;
            resolve();
        });
    }
    uploadFromStorage() {
        this.userOnline = this.localStorageService.get('user');
    }
    cleanStorage() {
        localStorage.removeItem("user");
        this.userOnline = null;
    }
    //////// LOGIN WITH TOKEN (A TRAVÉS DE GUARD) ///////////
    checkToken() {
        //// REVISAMOS SI HAY TOKEN EN EL STORAGE  ////
        let token = this.localStorageService.get('user', 'token') || undefined;
        if (token) {
            let userId = this.localStorageService.get('user', '_id') || undefined;
            if (userId) {
                return this.http.put(`${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}check-token`, { userId }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                    ///// SI ESTAMOS EN MODO DEMO ////
                    if (res.user) {
                        this.saveInStorage(res.user, res.token);
                        return true;
                    }
                    else {
                        /////// NO ESTAMOS EN MODO DEMO, RECIBIMOS OTRO TOKEN Y EL USUARIO Y LOS REESCRIBIMOS //////
                        if (res.token) {
                            this.saveInStorage(this.userOnline, res.token);
                            return true;
                        }
                        else {
                            this.router.navigate(['auth']).then(() => { });
                            return false;
                        }
                    }
                }));
            }
            else {
                return this.handleNoToken();
            }
        }
        else {
            return this.handleNoToken();
        }
    }
    /* MANEJA LA RESPUESTA NEGATIVA DE CHECKTOKEN */
    handleNoToken() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
            this.router.navigate(['auth']);
        }));
    }
    ////// PASSWORD RECOVERING /////
    changePassword(password1, password2) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}changePassword/${password1}/${password2}`;
        return this.http.put(url, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandlerService.handleError));
    }
    forgotPassword(email) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}forgotPassword/${email}`;
        return this.http.put(url, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandlerService.handleError));
    }
    checkResetCode(userMail, resetCode) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}checkResetCode/${userMail}/${resetCode}`;
        return this.http.put(url, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandlerService.handleError));
    }
    setNewPassword(resetCode, password, email) {
        let url = `${_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICES"]}setNewPassword/${email}/${resetCode}/${password}`;
        return this.http.put(url, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            console.log({ res });
            if (res.message) {
                return res.message;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandlerService.handleError));
    }
    /* LOGOUT */
    logout() {
        this.router.navigate(["auth"]).then(() => {
            this.cleanStorage();
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_providers_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_library_providers_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _shared_providers_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _library_providers_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: URL_SERVICES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SERVICES", function() { return URL_SERVICES; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

const URL_SERVICES = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl;


/***/ }),

/***/ "./src/app/library/components/global-dialogs/confirm-dialogs/confirm-dialogs.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/library/components/global-dialogs/confirm-dialogs/confirm-dialogs.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ConfirmDialogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogsComponent", function() { return ConfirmDialogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");




class ConfirmDialogsComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.message = this.data.message;
        this.title = this.data.title;
    }
    hideModal(accepted) {
        this.dialogRef.close(accepted);
    }
}
ConfirmDialogsComponent.ɵfac = function ConfirmDialogsComponent_Factory(t) { return new (t || ConfirmDialogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmDialogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogsComponent, selectors: [["app-confirm-dialogs"]], decls: 10, vars: 2, consts: [["mat-dialog-title", ""], [1, "mat-raised-button", 3, "click"]], template: function ConfirmDialogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogsComponent_Template_button_click_6_listener() { return ctx.hideModal(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogsComponent_Template_button_click_8_listener() { return ctx.hideModal(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvY29tcG9uZW50cy9nbG9iYWwtZGlhbG9ncy9jb25maXJtLWRpYWxvZ3MvY29uZmlybS1kaWFsb2dzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-dialogs',
                templateUrl: './confirm-dialogs.component.html',
                styleUrls: ['./confirm-dialogs.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/library/components/global-dialogs/global-dialogs.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/library/components/global-dialogs/global-dialogs.module.ts ***!
  \****************************************************************************/
/*! exports provided: GlobalDialogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalDialogsModule", function() { return GlobalDialogsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _confirm_dialogs_confirm_dialogs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-dialogs/confirm-dialogs.component */ "./src/app/library/components/global-dialogs/confirm-dialogs/confirm-dialogs.component.ts");
/* harmony import */ var _inform_dialogs_inform_dialogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inform-dialogs/inform-dialogs.component */ "./src/app/library/components/global-dialogs/inform-dialogs/inform-dialogs.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");






class GlobalDialogsModule {
}
GlobalDialogsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlobalDialogsModule });
GlobalDialogsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlobalDialogsModule_Factory(t) { return new (t || GlobalDialogsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlobalDialogsModule, { declarations: [_confirm_dialogs_confirm_dialogs_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogsComponent"], _inform_dialogs_inform_dialogs_component__WEBPACK_IMPORTED_MODULE_3__["InformDialogsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]], exports: [_confirm_dialogs_confirm_dialogs_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogsComponent"], _inform_dialogs_inform_dialogs_component__WEBPACK_IMPORTED_MODULE_3__["InformDialogsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalDialogsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_confirm_dialogs_confirm_dialogs_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogsComponent"], _inform_dialogs_inform_dialogs_component__WEBPACK_IMPORTED_MODULE_3__["InformDialogsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ],
                exports: [_confirm_dialogs_confirm_dialogs_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogsComponent"], _inform_dialogs_inform_dialogs_component__WEBPACK_IMPORTED_MODULE_3__["InformDialogsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/library/components/global-dialogs/inform-dialogs/inform-dialogs.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/library/components/global-dialogs/inform-dialogs/inform-dialogs.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: InformDialogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformDialogsComponent", function() { return InformDialogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");




class InformDialogsComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.message = this.data.message;
        this.title = this.data.title;
        this.item = this.data.item;
    }
    hideModal() {
        this.dialogRef.close();
    }
    /// MUST CREATE A BACKEND TO REPORT ERRORS ///
    reportError() { }
}
InformDialogsComponent.ɵfac = function InformDialogsComponent_Factory(t) { return new (t || InformDialogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
InformDialogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformDialogsComponent, selectors: [["app-inform-dialogs"]], decls: 12, vars: 3, consts: [["mat-dialog-title", ""], [1, "mat-raised-button", 3, "click"]], template: function InformDialogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InformDialogsComponent_Template_button_click_8_listener() { return ctx.hideModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InformDialogsComponent_Template_button_click_10_listener() { return ctx.reportError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvY29tcG9uZW50cy9nbG9iYWwtZGlhbG9ncy9pbmZvcm0tZGlhbG9ncy9pbmZvcm0tZGlhbG9ncy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformDialogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inform-dialogs',
                templateUrl: './inform-dialogs.component.html',
                styleUrls: ['./inform-dialogs.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/library/providers/local-storage.service.ts":
/*!************************************************************!*\
  !*** ./src/app/library/providers/local-storage.service.ts ***!
  \************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LocalStorageService {
    constructor() { }
    set(object, value, key) {
        if (key) {
            let obj = JSON.parse(localStorage.getItem(object)) || {};
            obj[key] = value.toString();
            localStorage.setItem(object, JSON.stringify(obj));
        }
        else {
            localStorage.setItem(object, value);
        }
    }
    get(object, key) {
        if (key) {
            return localStorage.getItem(object) != null ? JSON.parse(localStorage.getItem(object))[key] != null ? JSON.parse(localStorage.getItem(object))[key] : '' : '';
        }
        else {
            return JSON.parse(localStorage.getItem(object));
        }
    }
    remove(object, key) {
        if (key) {
            let obj = JSON.parse(localStorage.getItem(object));
            obj[key] != null ? delete obj[key] : null;
            localStorage.setItem(object, JSON.stringify(obj));
        }
        else {
            localStorage.removeItem(object);
        }
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/providers/error-handler.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/providers/error-handler.service.ts ***!
  \***********************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ErrorHandlerService {
    constructor() { }
    handleError(error) {
        let errorMessage = '';
        if (error.error.message) {
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.err.message}`;
        }
        console.log('right here');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(); };
ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: "http://localhost:3000/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\34695\Desktop\DRAFT\team-manager-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map