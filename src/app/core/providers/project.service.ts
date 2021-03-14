import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { Subject, Observable, empty } from 'rxjs';
import { WebSocketsService } from './web-sockets.service';
import { MatDialog } from '@angular/material/dialog';
import { LpDialogsService } from 'lp-dialogs';
import { Project } from '../models/project.model';
import { AuthService } from './auth.service';
import { API_URL } from '../../config/api-url';
import { LpLocalStorage } from 'lp-operations';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  /*  To spread the projects changes  */
  private projectSrc: Subject<{ project: Project, action: string }> = new Subject<{ project: Project, action: string }>();
  public project$: Observable<{ project: Project, action: string }> = this.projectSrc.asObservable().pipe(tap((res: any) => {
    if (this.selectedProject && (res.project._id === this.selectedProject._id)) {
      switch (res.action) {
        case 'PUT': this._selectedProject = res.project;
          break;
        case 'DELETE': this.selectProject(null);
          break;
      }
    }
  }));

  /* To spread projects selected */
  private selectedProjectSrc: Subject<Project> = new Subject<Project>();
  public selectedProject$: Observable<Project> = this.selectedProjectSrc.asObservable();
  private _selectedProject:Project;

  constructor(private http: HttpClient,
              private lpDialogsService: LpDialogsService,
              private wSService: WebSocketsService,
              private authService: AuthService,
              private dialogRef:MatDialog
    ) {}
   
  get selectedProject(){
    return this._selectedProject;
  }  
  getProjects() {
    let url = `${API_URL}projects`
    return this.http.get(url).pipe(
      map((res: any) =>  res.projects )
    );
  }
  getProjectById(projectId: string) {
    let url = `${API_URL}project/${projectId}`;
    return this.http.get(url).pipe(
      map((res: any) => res.project));
  }

  getParticipants(projectId: string) {
    let url = `${API_URL}get-participants/${projectId}`;
    return this.http.get(url).pipe(map((res: any) =>  res.participants)
    );
  }
  selectProject(project:Project) {
      this._selectedProject =project;
    LpLocalStorage.set('state-data', project._id, 'project');
      this.selectedProjectSrc.next(project);
  }

  postProject(project: Project) {
    let url = `${API_URL}project`;
    return this.http.post(url, project).pipe(
      tap((res: any) => {
        this.projectSrc.next({project:res.project,action:'POST'});
        this.lpDialogsService.openInfoDialog('SUCCESFULLY CREATED', null, res.project.name);
      })
    );
  }

  putProject(changes:{ [key: string]: any},id:string): Observable<any> {
    let url = `${API_URL}project/${id}`;
    return this.http.put(url, {project:changes}).pipe(
      tap((res: any) => {
        if(!res.project.participants.map((p)=>{ return p._id }).includes(this.authService.userOnline._id)){
          this.projectSrc.next({ project:res.project, action: 'DELETE' });
          this.lpDialogsService.openInfoDialog('IN ORDER TO GET ACCESS AGAIN TALK TO OTHER ADMNISTRATOR', 'REMOVAL', res.project.name);
          this.wSService.emit('user-out-project', { projectId: res.project._id });
        }else{
          this.projectSrc.next({ project: res.project, action: 'PUT' });
          this.lpDialogsService.openInfoDialog('SUCCESFULLY UPDATED', 'PUT', res.project.name);
        }
      }));
  }

  deleteProject(id: string): Observable<any> {
    let url = `${API_URL}project/${id}`;
    let backRequest = this.http.delete(url).pipe(
      tap((res: any) => {
        this.projectSrc.next({project:res.project,action:'DELETE'});
        this.lpDialogsService.openInfoDialog('SUCCESFULY DELETED', 'DELETION', res.project.name);
        this.wSService.emit('user-out-project',{projectId:res.project._id});
      }));
    return this.lpDialogsService.openConfirmDialog()
      .pipe(
        switchMap((res: any) => {
          return res ? backRequest : empty();
        }));
  }

  listenningProjectSockets() {
    this.wSService.listen('projects-events').subscribe((res: { project: Project,method: string,prevProject:any }) => {
      const { method, project, prevProject } = res;
      const participants:string = (project.participants as any).map((p)=>{ return p._id ? p._id : p});
      switch (method) {
        case 'POST':
          if (participants.includes(this.authService.userOnline._id)) {
            this.projectSrc.next({project,action:'POST'});
            this.wSService.emit('user-in-project', { projectId: project._id });
          }
          break;
        case 'PUT':
            if(participants.includes(this.authService.userOnline._id)){
              if ((prevProject.participants as any).map((p) => { return p._id }).includes(this.authService.userOnline._id)){
                this.projectSrc.next({ project, action: 'PUT' });
              }else{
                this.projectSrc.next({ project, action: 'POST' });
                this.wSService.emit('user-in-project',{projectId:project._id});
              }
            }else{
               this.projectSrc.next({ project, action: 'DELETE' });
               this.wSService.emit('user-out-project', { projectId: project._id });
            }
          break;
        case 'DELETE':
          if (participants.includes(this.authService.userOnline._id)){
              this.projectSrc.next({ project, action: 'DELETE' });
              this.wSService.emit('user-out-project', { projectId: project._id });
          }
          break;
      }
      if (LpLocalStorage.get('state-data','project-on-screen') === project._id){
        this.dialogRef.closeAll();
      }
    })
  }

}
