import { Component, OnInit } from '@angular/core';
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

  constructor(public loadSpinnerService:LoadSpinnerService) { }

  ngOnInit() {
    this.subscription = this.loadSpinnerService.state.subscribe((res:boolean)=>{
          this.show = res;
          console.log(this.show);
    })
  }

  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

}
