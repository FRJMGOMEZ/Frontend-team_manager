import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { TaskService } from './task.service';
import { switchMap } from 'rxjs/operators';
import { DialogsService } from './dialogs.service';

@Injectable({
  providedIn: 'root'
})
export class ActionsRequiredService {

constructor(private taskService:TaskService, private dialogsService:DialogsService) { }

  actionProcess(type:string,itemId:any){
  let request: Observable<any>;
  let actionItem;
  switch (type) {
    case 'Task': request = this.taskService.getTaskById(itemId);
      break;
  }
  return request.pipe(switchMap((item: any) => {
    actionItem = item;
    return this.dialogsService.showActionsRequired(item.actionsRequired).pipe(switchMap((actionRequired: any) => {
      let req:Observable<any>;
      switch (type) {
        case 'Task': req = this.taskService.putTask({ [Object.keys(actionRequired)[0]]: actionRequired[Object.keys(actionRequired)[0]]},item._id)
          break;
      }
      return req ? req : empty();
    }))
  }))
}

}
