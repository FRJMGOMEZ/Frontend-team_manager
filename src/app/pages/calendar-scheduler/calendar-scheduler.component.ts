import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DialogsService } from '../../shared/providers/dialogs.service';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../shared/providers/project.service';
import { LocalStorageService } from '../../library/providers/local-storage.service';


@Component({
  selector: 'app-calendar-scheduler',
  templateUrl: './calendar-scheduler.component.html',
  styleUrls: ['./calendar-scheduler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class CalendarSchedulerComponent implements  OnInit, OnDestroy {
  selectedProject: string | undefined
  dateFormat:string = 'month'
  selectedDate:Date
  selectedProjectSubs:Subscription
 
  constructor(
              private dialogsService:DialogsService, 
              private cdr:ChangeDetectorRef, 
              private projectService:ProjectService,
              private localStorageService:LocalStorageService){}
  ngOnInit(){
    this.selectedProjectSubs = this.projectService.selectedProject$.subscribe((project:string) => {
        /// project assignation //
        this.selectedProject = project ;
 
        /// trigger change detector //
        this.cdr.detectChanges()
    })
    if(!this.selectedProject){
        this.projectService.selectProject(this.localStorageService.get('state-data','project'))
    }
  }
  postEvent(){
    this.dialogsService.openEditCreateEventDialog();
  }


  ngOnDestroy(){
    this.selectedProjectSubs.unsubscribe();
  }
  dateSelection(date:Date){
    this.selectedDate = date;
    this.cdr.detectChanges()
  }
}
