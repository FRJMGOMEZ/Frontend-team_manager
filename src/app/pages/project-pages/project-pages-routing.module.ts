import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CheckTokenGuard } from '../../shared/guards/check-token.guard';
import { ProjectPagesComponent } from './project-pages.component';

let routes: Routes = [
    {
        path: '',
        component: ProjectPagesComponent,
        children: [
            {
                path: '',
                redirectTo: 'calendar',
                pathMatch: 'full',
            },
            {
                path: 'calendar',
                canActivate: [CheckTokenGuard],
                loadChildren: () => import('./pages/calendar-scheduler/calendar-scheduler.module').then(m => m.CalendarSchedulerModule)
            },
            {
                path: 'task-manager',
                loadChildren: () => import('./pages/task-manager/task-manager.module').then(m => m.TaskManagerModule),
                canActivate: [CheckTokenGuard],
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class ProjectPagesRoutingModule { }
