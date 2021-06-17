import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { LpDate } from 'lp-operations';
import { tap } from 'rxjs/operators';
import { Task } from '../../../../../../../../core/models/task.model';

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
  extraTimeProgress:number = 50;
  timeLineProgressSubs:Subscription;
  timelineProgress:number;
  constructor() { }
  ngOnChanges(changes:SimpleChanges){
    if(changes.taskSelected){
        this.timeLineProgressSubs ? this.timeLineProgressSubs.unsubscribe() : null;
        this.timeLineProgressSubs = this.calculateTimelineProgress().subscribe();
        this.extraTimeSubs ? this.extraTimeSubs.unsubscribe() : null;
        this.extraTimeSubs = this.calculateExtraTime().subscribe();
    }
  }
  calculateTimelineProgress (){
    const calculate = ()=>{
      if (this.taskSelected) {
        if (new Date().getTime() >= this.taskSelected.startDate) {
          if (this.taskSelected.validationTime) {
            this.timelineProgress = Math.round(((this.taskSelected.validationTime - this.taskSelected.startDate) * 100) / (this.taskSelected.endDate - this.taskSelected.startDate)) < 100 ? Math.ceil(((this.taskSelected.validationTime - this.taskSelected.startDate) * 100) / (this.taskSelected.endDate - this.taskSelected.startDate)) : 100
          }else{
            this.timelineProgress = Math.round(((new Date().getTime() - this.taskSelected.startDate) * 100) / (this.taskSelected.endDate - this.taskSelected.startDate)) < 100 ? Math.ceil(((new Date().getTime() - this.taskSelected.startDate) * 100) / (this.taskSelected.endDate - this.taskSelected.startDate)) : 100
          }
        }else{
          this.timelineProgress = 0;
        } 
      }else{
        this.timelineProgress = 0;
      }
    }
    calculate();
    return interval(500)
      .pipe(tap(() => {
        calculate();
    }));
  }
  calculateExtraTime():Observable<number>{
  const calculate = ()=>{
    let extraTimeMilisecs = 0;
    let extraTimeProgress=0;
    switch(this.taskSelected.status){
    case 'pending':
        if(this.taskSelected.extraTime){
          extraTimeMilisecs = this.taskSelected.extraTime;
          if(new Date().getTime() > this.taskSelected.endDate){
            extraTimeProgress = ((new Date().getTime() - this.taskSelected.endDate) * 100) / (extraTimeMilisecs);
          }  
        }
    break;
    case 'on review':
       if(this.taskSelected.extraTime){
          extraTimeMilisecs = this.taskSelected.extraTime + (new Date().getTime()-this.taskSelected.deliverDate);
          if(new Date().getTime() > this.taskSelected.endDate){
            extraTimeProgress = ((new Date().getTime() - this.taskSelected.endDate) * 100) / (extraTimeMilisecs);
          }
       }else{
         extraTimeMilisecs = new Date().getTime() - this.taskSelected.deliverDate;
         if (new Date().getTime() > this.taskSelected.endDate) {
           extraTimeProgress = ((new Date().getTime() - this.taskSelected.endDate) * 100) / ( extraTimeMilisecs);
         }
       }
    break;   
    case 'done':
        extraTimeMilisecs = this.taskSelected.extraTime;
        if(new Date().getTime() > this.taskSelected.endDate){
          extraTimeProgress = ((this.taskSelected.validationTime- this.taskSelected.endDate) * 100) / (extraTimeMilisecs);
        }
    break;    
    }
    this.extraTimeMilisec = extraTimeMilisecs;
    this.extraTimeProgress = extraTimeProgress > 100 ? 100 : Math.ceil(extraTimeProgress);
    this.extraTimeStringArray = LpDate.milisecsToString(this.extraTimeMilisec).filter((time,i)=>{ return !time.includes('seconds') })
       this.extraTimeStringArray = this.extraTimeStringArray.length === 0 ? ['< 1 minute'] : this.extraTimeStringArray ;
     };
     calculate();
    return interval(500)
    .pipe(tap(()=>{
      calculate();
    }));
  }
  ngOnDestroy(){
    this.extraTimeSubs.unsubscribe();
    this.timeLineProgressSubs.unsubscribe();
  };

}
