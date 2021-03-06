import { Component, Input, ChangeDetectorRef, SimpleChanges, OnChanges } from '@angular/core';
import { interval, Subscription, timer, merge, empty, Observable } from 'rxjs';
import { Task } from '../../../../../../core/models/task.model';
import { LpDate } from 'lp-operations';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-task-manager-progress',
  templateUrl: './task-manager-progress.component.html',
  styleUrls: ['./task-manager-progress.component.scss']
})
export class TaskManagerProgressComponent implements OnChanges {

  @Input() taskSelected:Task;
  extraTimeStringArray: string[];
  extraTimeMilisec:number;
  extraTimeSubs:Subscription;
  extraTimeProgress:number;
  constructor(private cdr:ChangeDetectorRef) { }
  ngOnChanges(changes:SimpleChanges){
    if(changes.taskSelected){
      timer().subscribe(()=>{
        this.extraTimeSubs ? this.extraTimeSubs.unsubscribe() : null;
        this.extraTimeSubs = this.calculateExtraTime().subscribe();
        this.cdr.detectChanges();
      })
    }
  }
  get timelineProgress (){
    return this.taskSelected ? new Date().getTime() >= this.taskSelected.startDate ? 
    Math.round(((new Date().getTime() - this.taskSelected.startDate) * 100) / (this.taskSelected.endDate - this.taskSelected.startDate)) < 100 ? Math.ceil(((new Date().getTime() - this.taskSelected.startDate) * 100) / (this.taskSelected.endDate - this.taskSelected.startDate)) : 100: 0 : 0;
  }
  calculateExtraTime():Observable<number>{
     const calculate = ()=>{
      if(this.taskSelected.status === 'on review'){
        this.extraTimeMilisec = this.taskSelected.extraTime ? this.taskSelected.extraTime + (new Date().getTime() - this.taskSelected.deliverDate) : (new Date().getTime() - this.taskSelected.deliverDate);
      } else{
        this.extraTimeMilisec = this.taskSelected.extraTime ? this.taskSelected.extraTime : new Date().getTime() - this.taskSelected.deliverDate;
      }
       this.extraTimeProgress = this.taskSelected.endDate <= new Date().getTime() ? this.taskSelected.extraTime ? (new Date().getTime() - this.taskSelected.deliverDate * 100) / this.extraTimeMilisec : 0 : 0;
       this.extraTimeStringArray = LpDate.milisecsToString(this.extraTimeMilisec);
     };
     calculate();
    return interval(500)
    .pipe(tap(()=>{
      calculate();
    }));
  }
  ngOnDestroy(){
    this.extraTimeSubs.unsubscribe()
  };

}
