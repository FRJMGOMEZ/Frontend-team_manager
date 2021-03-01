import { Component, OnInit, OnDestroy} from '@angular/core';
import { Project } from '../core/models/project.model';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription} from 'rxjs';
import { tap } from 'rxjs/operators';
import { WebSocketsService } from '../core/providers/web-sockets.service';
import { ProjectService } from '../core/providers/project.service';
import { AuthService } from '../auth/shared/providers/auth.service';
import { DialogsService } from '../core/providers/dialogs.service';
import { TaskService } from '../core/providers/task.service';
import { NotificationService } from '../core/providers/notification.service';
import { LpDialogsService } from 'lp-dialogs';
import { MediaService } from '../core/providers/media.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, OnDestroy {
  path: string
  projectsSubs: Subscription;
  selectedProject:string;
  display:boolean = true;
  constructor(  private wSService:WebSocketsService,
                public projectService:ProjectService,
                private authService:AuthService,
                private dialogService:DialogsService,
                private taskService:TaskService,
                private notificationsService: NotificationService,
                private lpDialogs:LpDialogsService,
                private router: Router,
                private ar: ActivatedRoute,
                public mdService:MediaService)
                
  {this.path = this.router.url.split('/')[2]}
  ngOnInit() {
    this.projectsSubs = this.projectService.selectedProject$.pipe(
      tap(() => {})).subscribe((selectedProject:Project)=>{
        this.selectedProject = selectedProject._id;
        this.wSService.emit('user-in-project', { projectId: selectedProject })
      })
    this.wSService.emit('user-in-app', { userId: this.authService.userOnline._id });
    this.projectService.listenningProjectSockets();
    this.taskService.listenningTasksEvents();
    this.notificationsService.listenningNotificationsEvents();
  }
  navigate(path: string) {
    if (!this.router.url.includes(path)) {
      this.router.navigate([path], { relativeTo: this.ar });
      this.path = path;
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
    this.projectsSubs.unsubscribe();
  }

}
