import { Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { Subject, Observable, empty } from 'rxjs';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { GDService } from '../../library/components/global-dialogs/global-dialogs.service';
import { DateOperationsService } from '../../library/providers/date-operations.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventSrc: Subject<{ event: EventModel, order: string }> = new Subject<{event:EventModel,order:string}>();
  public event$: Observable<{ event: EventModel, order: string }> = this.eventSrc.asObservable();

  constructor(private http:HttpClient, private errorHandlerService:ErrorHandlerService, private gdService:GDService) { }

  postEvent(event:EventModel){
    let url = `${URL_SERVICES}event`;
    return this.http.post(url,event).pipe(
      map((res:any)=>{ return res.event }),
      tap((event:EventModel)=>{ this.gdService.openInfoDialog('SUCESFULLY CREATED','CREATION',event.name); this.eventSrc.next({event,order:'post'})}),
      catchError((err)=>{ console.log({err}); this.gdService.openInfoDialog(err.error.err.message,'ERROR');   return this.errorHandlerService.handleError(err) }))
  }

  putEvent(event:EventModel){
    const url = `${URL_SERVICES}event`;
    return this.http.put(url,event).pipe(
      map((res: any) => { return res.event }),
      tap((event: EventModel) => { this.gdService.openInfoDialog('SUCESFULLY UPDATED', 'EDITION', event.name); this.eventSrc.next({event,order:'put'}) }),
      catchError((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) })
    )
  }

  getEventsByTimeRange(selector:string,range:number[],projectId:string='',recursiveFilter?:number){
    let url = `${URL_SERVICES}events-by-time-range/${selector}?from=${range[0]}&to=${range[1]}&projectId=${projectId}&recursiveFilter=${recursiveFilter}`
    return this.http.get(url).pipe(
      map((res: any) => { return res.events }),
      catchError((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) }))
  }

  deleteEvent(eventId:string){
    let url = `${URL_SERVICES}event/${eventId}`;
    let backRequest = this.http.delete(url).pipe(
      map((res: any) => { return res.event }),
      tap((event: EventModel) => { this.gdService.openInfoDialog('SUCESFULLY DELETED', 'DELETION', event.name); this.eventSrc.next({ event, order: 'delete' }) }),
      catchError((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) }));

    return this.gdService.openConfirmDialog()
      .pipe(
        switchMap((res: any) => {
          return res ? backRequest : empty()
        }))
  }

  getEventById(id:string){
    let url = `${URL_SERVICES}event-by-id/${id}`;
    return this.http.get(url).pipe(
      map((res:any)=>{ return res.event}),
      catchError((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) })
      ) 
  }
  editionBanned(event: EventModel) {
    let today = new Date();
    if (event.startDate < new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0).getTime()) {
      event.editable = true;
      return true
    }
    if (DateOperationsService.dateComparison(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0), new Date(event.startDate))) {
      let eventStartDateTime;
      const startTime = event.startTime.split(':').reduce((acum, time, index) => { return index === 0 ? acum + Number(time) : (acum + (Number(time) / 60)) }, 0) * 3600000;
      eventStartDateTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 1).getTime() + startTime;
      if (new Date().getTime() > eventStartDateTime) {
        event.editable = true;
        return true
      }
      event.editable = false;
      return false
    }
    event.editable = false;
    return false
  }
}
