import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParseDatePipe } from './parse-date.pipe';
import { ParseHourPipe } from './parse-hour.pipe';

@NgModule({
  declarations: [ ParseDatePipe, ParseHourPipe],
  imports: [
    CommonModule,
  ],
  exports:[ ParseDatePipe,ParseHourPipe]
})
export class LibraryPipesModule { }
