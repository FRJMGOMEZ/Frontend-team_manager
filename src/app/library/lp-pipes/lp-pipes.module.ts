import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LpParseDatePipe } from './lp-parse-date.pipe';
import {LpParseHourPipe} from './lp-parse-hour.pipe'

@NgModule({
  declarations: [ LpParseDatePipe, LpParseHourPipe],
  imports: [
    CommonModule,
  ],
  exports: [LpParseDatePipe, LpParseHourPipe]
})
export class LpPipesModule { }
