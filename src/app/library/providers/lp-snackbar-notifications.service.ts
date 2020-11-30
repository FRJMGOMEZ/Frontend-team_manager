import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LpSnackbarNotificationsService {

  constructor(private _snackBar: MatSnackBar) { }
  showSocketNotification(action: string, item: string, itemType: string, user: string, project?: string,) {
     let message = ''
     message += `${user}`
     switch(action){
       case 'POST':
          message+=`created ${itemType} ${item} ${project ? `in project ${project}`: ''} and includes you`
          break;
       case 'PUT':
         message += `edited ${itemType} ${item} ${project ? `in project ${project}` : ''}`
         break;
       case 'ADHESION':
         message += `edited ${itemType} ${item} ${project ? `in project ${project}` : ''} and includes you`
       break;
       case 'REMOVAL':
         message += `edited ${itemType} ${item} ${project ? `in project ${project}` : ''} and removes you`
       break;
        case 'DELETE':
         message += `deleted ${itemType} ${item} ${project ? `in project ${project}` : ''} and includes you`
         break;     
     }
     message+= ` by user ${user}`;
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }

  httpError(message:string,action:string){
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
