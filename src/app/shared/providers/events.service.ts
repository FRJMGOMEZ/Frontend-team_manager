import { Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { Subject, Observable, empty } from 'rxjs';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
import { GDService } from '../../library/components/global-dialogs/global-dialogs.service';
import { DateOperationsService } from '../../library/providers/date-operations.service';
import { WebSocketsService } from './web-sockets.service';
import { PlSnackbarNotificationsService } from '../../library/providers/pl-snackbar-notifications.service';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from '../../library/providers/local-storage.service';
import { AuthService } from '../../auth/shared/providers/auth.service';
import { PlErrorHandlerService } from '../../library/providers/pl-error-handler.service';
import { ProjectService } from './project.service';
import { Project } from '../models/project.model';
import { NotificationModel } from '../models/notification.model';
import { User } from '../models/user.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventSrc: Subject<{ event: EventModel, action: string }> = new Subject<{ event: EventModel, action: string }>();
  public event$: Observable<{event:EventModel,action:string}> = this.eventSrc.asObservable();

  constructor(
    private http: HttpClient,
    private errorHandlerService: PlErrorHandlerService,
    private gdService: GDService,
    private wsService: WebSocketsService,
    private plSnackbarNotificationsService:PlSnackbarNotificationsService,
    private dialogRef: MatDialog,
    private localStorageService:LocalStorageService,
    private authService:AuthService,
    private notificationService:NotificationService) { }

  postEvent(event: EventModel) {
    let url = `${URL_SERVICES}event`;
    return this.http.post(url, event).pipe(
      map((res: any) => { return res.event }),
      tap((event: EventModel) => { this.gdService.openInfoDialog('SUCESFULLY CREATED', 'CREATION', event.name); this.eventSrc.next({event,action:'POST'}) }),
      catchError((err) => {  this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) }))
  }

  putEvent(event: { [key: string]: any }, id: string) {
    const url = `${URL_SERVICES}event/${id}`;
    return this.http.patch(url, event).pipe(
      map((res: any) => { return res.event }),
      tap((event: EventModel) => { 
        if((event.participants as string[]).includes(this.authService.userOnline._id)){
          this.eventSrc.next({ event, action: 'PUT' }) 
          this.gdService.openInfoDialog('SUCESFULLY UPDATED', 'EDITION', event.name); 
        }else{
          console.log('delete')
          this.gdService.openInfoDialog('YOU ARE OUT THE EVENT', 'EDITION', event.name); this.eventSrc.next({ event, action: 'DELETE' }) 
          this.dialogRef.closeAll();
        }
      }),
      catchError((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) })
    )
  }

  getEventsByTimeRange(selector: string, range: number[], projectId: string = '', recursiveFilter?: number) {
    let url = `${URL_SERVICES}events-by-time-range/${selector}?from=${range[0]}&to=${range[1]}&projectId=${projectId}&recursiveFilter=${recursiveFilter}`
    return this.http.get(url).pipe(
      map((res: any) => { return res.events }),
      catchError((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) }))
  }

  deleteEvent(eventId: string) {
    let url = `${URL_SERVICES}event/${eventId}`;
    let backRequest = this.http.delete(url).pipe(
      map((res: any) => { return res.event }),
      tap((event: EventModel) => { this.gdService.openInfoDialog('SUCESFULLY DELETED', 'DELETION', event.name); this.eventSrc.next({event,action:'DELETE'}) }),
      catchError((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) }));

    return this.gdService.openConfirmDialog()
      .pipe(
        switchMap((res: any) => {
          return res ? backRequest : empty()
        }))
  }

  getEventById(id: string) {
    let url = `${URL_SERVICES}event-by-id/${id}`;
    return this.http.get(url).pipe(
      map((res: any) => { return res.event }),
      catchError((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) })
    )
  }
  editionBanned(event: EventModel) {
    let today = new Date();
    if (event.startDate < new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0).getTime()) {
      event.editable = false;
      return true
    }
    if (DateOperationsService.dateComparison(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0), new Date(event.startDate))) {
      let eventStartDateTime;
      const startTime = event.startTime ? event.startTime.split(':').reduce((acum, time, index) => { return index === 0 ? acum + Number(time) : (acum + (Number(time) / 60)) }, 0) * 3600000 : 0;
      eventStartDateTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 1).getTime() + startTime;
      if (new Date().getTime() > eventStartDateTime) {
        event.editable = false;
        return true
      }
      event.editable = true;
      return false
    }
    event.editable = true;
    return false
  }
  listenningEventSockets() {
  
    this.wsService.listen('events-change').subscribe((notification:NotificationModel) => {
        this.notificationService.toggleNotification(notification._id,true).subscribe(()=>{
          console.log('notified')
          const { userFrom, method } = notification;
          const event = notification.item;
          const eventOld = notification.oldItem;
          const user = userFrom as User;

          console.log({user})

          switch (method) {
            case 'POST':
              if ((event.participants as string[]).includes(this.authService.userOnline._id)) {
                this.eventSrc.next({ event, action: 'POST' })
                this.plSnackbarNotificationsService.showSocketNotification('ADHESION', eventOld ? eventOld.name : event.name, 'event', user.name, (event.project as Project).name)
              }
              break;
            case 'PUT':
              if ((event.participants as string[]).includes(this.authService.userOnline._id)) {
                if (!(eventOld.participants as string[]).includes(this.authService.userOnline._id)) {
                  this.eventSrc.next({ event, action: 'POST' })
                  this.plSnackbarNotificationsService.showSocketNotification(method, event.name, 'project', user.name, (event.project as Project).name)
                } else {
                  this.eventSrc.next({ event, action: 'PUT' })
                  this.plSnackbarNotificationsService.showSocketNotification(method, event.name, 'project', user.name, (event.project as Project).name)
                }
              } else {
                if ((eventOld.participants as string[]).includes(this.authService.userOnline._id)) {
             
                  this.eventSrc.next({ event, action: 'DELETE' })
                  this.plSnackbarNotificationsService.showSocketNotification('REMOVAL', event.name, 'project', user.name, (event.project as Project).name)
                }
              }
              break;
            case 'DELETE':
              if ((event.participants as string[]).includes(this.authService.userOnline._id)) {
                this.eventSrc.next({ event, action: 'DELETE' })
                this.plSnackbarNotificationsService.showSocketNotification('DELETE', event.name, 'project', user.name, (event.project as Project).name)
              }
              break;
          }
          let eventOnScreen = this.localStorageService.get('state-data', 'event-on-screen');
          if ((method === 'PUT' || method === 'DELETE') && eventOnScreen === event._id) {
            this.dialogRef.closeAll();
          }
        })
    })
  }
}
