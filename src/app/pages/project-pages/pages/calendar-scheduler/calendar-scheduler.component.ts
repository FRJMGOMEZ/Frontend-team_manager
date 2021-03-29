import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CalendarSchedulerMonthInfoComponent } from './components/calendar-scheduler-month-info/calendar-scheduler-month-info.component';
import { CalendarSchedulerDayInfoComponent } from './components/calendar-scheduler-day-info/calendar-scheduler-day-info.component';
import { LpLocalStorage } from 'lp-operations';
import { MediaService } from '../../../../core/providers/media.service';
import { RoutesService } from '../../../../core/providers/routes.service';

@Component({
  selector: 'app-calendar-scheduler',
  templateUrl: './calendar-scheduler.component.html',
  styleUrls: ['./calendar-scheduler.component.scss']
})

export class CalendarSchedulerComponent implements  OnInit {
  dateFormat:string;
  selectedDate:Date;
  selectionDate:Date;
  selectedProject:string;
  arSubscription: Subscription;
  get infoComponent() { return this.dateFormat === 'month' ? CalendarSchedulerMonthInfoComponent : CalendarSchedulerDayInfoComponent }
  get searchBtnDisabled(){
    if (this.selectionDate && this.selectedDate) {
      return new Date(this.selectionDate).getTime() === new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 0, 0, 0, 0).getTime();
    }
    return true;
  }
  constructor(private router:Router,
              private ar:ActivatedRoute,
              public mdService:MediaService,
              private routesService:RoutesService,
              private cdr:ChangeDetectorRef){}
  ngOnInit(){
    this.init();
    this.routesService.setCurrentPage('calendar');
    this.arSubscription = this.ar.parent.parent.paramMap.subscribe((params)=>{
      if(this.selectedProject){
        this.init();
      }else{
        this.selectedProject = params.get('id');
      }
    })
  }

  init(){
    this.selectedDate = this.ar.snapshot.queryParamMap.get('date') ? new Date(this.ar.snapshot.queryParamMap.get('date')) : new Date();
    this.dateFormat = this.router.url.includes('day') ? 'day' : LpLocalStorage.get('state-data', 'date-format') || 'month';
    this.selectionDate = this.selectedDate;
    this.router.navigate([`calendar/${this.dateFormat}`], { relativeTo: this.ar.parent.parent, queryParams: { date: this.selectedDate }});
    this.cdr.detectChanges();
  }

  dateSelection(date:Date){
    this.selectionDate = date;
  }
  setFormat(format: string) {
    this.dateFormat = format;
    LpLocalStorage.set('state-data', this.dateFormat, 'date-format');
    this.router.navigate([format],{relativeTo:this.ar,queryParams:{date:this.selectedDate}})
  }
  searchByDate(date?:Date){
    this.selectedDate = date ? date : this.selectionDate;
    LpLocalStorage.set('state-data', this.selectedDate, 'date-selected');
    this.router.navigate([this.dateFormat], { relativeTo: this.ar, queryParams: { date: this.selectedDate } })
  }

  ngOnDestroy(){
  this.arSubscription.unsubscribe();
  }
}
