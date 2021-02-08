import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LpDate } from 'lp-operations';

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
    this.selectedDate = date;
  }
  public registerOnChange(fn: any) { this.propagateChange = fn; }
  public registerOnTouched() { }
  setDate(date?: Date, year?: string, month?: string) {
    if(date){
      this.selectedDate = date;
      this.propagateChange(this.selectedDate)
    }else if(year.length === 4){
      this.selectedDate = new Date(Number(year), Number(month), 1, 0, 0, 0, 0);
      this.propagateChange(this.selectedDate)
    }
  }
  monthValue(month: string) {
    return LpDate.monthValue(month)
  }

}
