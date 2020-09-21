import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickTimeLapseDirective } from './click-time-lapse.directive';
import { InputTypingLapseDirective } from './input-typing-lapse.directive';


@NgModule({
  declarations: [ClickTimeLapseDirective,InputTypingLapseDirective],
  imports: [
    CommonModule
  ],
  exports: [ClickTimeLapseDirective, InputTypingLapseDirective]
})
export class PlDirectivesModule { }
