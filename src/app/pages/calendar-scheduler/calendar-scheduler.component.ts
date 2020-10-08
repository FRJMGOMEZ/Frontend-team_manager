import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { DialogsService } from '../../shared/providers/dialogs.service';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../shared/providers/project.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MatTabGroup } from '@angular/material/tabs';


@Component({
  selector: 'app-calendar-scheduler',
  templateUrl: './calendar-scheduler.component.html',
  styleUrls: ['./calendar-scheduler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class CalendarSchedulerComponent implements  OnInit, OnDestroy {

  @ViewChild('tabGroup') tabGroup :MatTabGroup
  selectedProject: string | undefined
  dateFormat:string = 'month'
  selectedDate:Date
  selectedProjectSubs:Subscription
  constructor(
              private cdr:ChangeDetectorRef, 
              private projectService:ProjectService,
              private deviceDetectorService:DeviceDetectorService
              
              ){}
  ngOnInit(){
    this.selectedProject = this.projectService.selectedProject._id;
    this.selectedProjectSubs = this.projectService.selectedProject$.subscribe((project:string) => {
        /// project assignation //
        this.selectedProject = project ;
 
        /// trigger change detector //
        this.cdr.detectChanges()
    })
  }
  isDesktop(){
    return this.deviceDetectorService.isDesktop();
  }
  ngOnDestroy(){
    this.selectedProjectSubs.unsubscribe();
  }
  dateSelection(date:Date){
    this.selectedDate = date;
    this.tabGroup  ? (this.tabGroup.selectedIndex = 1):null;
  }

  formatSelection(format:string){
    this.dateFormat = format;
  }
}
