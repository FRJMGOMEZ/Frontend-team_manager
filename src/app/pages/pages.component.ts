import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription} from 'rxjs';
import { WebSocketsService } from '../core/providers/web-sockets.service';
import { ProjectService } from '../core/providers/project.service';
import { AuthService } from '../core/providers/auth.service';
import { DialogsService } from '../core/providers/dialogs.service';
import { TaskService } from '../core/providers/task.service';
import { NotificationService } from '../core/providers/notification.service';
import { LpDialogsService } from 'lp-dialogs';
import { RoutesService } from '../core/providers/routes.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') sidenav:MatSidenav;
  currentPage: string;
  display:boolean=false;
  sidenavOpen:boolean = false;
  currentPageSubs:Subscription;
  constructor(  private wSService:WebSocketsService,
                public projectService:ProjectService,
                public authService:AuthService,
                public dialogService:DialogsService,
                private taskService:TaskService,
                private notificationsService: NotificationService,
                private lpDialogs:LpDialogsService,
                private router: Router,
                private ar:ActivatedRoute,
                private routesService:RoutesService,
                private cdr:ChangeDetectorRef)
                
  {}
  ngOnInit() {

    this.currentPageSubs = this.routesService.currentPage$.subscribe((page)=>{
      this.currentPage = page;
      this.cdr.detectChanges();
    })
      this.wSService.emit('user-in-app', { userId: this.authService.userOnline._id }, (res) => {
        if (res.ok) {
          this.display = true;
          this.projectService.listenningProjectSockets();
          this.taskService.listenningTasksEvents();
          this.notificationsService.listenningNotificationsEvents();
        } else {
          this.lpDialogs.openInfoDialog(res.message, 'USER BUSSY');
          /* this.authService.logout().subscribe(); */
          this.router.navigate(['/auth/login'])
        }
    })
  }
  navigate(path: string) {
    if (!this.router.url.includes(path)) {
      const promise = path === 'home' ? this.router.navigate([path], { relativeTo: this.ar }) : this.router.navigate([ `${this.projectService.selectedProject._id}/${path}`], { relativeTo: this.ar});
      promise.then(()=>{
        this.sidenav && this.sidenav.opened  ? this.sidenav.toggle() : null;
      })
    }
  }
  postTask(){
    this.dialogService.openEditCreateTaskDialog()
  }
  logout(){
    this.lpDialogs.openConfirmDialog('ARE YOU SURE?','').subscribe((res:boolean)=>{
     if(res){
       this.authService.logout().subscribe()
     }
    })
   }
  ngOnDestroy() {
    this.wSService.emit('user-out-app');
    this.currentPageSubs.unsubscribe();
  }

}
