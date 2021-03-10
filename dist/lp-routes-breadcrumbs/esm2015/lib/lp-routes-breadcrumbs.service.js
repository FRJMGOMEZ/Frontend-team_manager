import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LpRoutesBreadcrumbsModule } from './lp-routes-breadcrumbs.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./lp-routes-breadcrumbs.module";
export class LpRoutesBreadcrumbsService {
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
LpRoutesBreadcrumbsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LpRoutesBreadcrumbsService_Factory() { return new LpRoutesBreadcrumbsService(i0.ɵɵinject(i1.Router)); }, token: LpRoutesBreadcrumbsService, providedIn: i2.LpRoutesBreadcrumbsModule });
LpRoutesBreadcrumbsService.decorators = [
    { type: Injectable, args: [{
                providedIn: LpRoutesBreadcrumbsModule
            },] }
];
LpRoutesBreadcrumbsService.ctorParameters = () => [
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtcm91dGVzLWJyZWFkY3J1bWJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvMzQ2OTUvRGVza3RvcC9EUkFGVC90ZWFtLW1hbmFnZXItZnJvbnRlbmQvcHJvamVjdHMvbHAtcm91dGVzLWJyZWFkY3J1bWJzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9scC1yb3V0ZXMtYnJlYWRjcnVtYnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUszRSxNQUFNLE9BQU8sMEJBQTBCO0lBTXJDLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSjFCLG9CQUFlLEdBQWdELEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUE7UUFFbEcsa0JBQWEsR0FBZ0QsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQTtRQUl0RyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQseUJBQXlCO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLE9BQU8sS0FBSyxZQUFZLGVBQWUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BFLFNBQVMsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1lBQ25FLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsdUJBQXVCO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLE9BQU8sS0FBSyxZQUFZLGFBQWEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xFLFNBQVMsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1lBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O1lBdENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUseUJBQXlCO2FBQ3RDOzs7WUFOUSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTHBSb3V0ZXNCcmVhZGNydW1ic01vZHVsZSB9IGZyb20gJy4vbHAtcm91dGVzLWJyZWFkY3J1bWJzLm1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogTHBSb3V0ZXNCcmVhZGNydW1ic01vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBMcFJvdXRlc0JyZWFkY3J1bWJzU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBuYXZpZ2F0aW9uU3RhcnQ6IHsgY3VycmVudFVybDogc3RyaW5nLCBwcmV2aW91c1VybDogc3RyaW5nIH0gPSB7IGN1cnJlbnRVcmw6ICcnLCBwcmV2aW91c1VybDogJycgfVxuXG4gIHByaXZhdGUgbmF2aWdhdGlvbkVuZDogeyBjdXJyZW50VXJsOiBzdHJpbmcsIHByZXZpb3VzVXJsOiBzdHJpbmcgfSA9IHsgY3VycmVudFVybDogJycsIHByZXZpb3VzVXJsOiAnJyB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXG4gICAgdGhpcy5saXN0ZW5uaW5nTmF2aWdhdGlvblN0YXJ0KCk7XG4gICAgdGhpcy5saXN0ZW5uaW5nTmF2aWdhdGlvbkVuZCgpO1xuICB9XG5cbiAgbGlzdGVubmluZ05hdmlnYXRpb25TdGFydCgpIHtcbiAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQpID0+IHsgcmV0dXJuIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0IH0pKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TdGFydC5wcmV2aW91c1VybCA9IHRoaXMubmF2aWdhdGlvblN0YXJ0LmN1cnJlbnRVcmw7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblN0YXJ0LmN1cnJlbnRVcmwgPSBldmVudC51cmw7XG4gICAgICB9KVxuICB9XG5cbiAgbGlzdGVubmluZ05hdmlnYXRpb25FbmQoKSB7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShmaWx0ZXIoKGV2ZW50KSA9PiB7IHJldHVybiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgfSkpXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkVuZC5wcmV2aW91c1VybCA9IHRoaXMubmF2aWdhdGlvbkVuZC5jdXJyZW50VXJsO1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25FbmQuY3VycmVudFVybCA9IGV2ZW50LnVybDtcbiAgICAgIH0pXG4gIH1cblxuICBnZXROYXZTdGFydCgpOiB7IGN1cnJlbnRVcmw6IHN0cmluZywgcHJldmlvdXNVcmw6IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uU3RhcnRcbiAgfVxuICBnZXROYXZFbmQoKTogeyBjdXJyZW50VXJsOiBzdHJpbmcsIHByZXZpb3VzVXJsOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbkVuZDtcbiAgfVxufVxuIl19