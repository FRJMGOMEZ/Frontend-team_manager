import { Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
export declare class LpRoutesBreadcrumbsService {
    private router;
    private navigationStart;
    private navigationEnd;
    constructor(router: Router);
    listenningNavigationStart(): void;
    listenningNavigationEnd(): void;
    getNavStart(): {
        currentUrl: string;
        previousUrl: string;
    };
    getNavEnd(): {
        currentUrl: string;
        previousUrl: string;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LpRoutesBreadcrumbsService, never>;
}

//# sourceMappingURL=lp-routes-breadcrumbs.service.d.ts.map