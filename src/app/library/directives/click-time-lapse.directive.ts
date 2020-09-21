import { Directive, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[clickTimeLapse]'
})
export class ClickTimeLapseDirective {

  @Input() clickLapso:number = 300;

  @Output() lapsedClick:EventEmitter<any> = new EventEmitter<any>()

  constructor(private el:ElementRef) {

      fromEvent(this.el.nativeElement,'click').pipe(throttleTime(this.clickLapso)).subscribe((event:MouseEvent)=>{
               
        this.lapsedClick.emit(event)
      })

   }
}
