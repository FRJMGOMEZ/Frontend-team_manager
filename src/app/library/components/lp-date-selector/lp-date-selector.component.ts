import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ArrayOperationsService } from '../../providers/array-operations.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lp-date-selector',
  templateUrl: './lp-date-selector.component.html',
  styleUrls: ['./lp-date-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LpDateSelectorComponent),
      multi: true,
    }
  ]
})
export class LpDateSelectorComponent implements  ControlValueAccessor {

  @Input() dateFormat: string
  @Input() selectedDate: Date 
  @Input() minDate: Date
  @Input() maxDate: Date
  @Input() placeholder: string
  @Input() label: string
  @Input() disabled: boolean = false;
  monthOptions = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
  constructor() { }
  private propagateChange = (_: any) => { };
  public writeValue(date: Date) {
    if (date) {
      this.selectedDate = date;
    }
  }
  public registerOnChange(fn: any) { this.propagateChange = fn; }
  public registerOnTouched() { }
  setDate(date?: Date, year?: string, month?: string) {
    this.selectedDate = date ? date : (year && month) ? new Date(Number(year), Number(month), 1, 0, 0, 0, 0) : null;
    this.propagateChange(this.selectedDate)
  }
  monthValue(month: string) {
    return ArrayOperationsService.monthValue(month)
  }

}