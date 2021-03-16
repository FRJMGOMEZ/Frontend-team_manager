import { Component } from '@angular/core';
import { WebSocketsService } from './core/providers/web-sockets.service';
import { LpRoutesBreadcrumbsService } from 'lp-routes-breadcrumbs';
import { LoadSpinnerService } from './core/components/load-spinner/load-spinner.service';
import { Platform } from '@angular/cdk/platform';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  browsersBanned = ['FIREFOX'];
  display:boolean = true;
  constructor(private wsService: WebSocketsService, private lpRoutesBreadcrumbsService: LpRoutesBreadcrumbsService, private loadSpinnerService: LoadSpinnerService, public platform: Platform){
    this.wsService.checkStatus();
    this.lpRoutesBreadcrumbsService.listenningNavigationStart().subscribe(() => {
      this.loadSpinnerService.state.next(true);
    })
    this.lpRoutesBreadcrumbsService.listenningNavigationEnd().subscribe(()=>{
      this.loadSpinnerService.state.next(false);
    })
    // Firefox 1.0+
    this.browsersBanned.forEach((browser)=>{
      if(this.platform[browser]){
        this.display = false;
      }
    })
  }
  title = 'cargomusicapp-front';

}
