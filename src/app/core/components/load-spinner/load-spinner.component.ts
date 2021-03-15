import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadSpinnerService } from './load-spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-load-spinner',
  templateUrl: './load-spinner.component.html',
  styleUrls: ['./load-spinner.component.css']
})
export class LoadSpinnerComponent implements OnInit {

  show:boolean;

  subscription:Subscription;

  constructor(public loadSpinnerService:LoadSpinnerService,private cdr:ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = this.loadSpinnerService.state.subscribe((res:boolean)=>{
          this.show = res;
          this.cdr.detectChanges();
    })
  }

  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

}
