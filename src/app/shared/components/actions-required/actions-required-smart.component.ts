import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActionRequired } from '../../../core/models/action-required';

@Component({
  selector: 'app-actions-required-smart',
  template: ` <app-actions-required [actions]="actionsRequired" (setAction)="actionResolved($event)" > </app-actions-required>`,
   
  
})
export class ActionsRequiredSmartComponent  {

  @Input() actionsRequired:ActionRequired[];
  @Output() onActionResolved = new EventEmitter<{ [key: string]: any, itemId: string }>();

  constructor() { }

  actionResolved(actionR: { [key: string]: any, itemId: string }) {
    this.onActionResolved.emit(actionR);
    this.actionsRequired = this.actionsRequired.filter((ar) => { return ar.property != Object.keys(actionR)[0]; })
  }
}
