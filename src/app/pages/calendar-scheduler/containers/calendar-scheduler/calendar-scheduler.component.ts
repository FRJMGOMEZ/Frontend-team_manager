import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProjectService } from '../../../../core/shared/providers/project.service';
import { LocalStorageService } from '../../../../library/providers/local-storage.service';
import { CalendarSchedulerMonthInfoComponent } from '../../components/calendar-scheduler-month-info/calendar-scheduler-month-info.component';
import { CalendarSchedulerDayInfoComponent } from '../../components/calendar-scheduler-day-info/calendar-scheduler-day-info.component';
import { Router, ActivatedRoute } from '@angular/router';


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
  urlHasQuerys:boolean = false;
  constructor(
              private cdr:ChangeDetectorRef, 
              private projectService:ProjectService,
              private deviceDetectorService:DeviceDetectorService,
              private _bottomSheet: MatBottomSheet,
              private localStorageService: LocalStorageService,
              private router:Router,
              private ar:ActivatedRoute
              
              ){}
  ngOnInit(){
    this.selectedDate = this.localStorageService.get('state-data', 'date-selected') ? new Date(this.localStorageService.get('state-data', 'date-selected')) : new Date();
    this.selectionDate = this.selectedDate;
    this.selectedProject = this.projectService.selectedProject._id;
    this.dateFormat = this.localStorageService.get('state-data', 'date-format') || 'month';
    this.selectedProjectSubs = this.projectService.selectedProject$.subscribe((project:string) => {
        this.selectedProject = project ;
        this.navigateToChild()
    })
    
    this.ar.queryParamMap.subscribe((querys)=>{
        querys.get('selectedDate') ? this.urlHasQuerys = true : null;
    })
    this.navigateToChild();
  }

  dateSelection(date:Date){
    this.selectionDate = date;
  }
  setFormat(format: string) {
    this.dateFormat = format;
    this.localStorageService.set('state-data', this.dateFormat, 'date-format');
    this.navigateToChild();
  }
  searchByDate(date?:Date){
    this.selectedDate = date ? date : this.selectionDate;
    this.localStorageService.set('state-data', this.selectedDate, 'date-selected');
    this.navigateToChild();
  }

  navigateToChild(){
    this.router.navigate([this.dateFormat],{relativeTo: this.urlHasQuerys ? this.ar.parent : this.ar,queryParams:{selectedDate:this.selectedDate,selectedProject:this.selectedProject}})
  }

  isDesktop() {
    return this.deviceDetectorService.isDesktop();
  }

  setSearchBtnDisabled() {
    if (this.selectionDate && this.selectedDate) {
      return new Date(this.selectionDate).getTime() === new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 0, 0, 0, 0).getTime();
    }
    return true;
  }

  openInfo() {
    this._bottomSheet.open(this.dateFormat === 'month' ? CalendarSchedulerMonthInfoComponent : CalendarSchedulerDayInfoComponent);
  }

  ngOnDestroy() {
    this.selectedProjectSubs ? this.selectedProjectSubs.unsubscribe(): null;
  }
}
