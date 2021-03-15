import { Component } from '@angular/core';
import { WebSocketsService } from './core/providers/web-sockets.service';
import { LpRoutesBreadcrumbsService } from 'lp-routes-breadcrumbs';
import { LoadSpinnerService } from './core/components/load-spinner/load-spinner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  desktop: boolean;
  constructor(private wsService: WebSocketsService,private lpRoutesBreadcrumbsService:LpRoutesBreadcrumbsService, private loadSpinnerService:LoadSpinnerService){
    this.wsService.checkStatus();
    this.lpRoutesBreadcrumbsService.listenningNavigationStart().subscribe(() => {
      this.loadSpinnerService.state.next(true);
    })
    this.lpRoutesBreadcrumbsService.listenningNavigationEnd().subscribe(()=>{
      this.loadSpinnerService.state.next(false);
    })
  }
  title = 'cargomusicapp-front';

}
