import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DayModel } from 'src/app/core/models/day.model';
import { Task } from 'src/app/core/models/task.model';

import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../../core/providers/task.service';
import { DialogsService } from '../../../../core/providers/dialogs.service';
import { LpArray } from '../../../../../../projects/lp-operations/src/lp-array';
import { LpObject } from 'lp-operations';

@Component({
    selector: 'app-calendar-scheduler-month-smart',
    template: `
    
    <app-calendar-scheduler-month 
    [dayRows]="dayRows" 
    [selectedDate]="selectedDate" 
    (checkTask)="dialogsService.openTaskInfoDialog($event)" 
    (putTask)="dialogsService.openEditCreateTaskDialog($event)" 
    (deleteTask)="taskService.deleteTask($event).subscribe()" 
    (checkTasks)="dialogsService.openTasksListInfoDialog($event)"> 
    </app-calendar-scheduler-month>
    
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarSchedulerMonthSmartComponent implements OnInit, OnDestroy {

    selectedDate: Date = new Date();
    selectedProject: string;
    dayRows: any[];
    taskSubscription: Subscription;
    projectSelectionSubs: Subscription;
    timeRange: number[];
    days: DayModel[];
    constructor(
        public taskService: TaskService,
        public dialogsService: DialogsService,
        private cdr: ChangeDetectorRef,
        private ar:ActivatedRoute) { }
    ngOnInit(): void {
        this.ar.queryParamMap.subscribe((querys)=>{
        this.selectedDate = new Date(querys.get('selectedDate'));
        this.selectedProject = querys.get('selectedProject');
            this.setRangeAndDays().then(() => {
                this.getTasks();
            })
        })
        this.taskSubscription = this.taskService.task$.subscribe((data: { task: Task, action: string }) => {
            switch (data.action) {
                case 'POST':
                    this.insertTask(data.task)
                    break;
                case 'PUT':
                    this.removeTask(data.task)
                    this.insertTask(data.task)
                    break;
                case 'DELETE':
                    this.removeTask(data.task)
                    break;
            }
            this.dayRows = [...this.dayRows]
            this.cdr.markForCheck()
        })
    }

    insertTask(task: Task) {
        this.dayRows.forEach((row, ind) => {
            row.forEach((eachDay: DayModel, index) => {
                let project = task.project;
                let start = new Date(task.startDate);
                 start = new Date(start.getFullYear(),start.getMonth(), start.getDate(),0,0,0,0);
                if ((eachDay.date >= start.getTime()) && (eachDay.date <= task.endDate) && (project === this.selectedProject)) {
                    this.dayRows[ind][index].tasks = [...eachDay.tasks, task]
                }
            })
        })
    }

    removeTask(task: Task) {
        this.dayRows = [...this.dayRows.map((eachRow) => {
            return eachRow.map((eachDay: DayModel) => { eachDay.tasks = eachDay.tasks.filter((eachTask: Task) => { return eachTask._id != task._id }); return eachDay })
        })]
    }
    getTasks() {
        this.taskService.getTasks('month', LpObject.toQueryString({ project: this.selectedProject, from: this.timeRange[0], to: this.timeRange[1] })).pipe(map((res: any) => { return res.tasks })).subscribe((tasks: Task[]) => {
            tasks.forEach((eachTask:Task)=>{
                this.insertTask(eachTask)
            })
            this.cdr.detectChanges();
        })
    }

    setRangeAndDays() {
        return new Promise(async (resolve, reject) => {
            let monthDays = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 0).getDate();
            let lastMonthDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), monthDays, 0, 0, 0, 0);
            let firstMonthDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1, 0, 0, 0, 0);
            this.days = await this.getCalendarDays(this.selectedDate, monthDays, lastMonthDay, firstMonthDay)
            this.dayRows = LpArray.divideArray(this.days, 7);
            this.timeRange = await this.getTimeRange(this.selectedDate, monthDays, lastMonthDay, firstMonthDay);
            resolve('')
        })
    }
    getCalendarDays(date: Date, monthDays: number, lastMonthDay: Date, firstMonthDay: Date) {
        let days = [];
        for (let i = 1 - firstMonthDay.getDay(); i <= monthDays + (6 - lastMonthDay.getDay()); i++) {
            days.push(new DayModel(new Date(date.getFullYear(), date.getMonth(), i, 0, 0, 0, 0)))
        }
        return days
    }
    getTimeRange(date: Date, monthDays: number, lastMonthDay: Date, firstMonthDay: Date) {
        return [new Date(date.getFullYear(), date.getMonth(), 1 - firstMonthDay.getDay()).getTime(), new Date(date.getFullYear(), date.getMonth(), monthDays + (6 - lastMonthDay.getDay()), 23, 59, 59, 0).getTime()]
    }
    ngOnDestroy() {
        this.taskSubscription ?  this.taskSubscription.unsubscribe() : null;
    }
}
