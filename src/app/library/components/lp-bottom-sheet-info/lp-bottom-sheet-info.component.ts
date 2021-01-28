import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'lp-bottom-sheet-info',
  templateUrl: './lp-bottom-sheet-info.component.html',
  styleUrls: ['./lp-bottom-sheet-info.component.scss']
})
export class LpBottomSheetInfoComponent implements OnInit {

  @Input() componentToShow:ComponentType<any>
  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openInfo(){
     this._bottomSheet.open(this.componentToShow)
  }

}
