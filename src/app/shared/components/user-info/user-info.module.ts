import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';

import { UserInfoSmartDialogComponent } from './user-info-smart-dialog.component';
import { MaterialModule } from '../../material/material.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule
  ],
  declarations: [UserInfoComponent,UserInfoSmartDialogComponent],
  exports: [UserInfoSmartDialogComponent,UserInfoComponent]
})
export class UserInfoModule { }
