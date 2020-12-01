import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LpParseDatePipe } from './lp-parse-date.pipe';
import { LpFileIconPipe } from './lp-file-icon.pipe';
import {LpParseHourPipe} from './lp-parse-hour.pipe'

@NgModule({
  declarations: [ LpParseDatePipe, LpParseHourPipe, LpFileIconPipe],
  imports: [
    CommonModule,
  ],
  exports: [LpParseDatePipe, LpParseHourPipe, LpFileIconPipe]
})
export class LpPipesModule { }
