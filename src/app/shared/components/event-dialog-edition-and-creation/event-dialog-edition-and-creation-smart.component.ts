import { Component, Inject } from '@angular/core';
import { User } from '../../models/user.model';
import { EventModel } from '../../models/event.model';
import { ProjectService } from '../../providers/project.service';
import { UserServices } from '../../providers/user.service';
import { EventsService } from '../../providers/events.service';
import { AuthService } from '../../../auth/shared/providers/auth.service';
import { LocalStorageService } from '../../../library/providers/local-storage.service';
import { Project } from '../../models/project.model';
import { OOService } from '../../../library/providers/objects-operations.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-event-dialog-edition-and-creation-smart',
    template: `
         <app-event-dialog-edition-and-creation [selectedProject]="selectedProject" [projectParticipants]="projectParticipants" (postEvent)="postEvent($event)" (putEvent)="putEvent($event)" [event]="eventSelected" (close)="closeDialog()" [prevDialog]="prevDialog" (back)="back()"> </app-event-dialog-edition-and-creation>
    `,
})
export class EventDialogEditionAndCreationSmartComponent {
    projectParticipants: User[] = []
    eventSelected: EventModel
    selectedProject:string
    prevDialog:string
    constructor(
        private projectService: ProjectService,
        private userService: UserServices,
        private eventsService: EventsService,
        private authService: AuthService,
        private localStorageService: LocalStorageService,
        private dialogRef: MatDialogRef<EventDialogEditionAndCreationSmartComponent>,
        @Inject(MAT_DIALOG_DATA) private data) { }
    ngOnInit() {
           if(this.data && this.data.event){
                 this.getEvent(this.data.event)
           } 
        this.selectedProject = this.localStorageService.get('state-data', 'project')
        this.getPanelData(this.selectedProject) 
        this.prevDialog = this.data.prevDialog;    
    }
    getEvent(eventId:string) {
        this.eventsService.getEventById(eventId).subscribe((eventDb: EventModel) => {
            let eventSelected = OOService.copyObject(eventDb);
            eventSelected.participants = (eventSelected.participants as User[]).map((eachParticipant: User) => { return eachParticipant._id })
            eventSelected.user = (eventSelected.user as User)._id;
            eventSelected.project = eventSelected.project ? (eventSelected.project as Project)._id : '';
            this.eventSelected = eventSelected;
            this.localStorageService.set('state-data', this.eventSelected._id, 'event')
        })
    }
    getPanelData(selectedProject?:string) {
        if (selectedProject) {
            this.projectService.getParticipants(selectedProject).subscribe((participants: User[]) => {
                this.projectParticipants = participants;
            })
        } else {
            this.userService.getUsers().subscribe((users: User[]) => {
                users.push(this.authService.userOnline);
                this.projectParticipants = users;
            })
        }
    }
    postEvent(event: EventModel) {
        this.eventsService.postEvent(event).subscribe((event: EventModel) => {
            this.eventSelected = OOService.copyObject(event);
        })
    }

    //TODO: EDIT PUT METHOD
    putEvent(event: EventModel) {
        console.log({event})
        /* this.eventsService.putEvent(event).subscribe((event: EventModel) => {
            this.eventSelected = OOService.copyObject(event);
        }) */
    }
    back(){
      this.dialogRef.close({prevDialog:this.prevDialog})
    }
    closeDialog(){
        this.dialogRef.close()
    }
}