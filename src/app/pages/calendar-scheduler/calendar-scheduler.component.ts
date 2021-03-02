import { Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router, ActivatedRoute } from '@angular/router';
import { CalendarSchedulerMonthInfoComponent } from './components/calendar-scheduler-month-info/calendar-scheduler-month-info.component';
import { CalendarSchedulerDayInfoComponent } from './components/calendar-scheduler-day-info/calendar-scheduler-day-info.component';
import { LocalStorageService } from '../../library/providers/local-storage.service';
import { ProjectService } from '../../core/providers/project.service';
import { Project } from '../../core/models/project.model';
import { MediaService } from '../../core/providers/media.service';


@Component({
  selector: 'app-calendar-scheduler',
  templateUrl: './calendar-scheduler.component.html',
  styleUrls: ['./calendar-scheduler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class CalendarSchedulerComponent implements  OnInit, OnDestroy {

  get infoComponent() {return this.dateFormat === 'month' ? CalendarSchedulerMonthInfoComponent : CalendarSchedulerDayInfoComponent}
  selectedProject: string | undefined
  dateFormat:string = 'month'
  selectedDate:Date
  selectionDate:Date
  selectedProjectSubs:Subscription
  urlHasQuerys:boolean = false;
  constructor(private projectService:ProjectService,
              private deviceDetectorService:DeviceDetectorService,
              private localStorageService: LocalStorageService,
              private router:Router,
              private ar:ActivatedRoute,
              public mdService:MediaService){}
  ngOnInit(){
    this.ar.queryParamMap.subscribe((querys) => {
      querys.get('selectedDate') ? this.urlHasQuerys = true : null;
    })
    this.selectedProjectSubs = this.projectService.selectedProject$.subscribe((project: Project) => {
      this.selectedProject = project._id;
      this.navigateToChild()
    })
    this.selectedDate = this.localStorageService.get('state-data', 'date-selected') ? new Date(this.localStorageService.get('state-data', 'date-selected')) : new Date();
    this.selectionDate = this.selectedDate;
    this.dateFormat = this.localStorageService.get('state-data', 'date-format') || 'month';
    /* FIXME */
    this.selectedProject = this.projectService.selectedProject._id; ;
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

  ngOnDestroy() {
    this.selectedProjectSubs ? this.selectedProjectSubs.unsubscribe(): null;
  }
}
