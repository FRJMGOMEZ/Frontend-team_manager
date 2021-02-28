import { NgModule } from '@angular/core';
import { dbImgPipe } from './db-img.pipe';

import { DaysOfWeekPipe } from './days-of-week.pipe';
import { FileIconPipe } from './file-icon.pipe';

@NgModule({
  imports: [],
  declarations: [dbImgPipe,DaysOfWeekPipe,FileIconPipe],
  exports: [dbImgPipe, DaysOfWeekPipe, FileIconPipe ]
})
export class PipesModule {}
