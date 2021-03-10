import { NgModule, ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
class LpRoutesBreadcrumbsModule {
}
LpRoutesBreadcrumbsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LpRoutesBreadcrumbsModule });
LpRoutesBreadcrumbsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LpRoutesBreadcrumbsModule_Factory(t) { return new (t || LpRoutesBreadcrumbsModule)(); }, providers: [LpRoutesBreadcrumbsModule], imports: [[]] });
LpRoutesBreadcrumbsModule.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: LpRoutesBreadcrumbsModule, factory: LpRoutesBreadcrumbsModule.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpRoutesBreadcrumbsModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [],
                exports: [],
                providers: [LpRoutesBreadcrumbsModule]
            }]
    }], null, null); })();

class LpRoutesBreadcrumbsService {
    constructor(router) {
        this.router = router;
        this.navigationStart = { currentUrl: '', previousUrl: '' };
        this.navigationEnd = { currentUrl: '', previousUrl: '' };
        this.listenningNavigationStart();
        this.listenningNavigationEnd();
    }
    listenningNavigationStart() {
        this.router.events
            .pipe(filter((event) => { return event instanceof NavigationStart; }))
            .subscribe((event) => {
            this.navigationStart.previousUrl = this.navigationStart.currentUrl;
            this.navigationStart.currentUrl = event.url;
        });
    }
    listenningNavigationEnd() {
        this.router.events
            .pipe(filter((event) => { return event instanceof NavigationEnd; }))
            .subscribe((event) => {
            this.navigationEnd.previousUrl = this.navigationEnd.currentUrl;
            this.navigationEnd.currentUrl = event.url;
        });
    }
    getNavStart() {
        return this.navigationStart;
    }
    getNavEnd() {
        return this.navigationEnd;
    }
}
LpRoutesBreadcrumbsService.ɵfac = function LpRoutesBreadcrumbsService_Factory(t) { return new (t || LpRoutesBreadcrumbsService)(ɵngcc0.ɵɵinject(ɵngcc1.Router)); };
LpRoutesBreadcrumbsService.ɵprov = ɵɵdefineInjectable({ factory: function LpRoutesBreadcrumbsService_Factory() { return new LpRoutesBreadcrumbsService(ɵɵinject(Router)); }, token: LpRoutesBreadcrumbsService, providedIn: LpRoutesBreadcrumbsModule });
LpRoutesBreadcrumbsService.ctorParameters = () => [
    { type: Router }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpRoutesBreadcrumbsService, [{
        type: Injectable,
        args: [{
                providedIn: LpRoutesBreadcrumbsModule
            }]
    }], function () { return [{ type: ɵngcc1.Router }]; }, null); })();

/*
 * Public API Surface of lp-routes-breadcrumbs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpRoutesBreadcrumbsModule, LpRoutesBreadcrumbsService };

//# sourceMappingURL=lp-routes-breadcrumbs.js.map