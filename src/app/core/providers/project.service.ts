import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Subject, Observable, empty } from 'rxjs';
import { WebSocketsService } from './web-sockets.service';
import { MatDialog } from '@angular/material/dialog';
import { LpDialogsService } from 'lp-dialogs';
import { Project } from '../models/project.model';
import { ErrorHandlerService } from './error-handler.service';
import { LocalStorageService } from '../../library/providers/local-storage.service';
import { AuthService } from '../../auth/shared/providers/auth.service';
import { API_URL } from '../../config/api-url';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  /*  To spread the projects changes  */
  private projectSrc: Subject<{ project: Project, action: string }> = new Subject<{ project: Project, action: string }>();
  public project$: Observable<{ project: Project, action: string }> = this.projectSrc.asObservable();

  /* To spread projects selected */
  private selectedProjectSrc: Subject<string> = new Subject<string>();
  public selectedProject$: Observable<string> = this.selectedProjectSrc.asObservable();
  
  public selectedProject:Project
  public projects:Project[]=[]

  constructor(private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private lpDialogsService: LpDialogsService,
    private localStorageService: LocalStorageService,
    private wSService: WebSocketsService,
    private authService: AuthService,
    private dialogRef:MatDialog
    ) {}
   
  getProjects() {
    let url = `${API_URL}projects`
    return this.http.get(url).pipe(
      map((res: any) => {
        this.projects = res.projects;
        return res.projects }),
      catchError((err) => { this.lpDialogsService.openInfoDialog(err.message, err.status, 'ERROR').subscribe(); return this.errorHandlerService.handleError(err) })
    )
  }
  getProjectById(projectId: string) {
    let url = `${API_URL}project/${projectId}`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.project
      }),
      catchError((err) => { this.lpDialogsService.openInfoDialog(err.message, err.status, 'ERROR').subscribe(); return this.errorHandlerService.handleError(err) }))
  }

  getParticipants(projectId: string) {
    let url = `${API_URL}get-participants/${projectId}`;
    return this.http.get(url).pipe(map((res: any) => {
      return res.participants
    }),
      catchError((err) => { this.lpDialogsService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) })
    )
  }
  selectProject(projectId?: string) {
      this.selectedProject = this.projects.filter((eachProject:Project)=>{ return eachProject._id === projectId})[0]
      this.localStorageService.set('state-data', projectId, 'project');
      this.selectedProjectSrc.next(projectId);
  }

  postProject(project: Project) {
    let url = `${API_URL}project`
    return this.http.post(url, project).pipe(
      tap((res: any) => {
        this.projectSrc.next({project:res.project,action:'POST'})
        this.lpDialogsService.openInfoDialog('SUCCESFULLY CREATED', null, res.project.name);
      })
      , catchError((err) => { this.lpDialogsService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) })
    )
  }

  putProject(changes:{ [key: string]: any},id:string): Observable<any> {
    let url = `${API_URL}project/${id}`
    return this.http.put(url, {project:changes}).pipe(
      tap((res: any) => {
        console.log({res})
        if(!res.project.participants.map((p)=>{ return p._id }).includes(this.authService.userOnline._id)){
          this.projectSrc.next({ project:res.project, action: 'DELETE' })
          this.lpDialogsService.openInfoDialog('IN ORDER TO GET ACCESS AGAIN TALK TO OTHER ADMNISTRATOR', 'REMOVAL', res.project.name)
          this.wSService.emit('user-out-project', { projectId: res.project._id })
        }else{
          this.projectSrc.next({ project: res.project, action: 'PUT' })
          this.lpDialogsService.openInfoDialog('SUCCESFULLY UPDATED', 'PUT', res.project.name)
        }
      }),
      catchError((err) => { this.lpDialogsService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) }))
  }

  deleteProject(id: string): Observable<any> {
    let url = `${API_URL}project/${id}`;
    let backRequest = this.http.delete(url).pipe(
      tap((res: any) => {
        this.projectSrc.next({project:res.project,action:'DELETE'})
        this.lpDialogsService.openInfoDialog('SUCCESFULY DELETED', 'DELETION', res.project.name)
        this.wSService.emit('user-out-project',{projectId:res.project._id})
      }),
      catchError((err) => { this.lpDialogsService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) }))
    return this.lpDialogsService.openConfirmDialog()
      .pipe(
        switchMap((res: any) => {
          return res ? backRequest : empty()
        }))
  }

  isUserAdm(userId: string, projectId: string) {
    let project = this.projects.find((eachP) => { return eachP._id === projectId });
    if (project) {
      return (project.participants as string[]).includes(userId) ? true : false;
    }
    return false
  }

  listenningProjectSockets() {
    this.wSService.listen('projects-events').subscribe((res: { project: Project,method: string,prevProject:any }) => {
      let { method, project, prevProject } = res;
      let participants:string = (project.participants as any).map((p)=>{ return p._id})
      switch (method) {
        case 'POST':
          if (participants.includes(this.authService.userOnline._id)) {
            this.projectSrc.next({project,action:'POST'})
            this.wSService.emit('user-in-project', { projectId: project._id })
          }
          break;
        case 'PUT':
            if(participants.includes(this.authService.userOnline._id)){
              if ((prevProject.participants as string[]).includes(this.authService.userOnline._id)){
                this.projectSrc.next({ project, action: 'PUT' })
              }else{
                this.projectSrc.next({ project, action: 'POST' })
                this.wSService.emit('user-in-project',{projectId:project._id})
              }
            }else{
               this.projectSrc.next({ project, action: 'DELETE' })
               this.wSService.emit('user-out-project', { projectId: project._id })
            }
          break;
        case 'DELETE':
          if (participants.includes(this.authService.userOnline._id)){
              this.projectSrc.next({ project, action: 'DELETE' })
              this.wSService.emit('user-out-project', { projectId: project._id })
          }
          break;
      }
      if(this.localStorageService.get('state-data','project-on-screen') === project._id){
        this.dialogRef.closeAll()
      }
    })
  }

}
