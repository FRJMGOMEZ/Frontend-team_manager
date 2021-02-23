import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'lp-thinking-time-progress',
  templateUrl: './lp-thinking-time-progress.component.html',
  styleUrls: ['./lp-thinking-time-progress.component.css']
})
export class LpThinkingTimeProgressComponent implements OnInit {


  @Input() progress: number = 0;
  @Input() show:boolean = false;
  @Input() velocity:number = 5;
  @Input() diameter:number = 60;
  @Output() end = new EventEmitter<boolean>()
  timeSubscription:Subscription;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes.show && this.show){
        this.timeSubscription = interval(this.velocity * 10).subscribe(() => {
          if (this.progress <= 100) {
            this.progress++
          } else {
            this.timeSubscription.unsubscribe();
            this.progress = 0;
            this.end.emit(true);
          }
        })
      }else{
        this.timeSubscription ? this.timeSubscription.unsubscribe(): null;
        this.progress = 0;
      }
  }
  stopProgress() {
    this.timeSubscription.unsubscribe();
    this.progress = 0;
    this.end.emit(false);
  }

  ngOnDestroy() {
    this.timeSubscription? this.timeSubscription.unsubscribe(): null;
  }

}
