import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../shared/providers/project.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CalendarSchedulerMonthInfoComponent } from './shared/components/calendar-scheduler-month-info/calendar-scheduler-month-info.component';
import { CalendarSchedulerDayInfoComponent } from './shared/components/calendar-scheduler-day-info/calendar-scheduler-day-info.component';
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
  selectionDate:Date
  selectedProjectSubs:Subscription
  constructor(
              private cdr:ChangeDetectorRef, 
              private projectService:ProjectService,
              private deviceDetectorService:DeviceDetectorService,
              private _bottomSheet: MatBottomSheet,
              private localStorageService: LocalStorageService 
              
              ){}
  ngOnInit(){
    this.setFormat(this.localStorageService.get('state-data', 'date-format') || 'month')
    this.selectedDate = this.localStorageService.get('state-data', 'date-selected') ? new Date(this.localStorageService.get('state-data', 'date-selected')) : new Date();
    this.selectionDate = this.selectedDate;
    this.selectedProject = this.projectService.selectedProject._id;
    this.selectedProjectSubs = this.projectService.selectedProject$.subscribe((project:string) => {
        this.selectedProject = project ;
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
    this.selectionDate = date;
  }

  formatSelection(format:string){
    this.dateFormat = format;
  }

  openInfo() {
    this._bottomSheet.open( this.dateFormat === 'month' ? CalendarSchedulerMonthInfoComponent : CalendarSchedulerDayInfoComponent);
  }
  setFormat(format: string) {
    this.dateFormat = format;
    this.localStorageService.set('state-data', this.dateFormat, 'date-format')
  }
  setSearchBtnDisabled() {
    if(this.selectionDate && this.selectedDate){
      return new Date(this.selectionDate).getTime() === new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 0, 0, 0, 0).getTime();
    }
    return true;
  }
  searchByDate(){
    this.selectedDate = this.selectionDate;
    this.localStorageService.set('state-data', this.selectedDate, 'date-selected')
  }
}
