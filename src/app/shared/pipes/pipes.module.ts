import { NgModule } from '@angular/core';
import { dbImgPipe } from './db-img.pipe';
import { TimeConversorPipe } from './time.conversor';
import { TimeConversor1Pipe } from './time.conversor1';
import { TimeConversorPipe2 } from './time.conversor2.pipe';
import { FrontImgPipe } from './front-img.pipe';
import { DaysOfWeekPipe } from './days-of-week.pipe';
import { FileIconPipe } from './file-icon.pipe';

@NgModule({
  imports: [],
  declarations: [dbImgPipe, TimeConversorPipe, TimeConversor1Pipe, TimeConversorPipe2, FrontImgPipe, DaysOfWeekPipe,FileIconPipe],
  exports: [dbImgPipe, TimeConversorPipe, TimeConversor1Pipe, TimeConversorPipe2, FrontImgPipe, DaysOfWeekPipe, FileIconPipe ]
})
export class PipesModule {}
