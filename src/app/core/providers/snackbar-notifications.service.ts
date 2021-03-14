import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarNotificationsService {

  constructor(private _snackBar: MatSnackBar) { }
  showNotification(action: string, item: string, itemType: string, user: string, project?: string) {
     let message = ''
     switch(action){
       case 'POST':
         message += `${user} has created ${item}(${itemType}) ${project ? `in project ${project}`: ''} and included you`;
          break;
       case 'PUT':
         message += `${user} has edited ${item}(${itemType}) ${project ? `in project ${project}` : ''}`;
         break;
       case 'ADHESION':
         message += `${user} has edited ${item}(${itemType}) ${project ? `in project ${project}` : ''} and included you`;
       break;
       case 'REMOVAL':
         message += `${user} has edited ${item}(${itemType}) ${project ? `in project ${project}` : ''} and removed you`;
       break;
        case 'DELETE':
         message += `${user} has deleted ${item}(${itemType}) ${project ? `in project ${project}` : ''}`;
         break;      
     }
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
