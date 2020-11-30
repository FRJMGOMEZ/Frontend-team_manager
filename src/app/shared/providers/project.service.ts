import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { URL_SERVICES } from '../../config/config';
import { Project } from '../models/project.model';
import { Subject, Observable, empty } from 'rxjs';
import { GDService } from '../../library/components/global-dialogs/global-dialogs.service';
import { LocalStorageService } from '../../library/providers/local-storage.service';
import { WebSocketsService } from './web-sockets.service';
import { AuthService } from '../../auth/shared/providers/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LpErrorHandlerService } from '../../library/providers/lp-error-handler.service';
import { LpSnackbarNotificationsService } from '../../library/providers/lp-snackbar-notifications.service';


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
    private errorHandlerService: LpErrorHandlerService,
    private gdService: GDService,
    private localStorageService: LocalStorageService,

    private wSService: WebSocketsService,

    private authService: AuthService,

    private plSnackbarNotificationsService:LpSnackbarNotificationsService,

    private dialogRef:MatDialog
    ) {}
   
  getProjects() {
    let url = `${URL_SERVICES}projects`
    return this.http.get(url).pipe(
      map((res: any) => {
        this.projects = res.projects;
        return res.projects }),
      catchError((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe(); return this.errorHandlerService.handleError(err) })
    )
  }
  getprojectById(projectId: string) {
    let url = `${URL_SERVICES}project/${projectId}`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.project
      }),
      catchError((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe(); return this.errorHandlerService.handleError(err) }))
  }

  getParticipants(projectId: string) {
    let url = `${URL_SERVICES}getParticipants/${projectId}`;
    return this.http.get(url).pipe(map((res: any) => {
      return res.participants
    }),
      catchError((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) })
    )
  }
  selectProject(projectId?: string) {
      this.selectedProject = this.projects.filter((eachProject:Project)=>{ return eachProject._id === projectId})[0]
      this.localStorageService.set('state-data', projectId, 'project');
      this.selectedProjectSrc.next(projectId);
  }

  postProject(project: Project) {
    let url = `${URL_SERVICES}project`
    return this.http.post(url, project).pipe(
      tap((res: any) => {
        this.projectSrc.next({project:res.project,action:'POST'})
        this.gdService.openInfoDialog('SUCCESFULLY CREATED', null, res.project.name);
      })
      , catchError((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) })
    )
  }

  putProject(project: Project): Observable<any> {
    let url = `${URL_SERVICES}project`
    return this.http.put(url, project).pipe(
      tap((res: any) => {
        if(!res.project.participants.includes(this.authService.userOnline._id)){
          this.projectSrc.next({ project, action: 'DELETE' })
          this.gdService.openInfoDialog('IN ORDER TO GET ACCESS AGAIN TALK TO OTHER ADMNISTRATOR', 'REMOVAL', res.project.name)
          this.wSService.emit('user-leave-project', { projectId: res.project._id })
        }else{
          this.projectSrc.next({ project: res.project, action: 'PUT' })
          this.gdService.openInfoDialog('SUCCESFULLY UPDATED', 'PUT', res.project.name)
        }
      }),
      catchError((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) }))
  }

  deleteProject(id: string): Observable<any> {
    let url = `${URL_SERVICES}project/${id}`;
    let backRequest = this.http.delete(url).pipe(
      tap((res: any) => {
        this.projectSrc.next({project:res.project,action:'DELETE'})
        this.gdService.openInfoDialog('SUCCESFULY DELETED', 'DELETION', res.project.name)
        this.wSService.emit('user-leave-project',{projectId:res.project._id})
      }),
      catchError((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) }))
    return this.gdService.openConfirmDialog()
      .pipe(
        switchMap((res: any) => {
          return res ? backRequest : empty()
        }))
  }

  listenningProjectSockets() {

    this.wSService.listen('projects-change').subscribe((payload: { project: Project, method: string, user: string, projectOld?: Project }) => {

      let { method, project, user, projectOld } = payload;
      let newParticipants = project.participants as string[]

      console.log('comes')

      switch (method) {
        case 'POST':
          if (newParticipants.includes(this.authService.userOnline._id)) {
            this.projectSrc.next({project,action:'POST'})
            this.plSnackbarNotificationsService.showSocketNotification(method, project.name,'project', user)
            this.wSService.emit('user-in-project', { projectId: project._id })
          }
          break;
        case 'PUT':
            if((project.participants as string[]).includes(this.authService.userOnline._id)){
              if ((projectOld.participants as string[]).includes(this.authService.userOnline._id)){
                this.projectSrc.next({ project, action: 'PUT' })
              }else{
                this.projectSrc.next({ project, action: 'POST' })
                this.wSService.emit('user-in-project',{projectId:project._id})
              }
              this.plSnackbarNotificationsService.showSocketNotification(method, project.name,'project', user)
            }else{
              if ((projectOld.participants as string[]).includes(this.authService.userOnline._id)){
                this.projectSrc.next({ project, action: 'DELETE' })
                this.plSnackbarNotificationsService.showSocketNotification(method, project.name,'project', user)
                this.wSService.emit('user-leave-project', { projectId: project._id })
              }
            }
          break;
        case 'DELETE':
          if ((project.participants as string[]).includes(this.authService.userOnline._id)){
              this.projectSrc.next({ project, action: 'DELETE' })
              this.wSService.emit('user-leave-project', { projectId: project._id })
          }
          break;
      }

      if(this.localStorageService.get('state-data','project-on-screen') === project._id){
        this.dialogRef.closeAll()
      }
    })
  }
  isUserAdm(userId:string,projectId:string){
     let project = this.projects.find((eachP)=>{ return eachP._id === projectId});
     if(project){
        return (project.participants as string[]).includes(userId) ? true : false;
     }
     return false
  }
}
