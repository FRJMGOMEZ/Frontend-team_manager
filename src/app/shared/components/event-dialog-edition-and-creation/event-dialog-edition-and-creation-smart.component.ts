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
           if(this.data && this.data.eventId){
                 this.getEvent(this.data.eventId)
                 this.localStorageService.set('state-data',this.data.eventId,'event-on-screen')
           } 
        this.selectedProject = this.localStorageService.get('state-data', 'project')
        this.getPanelData(this.selectedProject) 
        this.prevDialog = this.data ? this.data.prevDialog : undefined  
    }
    getEvent(eventId:string) {
        this.eventsService.getEventById(eventId).subscribe((eventDb: EventModel) => {
            let eventSelected = OOService.copyObject(eventDb);
            eventSelected.participants = (eventSelected.participants as User[]).map((eachParticipant: User) => { return eachParticipant._id })
            eventSelected.user = (eventSelected.user as User)._id;
            eventSelected.project = eventSelected.project as Project;
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
            this.userService.getUsers(0,999999).subscribe((users: User[]) => {
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
    putEvent(data:{eventChanges: { [key: string]: any },id:string}) {
        this.eventsService.putEvent(data.eventChanges, data.id).subscribe((event)=>{
            this.eventSelected = OOService.mergeObjects(event,data.eventChanges);
        })
    }
    back(){
      this.dialogRef.close({prevDialog:this.prevDialog})
    }
    closeDialog(){
        this.dialogRef.close()
        this.localStorageService.remove('state-data', 'event-on-screen')
    }
}