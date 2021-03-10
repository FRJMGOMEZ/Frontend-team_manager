import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActionRequired } from '../../../core/models/action-required';

@Component({
  selector: 'app-actions-required-smart-dialog',
  template: `  
      <mat-dialog-content class="mat-typography">
        <div class="div-actions-required">
          <app-actions-required [actions]="actionsRequired" (setAction)="actionResolved($event)" > </app-actions-required>
        </div>
      </mat-dialog-content>
      <mat-dialog-actions fxLayoutAlign="center" align="end">
        <button mat-button mat-dialog-close>CLOSE</button>
      </mat-dialog-actions>
`,
  styles: [
  ` 
  .div-actions-required{
      max-height: 40vh;
  overflow- y: scroll; `
  ]
})
export class ActionsRequiredSmartDialogComponent implements OnInit {

  actionsRequired: ActionRequired[];
  @Output() onActionResolved = new EventEmitter < { [key: string]: any, itemId: string }>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
             private dialogRef: MatDialogRef<ActionsRequiredSmartDialogComponent>) {}

  close(){
    this.dialogRef.close();
  }

  actionResolved(actionR: { [key: string]: any, itemId: string }){
   this.onActionResolved.emit(actionR);
   this.actionsRequired = this.actionsRequired.filter((ar)=>{ return ar.property != Object.keys(actionR)[0]; })
   this.actionsRequired.length === 0 ? this.close() : null;
  }

  ngOnInit() {
     this.actionsRequired = this.data.actionsRequired;
  }

}
