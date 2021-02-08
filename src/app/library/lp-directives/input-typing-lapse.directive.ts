import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged} from 'rxjs/operators';

@Directive({
  selector: '[appInputTypingLapse]'
})
export class InputTypingLapseDirective {

  @Output() inputLapseOut: EventEmitter<string> = new EventEmitter<string>();
  constructor(private el:ElementRef) { 
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      debounceTime(500),
      pluck('target', 'value'),
      distinctUntilChanged()).subscribe((inputValue:string)=>{
        this.inputLapseOut.emit(inputValue)
      })
  }
}
