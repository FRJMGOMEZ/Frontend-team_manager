(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('lp-routes-breadcrumbs', ['exports', '@angular/core', '@angular/router', 'rxjs/operators'], factory) :
    (global = global || self, factory(global['lp-routes-breadcrumbs'] = {}, global.ng.core, global.ng.router, global.rxjs.operators));
}(this, (function (exports, i0, i1, operators) { 'use strict';

    var LpRoutesBreadcrumbsModule = /** @class */ (function () {
        function LpRoutesBreadcrumbsModule() {
        }
        return LpRoutesBreadcrumbsModule;
    }());
    LpRoutesBreadcrumbsModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                    providers: [LpRoutesBreadcrumbsModule]
                },] }
    ];

    var LpRoutesBreadcrumbsService = /** @class */ (function () {
        function LpRoutesBreadcrumbsService(router) {
            this.router = router;
            this.navigationStart = { currentUrl: '', previousUrl: '' };
            this.navigationEnd = { currentUrl: '', previousUrl: '' };
            this.listenningNavigationStart();
            this.listenningNavigationEnd();
        }
        LpRoutesBreadcrumbsService.prototype.listenningNavigationStart = function () {
            var _this = this;
            this.router.events
                .pipe(operators.filter(function (event) { return event instanceof i1.NavigationStart; }))
                .subscribe(function (event) {
                _this.navigationStart.previousUrl = _this.navigationStart.currentUrl;
                _this.navigationStart.currentUrl = event.url;
            });
        };
        LpRoutesBreadcrumbsService.prototype.listenningNavigationEnd = function () {
            var _this = this;
            this.router.events
                .pipe(operators.filter(function (event) { return event instanceof i1.NavigationEnd; }))
                .subscribe(function (event) {
                _this.navigationEnd.previousUrl = _this.navigationEnd.currentUrl;
                _this.navigationEnd.currentUrl = event.url;
            });
        };
        LpRoutesBreadcrumbsService.prototype.getNavStart = function () {
            return this.navigationStart;
        };
        LpRoutesBreadcrumbsService.prototype.getNavEnd = function () {
            return this.navigationEnd;
        };
        return LpRoutesBreadcrumbsService;
    }());
    LpRoutesBreadcrumbsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LpRoutesBreadcrumbsService_Factory() { return new LpRoutesBreadcrumbsService(i0.ɵɵinject(i1.Router)); }, token: LpRoutesBreadcrumbsService, providedIn: LpRoutesBreadcrumbsModule });
    LpRoutesBreadcrumbsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: LpRoutesBreadcrumbsModule
                },] }
    ];
    LpRoutesBreadcrumbsService.ctorParameters = function () { return [
        { type: i1.Router }
    ]; };

    /*
     * Public API Surface of lp-routes-breadcrumbs
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LpRoutesBreadcrumbsModule = LpRoutesBreadcrumbsModule;
    exports.LpRoutesBreadcrumbsService = LpRoutesBreadcrumbsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lp-routes-breadcrumbs.umd.js.map
