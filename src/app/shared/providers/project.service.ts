import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { URL_SERVICES } from '../../config/config';
import { Project } from '../models/project.model';
import { ErrorHandlerService } from './error-handler.service';
import { Subject, Observable, empty } from 'rxjs';
import { GDService } from '../../library/components/global-dialogs/global-dialogs.service';
import { LocalStorageService } from '../../library/providers/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  /* Store all the projects */

  projects: Project[] = []

  private projectsSrc: Subject<Project[]> = new Subject<Project[]>();

  public projects$: Observable<Project[]> = this.projectsSrc.asObservable();

  /* To spread single project changes */
  private projectSrc: Subject<{ project: Project | string, order: string }> = new Subject<{ project: Project | string, order: string }>();

  public project$: Observable<{ project: Project | string, order: string }> = this.projectSrc.asObservable();

  /* Store selecteProjects */
  selectedProject: Project
  /* To spread projects selected */
  private selectedProjectSrc: Subject<Project | string> = new Subject<Project| string>();

  public selectedProject$: Observable<Project | string> = this.selectedProjectSrc.asObservable();

  constructor(private http: HttpClient,private errorHandlerService: ErrorHandlerService,private gdService: GDService, private localStorageService:LocalStorageService) { }

  getProjects() {
    let url = `${URL_SERVICES}projects`
    return this.http.get(url).pipe(
      tap((res: any) => { this.projectsSrc.next(res.projects); this.projects = res.projects })
      , map((res: any) => {
        return res.projects;
      }),
      catchError((err) => {  this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) })
    )
  }
  selectProject(projectId?: string):Project|string {
    if(!projectId){
        this.selectedProjectSrc.next('');
        this.localStorageService.remove('state-data','project') 
        return ''
    }else{
      let selectedProject = this.projects.filter((eachProject: Project) => { return eachProject._id === projectId })[0]; 
      this.selectedProjectSrc.next(selectedProject);
      this.localStorageService.set('state-data',selectedProject._id,'project')
      this.selectedProject = selectedProject;
      return this.selectedProject;
    }
  }

  postProject(project: Project) {
    let url = `${URL_SERVICES}project`
    return this.http.post(url, project).pipe(
      tap((res: any) => { this.projectSrc.next({ project: res.project, order: 'post' }); this.gdService.openInfoDialog('SUCCESFULLY CREATED',null,res.project.name) }),
      map((res: any) => {
        return res.project;
      })
      , catchError((err) => {  this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) })
    )
  }

  putProject(project: Project): Observable<any> {
    let url = `${URL_SERVICES}project`
    return this.http.put(url, project).pipe(
      tap((res: any) => { this.projectSrc.next({ project: res.project, order: 'put' }); this.gdService.openInfoDialog('SUCCESFULLY UPDATED', null,  res.project.name)  }),
      map((res: any) => { return res.project }),
      catchError((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) }))
  }

  changeProjectStatus(id: string) {
    let url = `${URL_SERVICES}project/changeStatus/${id}`
    return this.http.put(url, {}).pipe(
      tap((res: any) => { this.projectSrc.next({ project: res.project, order: 'put' }); }),
      catchError((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) })
    )
  }
  deleteProject(id: string): Observable<any> {
    let url = `${URL_SERVICES}project/${id}`;
    let backRequest = this.http.delete(url).pipe(
      tap((res: any) => { this.projectSrc.next({ project: id, order: 'delete' });this.gdService.openInfoDialog('succesfully deleted','DELETION',res.project.name)}),
      catchError((err) => {console.log(err); this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();   ; return this.errorHandlerService.handleError(err) }))    
      return this.gdService.openConfirmDialog()
      .pipe(
        switchMap((res: any) => {
          return res ? backRequest : empty()
        }))
  }
  getParticipants(projectId: string) {
    let url = `${URL_SERVICES}getParticipants/${projectId}`;
    return this.http.get(url).pipe(map((res: any) => {
      return res.participants
    }),
      catchError((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) })
    )
  }

  getProjectFiles(projectId: string) {
    let url = `${URL_SERVICES}project-files/${projectId}`;
    return this.http.get(url).pipe(map((res: any) => { return res.files }),
      catchError((err) => { this.gdService.openInfoDialog(err.message, err.status, 'ERROR').subscribe();; return this.errorHandlerService.handleError(err) }))
  }


  ////// SOCKET LOGIC UPDATING PROJECT /////
  /*  emitProject(projectOrder: ProjectOrder) {
     this.socket.emit('project', projectOrder)
   } */
  /*  projectsSocket() {
     return this.socket.fromEvent('project').pipe(map((projectOrder:ProjectOrder) => {
       if(projectOrder.order === 'delete'){
         if(this.projectSelectedId === projectOrder.project._id){
           this.projectSelectedId = undefined;
         }
         this.projects = this.projects.filter((project)=>{return project._id != projectOrder.project._id})
       }else if(projectOrder.order === 'put'){
         if(this.projects.map((project)=>{return project._id}).indexOf(projectOrder.project._id)>=0){
 
           if (this.projects[this.projects.map((project) => { return project._id }).indexOf(projectOrder.project._id)].name != projectOrder.project.name 
           || this.projects[this.projects.map((project) => { return project._id }).indexOf(projectOrder.project._id)].description != projectOrder.project.description){
            
             if(projectOrder.project._id === this.projectSelectedId ){
               this.name = projectOrder.project.name;
               this.description = projectOrder.project.description;
             }
               this.projects.forEach((project, index) => {
                 if (project._id === projectOrder.project._id) {
                   this.projects[index].name = projectOrder.project.name;
                   this.projects[index].description = projectOrder.project.description;
                 }
               })
           }else{
             if (projectOrder.project._id === this.projectSelectedId) {
               if (!projectOrder.project.status) {
                 if(this.administrators.map((user)=>{return user._id}).indexOf(this._userServices.userOnline._id)<0){
                   this.router.navigate(['/projects']).then(()=>{
                     this.getProjects().subscribe()
                   })
                 }else{
                   this.projects.forEach((project, index) => {
                     if (project._id === projectOrder.project._id) {
                       this.projects[index].status = projectOrder.project.status;
                     }
                   })
                 }
               } else {
                 this.projects.forEach((project, index) => {
                   if (project._id === projectOrder.project._id) {
                     this.projects[index].status = projectOrder.project.status;
                   }
                 })
               }
             }
               if(this.administrators.map((user)=>{return user._id}).indexOf(this._userServices.userOnline._id)<0){
                 this.projects = this.projects.filter((project)=>{return project._id != projectOrder.project._id})
               }else{
                 this.projects.forEach((project, index) => {
                   if (project._id === projectOrder.project._id) {
                     this.projects[index].status = projectOrder.project.status;
                   }
                 })
               }
           }
         }else{
          if(projectOrder.project.participants.indexOf(this._userServices.userOnline._id)>=0){
               this.projects.push(projectOrder.project)
          }
         }
       }
     }))
   }
  */
  //////// UPDATING LAST CONNECTION //////
  /*   lastConnection() {
      let url = `${URL_SERVICES}lastConnection/${this.projectSelectedId}`
      return this.http.put(url, {}, { headers: this._userServices.headers }).pipe(map((res: any) => {
        this._userServices.saveInStorage(res.user._id, res.user, this._userServices.token)
      }))
    } */

  /////// USERS IN/OUT SOCKET LOGIC ////////////////
  /* userIn() {
    let payload = { user: this._userServices.userOnline._id, room: this.projectSelectedId }
    this.socket.emit('userIn', payload, (usersOnline) => {
      this.participants.forEach((user, index) => {
        if (usersOnline.indexOf(user._id) >= 0) {
          this.participants[index].connected = true;
        } else {
          this.participants[index].connected = undefined;
        }
      })
    })
  } */

  /*  userOut() {
     let payload = { user: this._userServices.userOnline._id, room: this.projectSelectedId }
     this.socket.emit('userOut', payload)
   } */

  /* usersConnected(){
    return this.socket.fromEvent('usersOnline').pipe(map((usersOnline:string[])=>{
      this.participants.forEach((user,index)=>{
        if(usersOnline.indexOf(user._id)>=0){
          this.participants[index].connected = true;
        }else{
          this.participants[index].connected = undefined;
        }
      })
    }))
  } */

  /*  addOrRemoveParticipant(userId: string) {
     let url = `${URL_SERVICES}pullOrPushOutParticipant/${this.projectSelectedId}`;
     let body = { participant: userId };
     return this.http.put(url, body, { headers: this._userServices.headers }).pipe(map((res: any) => {
       let participantsIds = this.participants.map((user) => { return user._id })
       if (participantsIds.indexOf(res.participant._id) < 0) {
         this.participants.push(res.participant)
         this._userServices.users = this._userServices.users.filter((user) => { return user._id != userId })
         let userOrder = new UserOrder(res.participant, 'pushParticipant')
         this.emitUsers(userOrder, this.projectSelectedId)
       } else {
         this.participants = this.participants.filter((participant) => { return participant._id != res.participant._id })
         this._userServices.users.push(res.participant)
         let userOrder = new UserOrder(res.participant, 'removeParticipant')
         this.emitUsers(userOrder, this.projectSelectedId)
       }
     }))
   } */

  /* addOrRemoveAdmin(userId: string) {
    let url = `${URL_SERVICES}pullOrPushAdmin/${this.projectSelectedId}`;
    let body = { participant: userId };
    return this.http.put(url, body, { headers: this._userServices.headers }).pipe(map((res: any) => {
      let adminsIds = this.administrators.map((user) => { return user._id })
      if (adminsIds.indexOf(res.administrator._id) < 0) {
        this.administrators.push(res.administrator)
        this._userServices.users = this._userServices.users.filter((user) => { return user._id != userId })
        let userOrder = new UserOrder(res.administrator, 'pushAdmin')
        this.emitUsers(userOrder, this.projectSelectedId)
      } else {
        this.administrators = this.administrators.filter((administrators) => { return administrators._id != res.administrator._id })
        this._userServices.users.push(res.administrator)
        let userOrder = new UserOrder(res.administrator, 'removeAdmin')
        this.emitUsers(userOrder, this.projectSelectedId)
      }
    }))
  } */

  /*  emitUsers(userOrder: UserOrder, projectId) {
     let payload = { userOrder, projectId, room: this.projectSelectedId }
     this.socket.emit('projectUser', payload)
   } */

  /* usersSocket(){
    return this.socket.fromEvent('projectUser').pipe(map((payload:any)=>{
      if(payload.userOrder.order === 'pushParticipant'){
        if (this.projects.map((project) => { return project._id }).indexOf(payload.projectId) >= 0) {
          this.projects[this.projects.map((project) => { return project._id }).indexOf(payload.projectId)].participants.push(payload.userOrder.user._id)
          if (this.projectSelectedId == payload.projectId) {
            this.participants.push(payload.userOrder.user)
          }
        } else {
          if (this._userServices.userOnline._id === payload.userOrder.user._id) {
            if(this._ar.snapshot['_routerState'].url === '/projects'){
              this.router.navigate(['/projects']).then(async () => {
                await this.getProjects().subscribe()
              })
            }
            let date = new Date()
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() - date.getTimezoneOffset())
            let project = { _id: payload.projectId, lastConnection: date }
            this._userServices.userOnline.projects.push(project)
            this._userServices.saveInStorage(this._userServices.userOnline._id, this._userServices.userOnline, this._userServices.token)
          }
        }
      }else if (payload.userOrder.order === 'removeParticipant'){
        if (this.projects.map((project) => { return project._id }).indexOf(payload.projectId) >= 0) {
          if(this._userServices.userOnline._id === payload.userOrder.user._id){
            this.projects = this.projects.filter((project) => { return project._id != payload.projectId })
            this._userServices.userOnline.projects = this._userServices.userOnline.projects.filter((project) => { return project._id != payload.projectId })
            this._userServices.saveInStorage(this._userServices.userOnline._id, this._userServices.userOnline, this._userServices.token)
          }else{
            this.projects[this.projects.map((project) => { return project._id }).indexOf(payload.projectId)].participants =
              this.projects[this.projects.map((project) => { return project._id }).indexOf(payload.projectId)].participants.filter((user) => { user != payload.userOrder.user._id })
          }
          if(this.projectSelectedId === payload.projectId){
            if(payload.userOrder.user._id === this._userServices.userOnline._id){
              this.router.navigate(['/projects']).then(async()=>{
               await this.getProjects().subscribe()
               this.projectSelectedId = undefined;
               let user = this._userServices.userOnline
               user.projects = user.projects.filter((project)=>{return project._id != payload.projectId})
               this._userServices.saveInStorage(user._id, user, this._userServices.token) 
              })
            }else{
              this.participants = this.participants.filter((user)=>{return user._id != payload.userOrder.user._id})
            }
          }
        }else{
          let projects = JSON.parse(localStorage.getItem('user')).projects;
          if(projects.map((project)=>{return project._id}).indexOf(payload.projectId)>=0){
            this._userServices.userOnline.projects = this._userServices.userOnline.projects.filter((project)=>{return project._id != payload.projectId})
            this._userServices.saveInStorage(this._userServices.userOnline._id,this._userServices.userOnline,this._userServices.token)
          }
        }
      }else if(payload.userOrder.order === 'pushAdmin'){
        if (this.projects.map((project) => { return project._id }).indexOf(payload.projectId) >= 0) {
          this.projects[this.projects.map((project) => { return project._id }).indexOf(payload.projectId)].administrators.push(payload.userOrder.user._id)
          if(this.projectSelectedId === payload.projectId){
            this.administrators.push(payload.userOrder.user)
          }  
        }
      }else if (payload.userOrder.order === 'removeAdmin'){
        if (this.projects.map((project) => { return project._id }).indexOf(payload.projectId) >= 0){
          this.projects[this.projects.map((project) => { return project._id }).indexOf(payload.projectId)].administrators =
            this.projects[this.projects.map((project) => { return project._id }).indexOf(payload.projectId)].administrators.filter((user) => { user != payload.userOrder.user._id })
            if(this.projectSelectedId === payload.projectId){
              if (payload.userOrder.user._id === this._userServices.userOnline._id) {
                this.router.navigate(['/projects',payload.projectId]).then(()=>{
                  this.getProjectById(payload.projectId).subscribe()
                })
              } 
            this.administrators = this.administrators.filter((user) => { return user._id != payload.userOrder.user._id })  
          }
        }
      }
    }))
  } */
}
