import { Component, OnInit, OnDestroy,  ViewChild, AfterViewInit } from '@angular/core';
import { WebSocketsService } from '../core/shared/providers/web-sockets.service';
import { AuthService } from '../core/shared/auth/shared/providers/auth.service';
import { ProjectService } from '../core/shared/providers/project.service';

import { Project } from '../core/models/project.model';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TaskService } from '../core/shared/providers/task.service';
import { DialogsService } from '../core/shared/providers/dialogs.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../core/shared/animations/animations';
import { timer } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class PagesComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('outlet') routerOutlet: RouterOutlet;
  routesAnimation:string = '';
  projects:Project[]=[]
  constructor(private wSService:WebSocketsService,
                
                public projectService:ProjectService,

                private authService:AuthService,

                private dialogService:DialogsService,
                
                private taskService:TaskService,
                public deviceDetectorService: DeviceDetectorService){ }
  ngOnInit() {
    this.wSService.emit('user-in-app', { userId: this.authService.userOnline._id })
    this.projectService.getProjects().subscribe((projects)=>{
      this.projects = projects;
      this.projects.forEach((eachProject:Project)=>{
         this.wSService.emit('user-in-project',{projectId:eachProject._id})
      })
      this.projectService.listenningProjectSockets()
      this.taskService.listenningTasksEvents();
    })
  }
  ngAfterViewInit(){
     this.projectService.selectedProject$.subscribe(()=>{
       timer().subscribe(()=>{
         this.routesAnimation = this.routerOutlet.activatedRouteData.animation;
       })
     })
  }
  postTask(){
    this.dialogService.openEditCreateTaskDialog()
  }

   logout(){
     let subs = this.authService.logout().subscribe(() => {
       subs.unsubscribe()
     })
   }
  ngOnDestroy() {
    this.wSService.emit('user-out-app')
  }
}
