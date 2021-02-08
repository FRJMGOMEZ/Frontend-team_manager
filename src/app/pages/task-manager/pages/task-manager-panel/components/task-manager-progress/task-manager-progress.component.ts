import { Component, Input, ChangeDetectorRef, SimpleChanges, OnChanges } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { Task } from '../../../../../../core/models/task.model';
import { LpDate } from 'lp-operations';


@Component({
  selector: 'app-task-manager-progress',
  templateUrl: './task-manager-progress.component.html',
  styleUrls: ['./task-manager-progress.component.scss']
})
export class TaskManagerProgressComponent implements OnChanges {

  @Input() taskSelected:Task
  extraTimeStringArray: string[];
  extraTimeMilisec:number
  extraTimeSubs:Subscription
  constructor(private cdr:ChangeDetectorRef) { }
  ngOnChanges(changes:SimpleChanges){
    if(changes.taskSelected){
      timer().subscribe(()=>{
        this.extraTimeSubs ? this.extraTimeSubs.unsubscribe() : null;
        this.extraTimeSubs = this.extraTimeListenner()
        this.extraTimeStringArray = LpDate.milisecsToString(this.extraTimeMilisec);
        this.cdr.detectChanges();
      })
    }
  }
  get timelineProgress (){
    return this.taskSelected ? new Date().getTime() >= this.taskSelected.startDate ? 
    Math.round(((new Date().getTime() - this.taskSelected.startDate) * 100) / (this.taskSelected.endDate - this.taskSelected.startDate)) < 100 ? Math.ceil(((new Date().getTime() - this.taskSelected.startDate) * 100) / (this.taskSelected.endDate - this.taskSelected.startDate)) : 100: 0 : 0;
  }
  get extraTimeProgress(){
    this.extraTimeMilisec= this.taskSelected.extraTime ? this.taskSelected.extraTime : new Date().getTime() - this.taskSelected.deliverDate; 
    return this.taskSelected.endDate <= new Date().getTime() ? this.taskSelected.extraTime ? (new Date().getTime() - this.taskSelected.deliverDate * 100) / this.extraTimeMilisec : 0 : 0;
  }

  extraTimeListenner(){
    return interval(30000).subscribe(()=>{
        this.extraTimeStringArray = LpDate.milisecsToString(this.extraTimeMilisec);
      })
  }
  ngOnDestroy(){
    this.extraTimeSubs.unsubscribe()
  };

}
