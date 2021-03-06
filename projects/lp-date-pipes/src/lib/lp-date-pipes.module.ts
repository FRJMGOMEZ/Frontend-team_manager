import { NgModule } from '@angular/core';
import { LpParseHourPipe } from './lp-parse-hour.pipe';
import { LpParseDatePipe } from './lp-parse-date.pipe';

@NgModule({
  declarations: [LpParseDatePipe, LpParseHourPipe],
  imports: [
  ],
  exports: [LpParseDatePipe, LpParseHourPipe]
})
export class LpDatePipesModule { }
