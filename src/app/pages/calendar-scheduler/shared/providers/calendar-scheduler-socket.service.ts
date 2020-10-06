import { Injectable } from '@angular/core';
import { WebSocketsService } from '../../../../shared/providers/web-sockets.service';
import { EventsService } from '../../../../shared/providers/events.service';
import { ProjectService } from '../../../../shared/providers/project.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarSchedulerSocketService {
  constructor(
    private wsService: WebSocketsService,
    private eventService: EventsService,
    private projectService:ProjectService) { }
  joinRoom(selectedDate: Date,selectedProject:string) {
    this.wsService.emit(`user-in-calendar`)
    this.eventService.listenningEventSockets(/* this.createRange(selectedDate) */)
  }

  
  leaveRoom(){
    this.wsService.emit('leave-room')
  }
}
