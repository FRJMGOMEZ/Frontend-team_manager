

import { Component, OnInit,OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HourModel } from '../../../../core/models/hour.model';
import { Task } from '../../../../core/models/task.model';

import { ActivatedRoute } from '@angular/router';
import { CalendarSchedulerComponent } from '../../calendar-scheduler.component';
import { TaskService } from '../../../../core/providers/task.service';
import { DialogsService } from '../../../../core/providers/dialogs.service';
import { LpObject } from '../../../../../../projects/lp-operations/src/lp-object';

@Component({
    selector: 'app-calendar-scheduler-day-smart',
    template: `
    <app-calendar-scheduler-day 
    [hours]="hours" 
    [tasks]="tasks" 
    [selectedDate]="selectedDate"
     (checkTask)="checkTask($event)" 
     (putTask)="putTask($event)" 
    (dateSelection)="dateSelection($event)"
     > </app-calendar-scheduler-day>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarSchedulerDaySmartComponent implements OnInit, OnDestroy {

    hoursRange = { start: 7, end: 24 };
    selectedDate: Date;
    timeRange: any[];
    selectedProject: string;
    hours: HourModel[] = [];
    tasks:Task[] = [];
    taskSubscription: Subscription;
    constructor(private taskService: TaskService,
        private dialogService: DialogsService,
        private cdr: ChangeDetectorRef,
        private ar:ActivatedRoute,
        private calendarSchedulerComponent:CalendarSchedulerComponent) { }
    ngOnInit(): void {
        this.ar.queryParamMap.subscribe((querys)=>{
            this.selectedDate = new Date(querys.get('selectedDate'));
            this.selectedProject = querys.get('selectedProject');
            this.init();
        })
        this.taskSubscription = this.taskService.task$.subscribe(() => {
            this.init()
        })
    }
    init() {
        this.hours = [];
        for (let i = this.hoursRange.start; i < this.hoursRange.end; i++) {
            this.hours.push(new HourModel(new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), i, 0, 0, 0)))
        }
        this.timeRange = [this.selectedDate.getTime(), this.selectedDate.getTime() + 86400000]
        this.taskService.getTasks('day',  LpObject.toQueryString({project:this.selectedProject,from:this.timeRange[0],to:this.timeRange[1]})).pipe(map((res:any)=>{return res.tasks})).subscribe((tasks: Task[]) => {
            this.tasks = [...tasks];
            this.cdr.detectChanges()
        })
    }

    dateSelection(date:Date){
    this.calendarSchedulerComponent.searchByDate(date)
    }
   
    checkTask(taskId: string) {
        this.dialogService.openTaskInfoDialog(taskId)
    }

    putTask(taskId: string) {
        this.dialogService.openEditCreateTaskDialog(taskId)
    }
    ngOnDestroy() {
        this.taskSubscription ? this.taskSubscription.unsubscribe(): null;
    }

}

