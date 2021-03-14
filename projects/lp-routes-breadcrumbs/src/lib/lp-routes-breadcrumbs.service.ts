import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LpRoutesBreadcrumbsService {

  private navigationStart: { currentUrl: string, previousUrl: string } = { currentUrl: '', previousUrl: '' }

  private navigationEnd: { currentUrl: string, previousUrl: string } = { currentUrl: '', previousUrl: '' }

  constructor(private router: Router) {

   /*  this.listenningNavigationStart();
    this.listenningNavigationEnd(); */
  }

  listenningNavigationStart() {
    return this.router.events
      .pipe(
        filter((event) => { return event instanceof NavigationStart }),
        tap((event: any) => {
          this.navigationStart.previousUrl = this.navigationStart.currentUrl;
          this.navigationStart.currentUrl = event.url;
        }))
      
  }

  listenningNavigationEnd() {
    return this.router.events
      .pipe(
        filter((event) => { return event instanceof NavigationEnd }),
        tap((event: any) => {
          this.navigationEnd.previousUrl = this.navigationEnd.currentUrl;
          this.navigationEnd.currentUrl = event.url;
        }))
      
  }

  getNavStart(): { currentUrl: string, previousUrl: string } {
    return this.navigationStart
  }
  getNavEnd(): { currentUrl: string, previousUrl: string } {
    return this.navigationEnd;
  }
}
