import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTypingLapseDirective } from './input-typing-lapse.directive';
import { InputNumberValidatorDirective } from './input-number-validator.directive';


@NgModule({
  declarations: [InputTypingLapseDirective, InputNumberValidatorDirective],
  imports: [
    CommonModule
  ],
  exports: [ InputTypingLapseDirective, InputNumberValidatorDirective]
})
export class LpDirectivesModule { }
