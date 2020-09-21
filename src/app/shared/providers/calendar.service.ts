import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { URL_SERVICES } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Day } from '../models/day.model';


@Injectable({
  providedIn: "root"
})

export class CalendarService {

  private eventsSource = new Subject<any>();
  public events$ = this.eventsSource.asObservable();

  private daySrc = new Subject<Day>();
  public day$ = this.daySrc.asObservable();


  constructor(private http: HttpClient) {}

  getDayByDate(date: number) {
    let url = `${URL_SERVICES}day-by-date/${date}`;
    return this.http.get(url).pipe(
      tap((res:any)=>{
        if(res.day){
             this.daySrc.next(res.day)
        }
      }),
      map((res: any) => {
        return res.day
      })
    );
  }

  getDayById(dayId:string){
    return this.http.get(`${URL_SERVICES}day-by-id/${dayId}`).pipe(map((res:any)=>{ return res.day}))
  }

  postDay(date:number){
    return  this.http.post(`${URL_SERVICES}day`,{date}).pipe(
      tap((res:any)=>{  this.daySrc.next(res.day)}),
      map((res:any)=>{
      return res.day;
    }))
  }

  //////// CRUD WEEK LOGIC ///////

 /*  getWeekByDate(date:number) {
    let url = `${URL_SERVICES}week/${date}`;
    return this.http.get(url, { headers:this._userServices.headers }).pipe(
      map((res: any) => {
        if(res.week === null){
          return 'no-week'
        }else{
          this.currentWeek = res.week;
          return res.week
        }
      })
    );
  }

  getWeekById(id: string) {
    let url = `${URL_SERVICES}searchById/week/${id}`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(
      map((res: any) => {
        this.currentWeek = res.week;
      })
    );
  } */

  /* 
  } */

 


  /* checkWeekDay(day?: number, week?: Week) {
    return new Promise((resolve) => {
      let dayId;
      if(!week){
        week = this.currentWeek
      }
      if (day >= 0) {
        switch (day) {
          case 1:
            dayId = week.monday._id;
            resolve(dayId);
            break;
          case 2:
            dayId = week.tuesday._id;
            resolve(dayId);
            break;
          case 3:
            dayId = week.wednesday._id;
            resolve(dayId);
            break;
          case 4:
            dayId = week.thursday._id;
            resolve(dayId);
            break;
          case 5:
            dayId = week.friday._id;
            resolve(dayId);
            break;
          case 6:
            dayId = week.saturday._id;
            resolve(dayId);
            break;
          case 0:
            dayId = week.sunday._id;
            resolve(dayId);
            break;
          default:
            dayId = week.monday._id;
            resolve(dayId);
            break;
        }
      } else {
        let today = new Date();
        switch (today.getDay()) {
          case 1:
            dayId = week.monday._id;
            resolve(dayId);
            break;
          case 2:
            dayId = week.tuesday._id;
            resolve(dayId);
            break;
          case 3:
            dayId = week.wednesday._id;
            resolve(dayId);
            break;
          case 4:
            dayId = week.thursday._id;
            resolve(dayId);
            break;
          case 5:
            dayId = week.friday._id;
            resolve(dayId);
            break;
          case 6:
            dayId = week.saturday._id;
            resolve(dayId);
            break;
          case 0:
            dayId = week.sunday._id;
            resolve(dayId);
            break;
          default:
            dayId = week.monday._id;
            resolve(dayId);
            break;
        }
      }
    });
  }

  //// DAY CRUD LOGIC ////

 

  getDayById(id: string) {
    let url = `${URL_SERVICES}searchById/day/${id}`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(
      map((res: any) => {
        if(this.currentDay){
          this.userOut().then(()=>{
            this.currentDay=res.day
            return
          })
        }else{
          this.currentDay = res.day;
          return
        }
      })
    );
  }

  /////////// DAY SOCKET LOGIC //////////

  userIn() {
    return new Promise((resolve, reject) => {
      let payload = { user: this._userServices.userOnline._id, room: this.currentDay._id }
      this.socket.emit('userIn', payload, () => {
        resolve()
      })
    })
  }
  userOut() {
    return new Promise((resolve, reject) => {
      let payload = { user: JSON.parse(localStorage.getItem('user'))._id, room: this.currentDay._id }
      this.socket.emit('userOut', payload)
      resolve()
    })
  }

  //////////// CRUD EVENTS LOGIC ///////////

  getEventsInProject(projectId: string) {
    let url = `${URL_SERVICES}events/projects/${projectId}`
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      return res.events
    }))
  }

  getPermanentEvents() {
    let url = `${URL_SERVICES}permanentEvents`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.permanentEvents = _.sortBy(res.events,(event)=>{
        return - new Date(event.startDate).getTime();
      });
    }))
  }

  getEventById(eventId: string) {
    let url = `${URL_SERVICES}searchById/event/${eventId}`;
    return this.http.get(url, { headers:this._userServices.headers }).pipe(
      map((res: any) => {
        return res.event
      })
    );
  } */
 /*  postEvent(event: EventModel, dayId: string, limitDate: number = 8630000000000000) {
    let url = `${URL_SERVICES}event/${dayId}/${String(limitDate)}`;
    return this.http.post(url, event, { headers: this._userServices.headers }).pipe(
      map((res: any) => {
        let eventOrder = new EventOrder(res.event, 'post')
        this.eventsSource.next(eventOrder)
        if (res.event.permanent) {
          this.permanentEvents.push(res.event);
          this.permanentEvents = _.sortBy(this.permanentEvents, (eventToSort) => {
            return - new Date(eventToSort.startDate).getTime()
          })
          this.permanentEvents.reverse()
          this.emitEvent(eventOrder)
        } else {
          this.emitEvent()
        }
      })
    );
  } */

