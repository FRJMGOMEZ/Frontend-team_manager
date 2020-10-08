import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Day } from '../../../../../shared/models/day.model';
import { ArrayOperationsService } from '../../../../../library/providers/array-operations.service';
import { Subscription, timer } from 'rxjs';
import { DialogsService } from '../../../../../shared/providers/dialogs.service';
import { TaskService } from '../../../../../shared/providers/task.service';
import { TaskModel } from '../../../../../shared/models/task.model';


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
export class CalendarSchedulerMonthSmartComponent implements OnInit, OnDestroy, OnChanges {

    @Input() selectedDate: Date = new Date()
    dayRows: any[];
    taskSubscription: Subscription
    projectSelectionSubs: Subscription
    @Input() selectedProject: string
    timeRange: number[]
    days: Day[]
    constructor(private arrayOperationsService: ArrayOperationsService,
        public taskService: TaskService,
        public dialogsService: DialogsService,
        private cdr: ChangeDetectorRef) { }
    ngOnInit(): void {
        this.setRangeAndDays().then(() => {
            this.getTasks();
        })
        this.taskSubscription = this.taskService.task$.subscribe((data:{task:TaskModel,action:string}) => {
            switch (data.action) {
                case 'POST':
                    this.insertTask(data.task)
                    break;
                case 'PUT':
                    console.log('to update')
                    this.removeTask(data.task)
                    this.insertTask(data.task)
                    break;
                case 'DELETE':
                    console.log('to delete')
                    this.removeTask(data.task)
                    break;
            }
            this.dayRows = [...this.dayRows]
            this.cdr.markForCheck()
        })
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.selectedDate && !changes.selectedDate.firstChange) {
            this.setRangeAndDays().then(() => {
                this.getTasks();
            })
        }
        if (changes.selectedProject && !changes.selectedProject.firstChange) {
            this.getTasks()
        }
    }

    insertTask(task:TaskModel){
        this.dayRows.forEach((row, ind) => {
            row.forEach((eachDay: Day, index) => {
                let project = (task.project as any)._id ? (task.project as any)._id : task.project
                if ((eachDay.date >= task.startDate) && (eachDay.date <= task.endDate) && (project === this.selectedProject)) {
                    if (task.recursive) {
                        if ((new Date(task.startDate).getDay() === new Date(eachDay.date).getDay())) {
                            this.dayRows[ind][index].tasks= [...eachDay.tasks, task]
                        }
                    } else {
                        this.dayRows[ind][index].tasks = [...eachDay.tasks, task]
                        console.log('need to be included')
                    }
                }
            })
        })
    }

    removeTask(task:TaskModel){
       this.dayRows =[ ...this.dayRows.map((eachRow)=>{
            return eachRow.map((eachDay:Day)=>{ eachDay.tasks = eachDay.tasks.filter((eachTask:TaskModel)=>{  return eachTask._id != task._id }); return eachDay })
        })]
    }
    getTasks() {
        //// search for tasks in a date range ///
        this.taskService.getTasksByTimeRange('month', this.timeRange, this.selectedProject).subscribe((tasks: TaskModel[]) => {
                this.setRangeAndDays();
                this.days.forEach((eachDay: Day, index) => {
                    tasks.forEach((eachTask: TaskModel) => {
                    if ((eachDay.date >= eachTask.startDate) && (eachDay.date <= eachTask.endDate) && (eachTask.project === this.selectedProject)) {
                        if (eachTask.recursive) {
                            if ((new Date(eachTask.startDate).getDay() === new Date(eachDay.date).getDay())) {
                                eachDay.tasks = [...eachDay.tasks,eachTask]
                                this.days[index] = { ...eachDay };
                            }
                        } else {
                            eachDay.tasks = [...eachDay.tasks, eachTask]
                            this.days[index] = { ...eachDay };
                        }
                    }
                })
            })
            this.dayRows = this.arrayOperationsService.divideArray(this.days, 7);
            this.cdr.detectChanges();
        })
    }

    setRangeAndDays() {
        return new Promise(async (resolve, reject) => {
            let monthDays = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 0).getDate();
            let lastMonthDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), monthDays, 0, 0, 0, 0);
            let firstMonthDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1, 0, 0, 0, 0);
            this.days = await this.getCalendarDays(this.selectedDate, monthDays, lastMonthDay, firstMonthDay)
            this.timeRange = await this.getTimeRange(this.selectedDate, monthDays, lastMonthDay, firstMonthDay);
            resolve()
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
        this.taskSubscription.unsubscribe();
    }
}
