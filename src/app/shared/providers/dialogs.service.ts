import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { EventDialogSmartComponent } from '../components/event-dialog/event-dialog-smart.component';
import { ProjectDialogSmartComponent } from '../components/project-dialog/project-dialog-smart-component';
import { EventDialogEditionAndCreationSmartComponent } from '../components/event-dialog-edition-and-creation/event-dialog-edition-and-creation-smart.component';
import { EventsListDialogSmartComponent } from '../components/events-list-dialog/events-list-dialog-smart.component';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  eventId:string;
  eventsDate:number;
  project:Project

  constructor(private dialog: MatDialog) { }

  openEventInfoDialog(eventId:string,prevDialog?:string){
    this.eventId = eventId;
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.maxHeight='500px'
    dialog.data = prevDialog ? {eventId,prevDialog} : {eventId}
    let dialogRef: MatDialogRef<any> = this.dialog.open(EventDialogSmartComponent, dialog)
    let subs = dialogRef.afterClosed().subscribe((data)=>{
      if (data) {
        if (data.prevDialog) {
          this.checkPrevDialog(data.prevDialog)
        }else if(data.nextDialog){
          this.checkNextDialog(data.nextDialog,data.dataRequired,'eventInfo')
        }
      }
      subs.unsubscribe()
    })
  }

  openEventsListInfoDialog(date:number, prevDialog?:string){
    console.log({date})
    this.eventsDate = date;
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.data = prevDialog ? { date, prevDialog }: {date};
    dialog.width = '300px'
    let dialogRef: MatDialogRef<any> = this.dialog.open(EventsListDialogSmartComponent, dialog)
    let subs = dialogRef.afterClosed().subscribe((data)=>{
      if(data){
          if(data.prevDialog){
            this.checkPrevDialog(data.prevDialog)
          }else if(data.nextDialog){
             this.checkNextDialog(data.nextDialog,data.eventId,'eventsList')
          }
      }
      subs.unsubscribe()
    })
  }

  openEditCreateEventDialog(eventId?: string, prevDialog?: string) {
    const projectDialog = new MatDialogConfig();
    projectDialog.disableClose = true;
    projectDialog.autoFocus = true;
    projectDialog.data = eventId ? prevDialog ? {eventId,prevDialog}: {eventId} : null;
    let dialogRef = this.dialog.open(EventDialogEditionAndCreationSmartComponent, projectDialog);
    let subs = dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        if (data.prevDialog) {
          this.checkPrevDialog(data.prevDialog)
        } else if (data.nextDialog) {
          this.checkNextDialog(data.nextDialog, data.eventId, 'editCreateEvent')
        }
      }
      subs.unsubscribe()
    })
  }
  checkPrevDialog(prevDialog:string){
     switch(prevDialog){
       case 'eventsList':this.openEventsListInfoDialog(this.eventsDate)
        break;
       case 'eventInfo': this.openEventInfoDialog(this.eventId);
       break;
       case 'editCreateEvent': this.openEditCreateEventDialog(this.eventId);
       break;
      }
  }
  checkNextDialog(nextDialog:string,dataRequired:any,prevDialog:string){
    switch (nextDialog) {
      case 'eventsList': typeof dataRequired === 'number' ? this.openEventsListInfoDialog(dataRequired,prevDialog):null
        break;
      case 'eventInfo': typeof dataRequired === 'string' ? this.openEventInfoDialog(dataRequired,prevDialog): null
        break;
      case 'editCreateEvent': typeof dataRequired === 'string' ? this.openEditCreateEventDialog(dataRequired,prevDialog):null;
        break;
    }
  }

  openEditProjectDialog(project: Project) {
    this.project = project;
    const projectDialog = new MatDialogConfig();
    projectDialog.disableClose = true;
    projectDialog.autoFocus = true;
    projectDialog.data = { project };
    this.dialog.open(ProjectDialogSmartComponent, projectDialog);
  }

  openPostProjectDialog() {
    const projectDialog = new MatDialogConfig();
    projectDialog.disableClose = true;
    projectDialog.autoFocus = true;
    let dialogRef = this.dialog.open(ProjectDialogSmartComponent, projectDialog);

  }
  
}
