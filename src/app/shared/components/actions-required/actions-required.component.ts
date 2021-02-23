import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ActionRequired } from '../../../core/models/action-required';

@Component({
  selector: 'app-actions-required',
  templateUrl: './actions-required.component.html',
  styleUrls: ['./actions-required.component.scss']
})
export class ActionsRequiredComponent  {
  @Output() setAction = new EventEmitter<{[key:string]:any,itemId:string}>();
  showThinkingTimeProgress:boolean;
  @Input() actions: ActionRequired[] = [];
  constructor() { }

  setActionValue(value:{[key:string]:any},itemId:string){
    this.setAction.emit({ ...{ [Object.keys(value)[0]]: value[Object.keys(value)[0]] }, itemId });
    this.showThinkingTimeProgress = false;
  }


}
