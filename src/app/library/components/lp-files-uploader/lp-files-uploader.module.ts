import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LpFilesUploaderComponent } from './lp-files-uploader.component';
import { LpFilesUploaderDirective } from './lp-files-uploader.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LpFilesUploaderDirective,
    LpFilesUploaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports:[
    LpFilesUploaderComponent
  ]
})
export class LpFilesUploaderModule { }
