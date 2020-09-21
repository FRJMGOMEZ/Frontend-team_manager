import { NgModule } from '@angular/core';
import { dbImgPipe } from './db-img.pipe';
import { TimeConversorPipe } from './time.conversor';
import { TimeConversor1Pipe } from './time.conversor1';
import { TimeConversorPipe2 } from './time.conversor2.pipe';
import { FrontImgPipe } from './front-img.pipe';
import { DaysOfWeekPipe } from './days-of-week.pipe';
import {DbFilePipe} from './db-file.pipe';

@NgModule({
  imports: [],
  declarations: [dbImgPipe, TimeConversorPipe, TimeConversor1Pipe, TimeConversorPipe2, FrontImgPipe, DaysOfWeekPipe,DbFilePipe],
  exports: [dbImgPipe, TimeConversorPipe, TimeConversor1Pipe, TimeConversorPipe2, FrontImgPipe, DbFilePipe ]
})
export class PipesModule {}
