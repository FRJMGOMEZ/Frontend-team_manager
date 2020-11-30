

import { Component, OnInit, Input, SimpleChanges, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Hour } from '../../../../../shared/models/hour.model';
import { Subscription } from 'rxjs';
import { DialogsService } from '../../../../../shared/providers/dialogs.service';
import { TaskModel } from '../../../../../shared/models/task.model';
import { TaskService } from '../../../../../shared/providers/task.service';
import { OOService } from '../../../../../library/providers/objects-operations.service';

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
    timeRange: any[]
    @Input() selectedProject: string
    hours: Hour[] = []
    tasks:TaskModel[] = []
    taskSubscription: Subscription

    @Output() dateSelection = new EventEmitter<Date>()
    constructor(private taskService: TaskService,
        private dialogService: DialogsService,
        private cdr: ChangeDetectorRef) { }
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
        if (changes.selectedProject && !changes.selectedProject.firstChange) {
            this.init();
        }
    }
    init() {
        this.hours = [];
        for (let i = this.hoursRange.start; i < this.hoursRange.end; i++) {
            this.hours.push(new Hour(new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), i, 0, 0, 0)))
        }
        this.timeRange = [this.selectedDate.getTime(), null]
        this.taskService.getTasks('day',  OOService.toQueryString({project:this.selectedProject,from:this.timeRange[0],to:this.timeRange[1]})).subscribe((tasks: TaskModel[]) => {
            this.tasks = [...tasks];
            this.cdr.detectChanges()
        })
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

