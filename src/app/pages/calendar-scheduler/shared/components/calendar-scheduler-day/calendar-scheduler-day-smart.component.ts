

import { Component, OnInit, Input, SimpleChanges, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Hour } from '../../../../../shared/models/hour.model';
import { Subscription } from 'rxjs';
import { DialogsService } from '../../../../../shared/providers/dialogs.service';
import { TaskModel } from '../../../../../shared/models/task.model';
import { TaskService } from '../../../../../shared/providers/task.service';

@Component({
    selector: 'app-calendar-scheduler-day-smart',
    template: `
    <app-calendar-scheduler-day 
    [hours]="hours" 
    [tasks]="tasks" 
    [selectedDate]="selectedDate"
     (checkTask)="checkTask($event)" 
     (putTask)="putTask($event)" 
    (dateSelection)="dateSelection.next($event)"
     > </app-calendar-scheduler-day>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CalendarSchedulerDaySmartComponent implements OnInit, OnDestroy {

    @Input() hoursRange: { start: number, end: number }
    @Input() selectedDate: Date
    timeRange:any[]
    @Input() selectedProject: string
    hours: Hour[] = []
    tasks: { task: TaskModel, startDateTime: number, endDateTime: number }[] = []
    taskSubscription: Subscription

    @Output() dateSelection= new EventEmitter<Date>()
    constructor(private taskService: TaskService,
                 private dialogService:DialogsService,
                 private cdr:ChangeDetectorRef) { }
    ngOnInit(): void {
        this.init();
        this.taskSubscription = this.taskService.task$.subscribe(() => {
            this.init()
        })
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.selectedDate && !changes.selectedDate.firstChange) {
            this.init();
        }
        if (changes.selectedProject && !changes.selectedProject.firstChange){
            this.init();
        }
    }
    init() {
        this.hours = [];
        for (let i = this.hoursRange.start; i < this.hoursRange.end; i++) {
            this.hours.push(new Hour(new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), i, 0, 0, 0)))
        }
        this.timeRange = [this.selectedDate.getTime(),null]
        this.taskService.getTasksByTimeRange('day', this.timeRange, this.selectedProject , this.selectedDate.getTime()).subscribe((tasks: TaskModel[]) => {
            console.log({tasks})
            let formatedTasks = [];
            tasks.forEach((eachTask) => { formatedTasks.push(this.getTaskTimes(eachTask)) })
            this.tasks = [...formatedTasks];
            this.cdr.detectChanges()
        })
    }
    getTaskTimes(task: TaskModel): { task: TaskModel, startDateTime: number, endDateTime: number } {
        let taskDayFormat: { task: TaskModel, startDateTime: number, endDateTime: number } = { task: null, startDateTime: null, endDateTime: null }
        if (task.startTime) {
            const startTime = task.startTime.split(':').reduce((acum, time, index) => { return index === 0 ? acum + Number(time) : (acum + (Number(time) / 60)) }, 0) * 3600000;
            const endTime = task.endTime.split(':').reduce((acum, time, index) => { return index === 0 ? acum + Number(time) : (acum + Number(time) / 60) }, 0) * 3600000;
            taskDayFormat.startDateTime = this.selectedDate.getTime() + startTime;
            taskDayFormat.endDateTime = this.selectedDate.getTime() + endTime;
        } else {
            taskDayFormat.startDateTime = this.selectedDate.getTime();
            taskDayFormat.endDateTime = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 23, 59, 0, 0).getTime();
        }
        taskDayFormat.task = task;
        return taskDayFormat
    }

    checkTask(taskId:string){
        this.dialogService.openTaskInfoDialog(taskId)
    }

    putTask(taskId:string){
        this.dialogService.openEditCreateTaskDialog(taskId)
    }
    ngOnDestroy() {
        this.taskSubscription.unsubscribe();
    }

}

