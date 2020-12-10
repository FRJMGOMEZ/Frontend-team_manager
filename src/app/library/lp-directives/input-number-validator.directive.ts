import { Directive, Input, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[inputNumberValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => InputNumberValidatorDirective), multi: true }
  ]
})
export class InputNumberValidatorDirective {

  @Input() allowDecimals: boolean = true;
  @Input() allowNegativeValues: boolean = true
  @Input() maxVal: number
  @Input() minVal: number
  constructor() { }
  @Input() regExps: { error: string, regExp: string }[] = [];
  validate(c: AbstractControl) {
    return this.check(c.value);
  }
  check(value: number) {
    if (value) {
      if (!this.allowDecimals && String(value).includes('.')) {
        return { 'isDecimal': true }
      }
      if (!this.allowNegativeValues && String(value).includes('-')) {
        return { 'isNegative': true }
      }
      if (this.maxVal && value > this.maxVal) {
        return { 'maxVal': true }
      }
      if (this.minVal && value < this.minVal) {
        return { 'minVal': true }
      }
      return null
    }
    return null;
  }

}
