import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LpRoutesBreadcrumbsModule } from './lp-routes-breadcrumbs.module';

@Injectable({
  providedIn: LpRoutesBreadcrumbsModule
})
export class LpRoutesBreadcrumbsService {

  private navigationStart: { currentUrl: string, previousUrl: string } = { currentUrl: '', previousUrl: '' }

  private navigationEnd: { currentUrl: string, previousUrl: string } = { currentUrl: '', previousUrl: '' }

  constructor(private router: Router) {

    this.listenningNavigationStart();
    this.listenningNavigationEnd();
  }

  listenningNavigationStart() {
    this.router.events
      .pipe(filter((event) => { return event instanceof NavigationStart }))
      .subscribe((event: any) => {
        this.navigationStart.previousUrl = this.navigationStart.currentUrl;
        this.navigationStart.currentUrl = event.url;
      })
  }

  listenningNavigationEnd() {
    this.router.events
      .pipe(filter((event) => { return event instanceof NavigationEnd }))
      .subscribe((event: any) => {
        this.navigationEnd.previousUrl = this.navigationEnd.currentUrl;
        this.navigationEnd.currentUrl = event.url;
      })
  }

  getNavStart(): { currentUrl: string, previousUrl: string } {
    return this.navigationStart
  }
  getNavEnd(): { currentUrl: string, previousUrl: string } {
    return this.navigationEnd;
  }
}
