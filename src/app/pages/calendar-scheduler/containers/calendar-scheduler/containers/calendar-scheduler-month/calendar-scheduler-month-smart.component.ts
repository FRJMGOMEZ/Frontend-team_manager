import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Day } from 'src/app/core/models/day.model';
import { TaskModel } from 'src/app/core/models/task.model';
import { DialogsService } from 'src/app/core/shared/providers/dialogs.service';
import { ArrayOperationsService } from '../../../../../../library/providers/array-operations.service';
import { TaskService } from '../../../../../../core/shared/providers/task.service';
import { OOService } from '../../../../../../library/providers/objects-operations.service';
import { Router, ActivatedRoute } from '@angular/router';
import { query } from '@angular/animations';


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

    selectedDate: Date = new Date()
    selectedProject: string
    dayRows: any[];
    taskSubscription: Subscription
    projectSelectionSubs: Subscription
    timeRange: number[]
    days: Day[]
    constructor(private arrayOperationsService: ArrayOperationsService,
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
        this.taskSubscription = this.taskService.task$.subscribe((data: { task: TaskModel, action: string }) => {
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

    insertTask(task: TaskModel) {
        this.dayRows.forEach((row, ind) => {
            row.forEach((eachDay: Day, index) => {
                let project = (task.project as any)._id ? (task.project as any)._id : task.project;
                let start = new Date(task.startDate);
                 start = new Date(start.getFullYear(),start.getMonth(), start.getDate(),0,0,0,0)
                if ((eachDay.date >= start.getTime()) && (eachDay.date <= task.endDate) && (project === this.selectedProject)) {
                    this.dayRows[ind][index].tasks = [...eachDay.tasks, task]
                }
            })
        })
    }

    removeTask(task: TaskModel) {
        this.dayRows = [...this.dayRows.map((eachRow) => {
            return eachRow.map((eachDay: Day) => { eachDay.tasks = eachDay.tasks.filter((eachTask: TaskModel) => { return eachTask._id != task._id }); return eachDay })
        })]
    }
    getTasks() {
        this.taskService.getTasks('month', OOService.toQueryString({ project: this.selectedProject, from: this.timeRange[0], to: this.timeRange[1] })).pipe(map((res: any) => { return res.tasks })).subscribe((tasks: TaskModel[]) => {
            tasks.forEach((eachTask:TaskModel)=>{
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
            this.dayRows = this.arrayOperationsService.divideArray(this.days, 7);
            this.timeRange = await this.getTimeRange(this.selectedDate, monthDays, lastMonthDay, firstMonthDay);
            resolve('')
        })
    }
    getCalendarDays(date: Date, monthDays: number, lastMonthDay: Date, firstMonthDay: Date) {
        let days = [];
        for (let i = 1 - firstMonthDay.getDay(); i <= monthDays + (6 - lastMonthDay.getDay()); i++) {
            days.push(new Day(new Date(date.getFullYear(), date.getMonth(), i, 0, 0, 0, 0)))
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
