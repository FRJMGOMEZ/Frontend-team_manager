import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { TaskModel } from '../../../../../shared/models/task.model';
import { DateOperationsService } from '../../../../../library/providers/date-operations.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-task-manager-progress',
  templateUrl: './task-manager-progress.component.html',
  styleUrls: ['./task-manager-progress.component.scss']
})
export class TaskManagerProgressComponent {

  @Input() taskSelected:TaskModel
  extraTimeString: string;
  extraTimeMilisec:number
  extraTimeSubs:Subscription
  constructor(private cdr:ChangeDetectorRef) { }
  ngAfterViewInit(){
    this.extraTimeString = DateOperationsService.milisecsToString(this.extraTimeMilisec);
    this.extraTimeSubs = this.extraTimeListenner()
  }
  get timelineProgress (){
    return this.taskSelected ? new Date().getTime() > this.taskSelected.startDate ? Math.round(((new Date().getTime() - this.taskSelected.startDate) * 100) / (this.taskSelected.endDate - this.taskSelected.startDate)) : 0 : 0;
  }
  get extraTimeProgress(){
    this.extraTimeMilisec= this.taskSelected.extraTime ? this.taskSelected.extraTime : new Date().getTime() - this.taskSelected.deliverDate; 
    return this.taskSelected.endDate <= new Date().getTime() ? Math.round(new Date().getTime() * 100 / this.extraTimeMilisec) : 0
  }

  extraTimeListenner(){
    return interval(30000).subscribe(()=>{
        this.extraTimeString = DateOperationsService.milisecsToString(this.extraTimeMilisec);
      })
  }
  ngOnDestroy(){
    this.extraTimeSubs.unsubscribe()
  };

}
