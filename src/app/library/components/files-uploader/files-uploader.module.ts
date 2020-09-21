import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploaderComponent } from './files-uploader.component';
import { FilesUploaderDirective } from './files-uploader.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FilesUploaderDirective,
    FilesUploaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FilesUploaderComponent
  ]
})
export class FilesUploaderModule { }
