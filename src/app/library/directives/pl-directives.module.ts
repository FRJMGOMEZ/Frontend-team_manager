import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickTimeLapseDirective } from './click-time-lapse.directive';
import { InputTypingLapseDirective } from './input-typing-lapse.directive';
import { InputNumberValidatorDirective } from './input-number-validator.directive';


@NgModule({
  declarations: [ClickTimeLapseDirective,InputTypingLapseDirective, InputNumberValidatorDirective],
  imports: [
    CommonModule
  ],
  exports: [ClickTimeLapseDirective, InputTypingLapseDirective, InputNumberValidatorDirective]
})
export class PlDirectivesModule { }
