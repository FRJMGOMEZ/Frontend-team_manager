import { NgModule, ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

class LpRoutesBreadcrumbsModule {
}
LpRoutesBreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: [],
                providers: [LpRoutesBreadcrumbsModule]
            },] }
];

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
LpRoutesBreadcrumbsService.ɵprov = ɵɵdefineInjectable({ factory: function LpRoutesBreadcrumbsService_Factory() { return new LpRoutesBreadcrumbsService(ɵɵinject(Router)); }, token: LpRoutesBreadcrumbsService, providedIn: LpRoutesBreadcrumbsModule });
LpRoutesBreadcrumbsService.decorators = [
    { type: Injectable, args: [{
                providedIn: LpRoutesBreadcrumbsModule
            },] }
];
LpRoutesBreadcrumbsService.ctorParameters = () => [
    { type: Router }
];

/*
 * Public API Surface of lp-routes-breadcrumbs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpRoutesBreadcrumbsModule, LpRoutesBreadcrumbsService };
//# sourceMappingURL=lp-routes-breadcrumbs.js.map