 /*  putEvent(eventId: string, event: any) {
    let url = `${URL_SERVICES}event/${eventId}`;
    return this.http.put(url, event, { headers: this._userServices.headers }).pipe(
      map((res: any) => {
        let eventOrder = new EventOrder(res.event, 'put')
        this.eventsSource.next(eventOrder)
        if (res.event.permanent) {
          if (this.permanentEvents.indexOf(res.event) >= 0) {
            this.permanentEvents.forEach((event, index) => {
              if (event._id === res.event._id) {
                this.permanentEvents[index] = res.event
              }
            })
          } else {
            this.permanentEvents.push(res.event);
            this.permanentEvents = _.sortBy(this.permanentEvents, (event: EventModel) => {
              return - new Date(event.startDate).getTime()
            })
          }
          this.emitEvent(eventOrder)
        } else {
          this.emitEvent()
        }
      })
    );
  }

  pullEvent(dayId: string, eventId: string) {
    let url = `${URL_SERVICES}pullEvent/${dayId}/${eventId}`
    return this.http.put(url, event, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.eventsSource.next()
      if (res.event.permanent) {
        if (res.event.permanent) {
          this.permanentEvents.forEach((event, index) => {
            if (event._id === res.event._id) {
              this.permanentEvents[index] = res.event
            }
          })
        }
        let eventOrder = new EventOrder(res.event, 'put')
        this.emitEvent(eventOrder)
      } else {
        this.emitEvent()
      }

    }))
  }

  deleteEvent(eventId: string) {
    let url = `${URL_SERVICES}event/${eventId}`
    return this.http.delete(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.eventsSource.next()
      if (res.event.permanent) {
        this.permanentEvents = _.sortBy(this.permanentEvents.filter((event) => { return event._id != res.event._id }), (eventToSort: EventModel) => {
          return - new Date(eventToSort.startDate).getTime()
        })
        let eventOrder = new EventOrder(res.event, 'delete')
        this.emitEvent(eventOrder)
      } else {
        this.emitEvent()
      }
    }))
  }

  checkPermanentEvents(event: EventModel) {
    let url = `${URL_SERVICES}checkPermanentEvents`
    return this.http.put(url, event, { headers: this._userServices.headers }).pipe(map((res: any) => {
      return res.day
    }))
  }
  
   /////// EVENTS SOCKET LOGIC /////
  emitEvent(eventOrder?:EventOrder) {
    let payload = {eventOrder,room:this.currentDay._id}
     this.socket.emit('event',payload)
  }

  eventSocket() {
    return this.socket.fromEvent('event').pipe(map((payload:any)=>{
      if (payload.room === this.currentDay._id) {
        if (this._calendarModalController.hidden != 'hidden') {
          this._calendarModalController.hideModal()
        }
        if (this._eventModalController.hidden != 'hidden') {
          this._calendarModalController.hideModal()
        }
        this.eventsSource.next()
      }
      if (payload.eventOrder) {
        if (payload.eventOrder.order === 'post') {
          this.permanentEvents.push(payload.eventOrder.event);
          this.permanentEvents = _.sortBy(this.permanentEvents,(eventToSort:EventModel)=>{
                return -new Date(eventToSort.startDate).getTime()
          })
        } else if (payload.eventOrder.order === 'put') {
          if(this.permanentEvents.indexOf(payload.eventOrder.event)>=0){
            this.permanentEvents.forEach((event, index) => {
              if (event._id === payload.eventOrder.event._id) {
                this.permanentEvents[index] = payload.eventOrder.event
              }
            })
          }else{
            this.permanentEvents.push(payload.eventOrder.event);
            this.permanentEvents = _.sortBy(this.permanentEvents,(event:EventModel)=>{
              return -new Date(event.startDate).getTime()
            })
          }
        } else if (payload.eventOrder.order === 'delete') {
          this.permanentEvents = _.sortBy(this.permanentEvents.filter((event: EventModel) => { return event._id != payload.eventOrder.event._id }),(eventToSort)=>{
             return -new Date(eventToSort.startDate).getTime()
          }) 
        }
      }
    }))} */


 
}
