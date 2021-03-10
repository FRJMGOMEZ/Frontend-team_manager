import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarNotificationsService {

  constructor(private _snackBar: MatSnackBar) { }
  showNotification(action: string, item: string, itemType: string, user: string, project?: string,status?:string) {
     let message = ''
     switch(action){
       case 'POST':
         message += `${item}(${itemType}) created ${project ? `in project ${project}`: ''} and includes you`;
          break;
       case 'PUT':
         message += `${item}(${itemType}) edited ${project ? `in project ${project}` : ''}`;
         break;
       case 'ADHESION':
         message += `${item}(${itemType}) created ${project ? `in project ${project}` : ''} and includes you`;
       break;
       case 'REMOVAL':
         message += `${item}(${itemType}) created ${project ? `in project ${project}` : ''} and removes you`;
       break;
        case 'DELETE':
         message += `${item}(${itemType}) deleted ${project ? `in project ${project}` : ''} and includes you`;
         break;  
       case 'STATUS CHANGE':
         message += `${item}(${itemType}) changed status to "${status}"`;
         break;     
     }
     message+= ` by ${user}`;
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }

  /* TODO: Añadir template de snackbar */
  httpError(message:string,action:string){
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }

  validationError(message:string){
    this._snackBar.open(message,null, {
      duration: 4000,
    });
  }
}
