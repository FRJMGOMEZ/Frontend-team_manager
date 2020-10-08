import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import {TaskManagerComponent} from './task-manager.component'
import {TaskManagerPostEditComponent} from './shared/components/task-manager-post-edit/task-manager-post-edit.component'


let routes:Routes = [

  {path:'',component:TaskManagerComponent }
]

@NgModule({
  declarations: [
    TaskManagerComponent,
    TaskManagerPostEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class TaskManagerModule { }
