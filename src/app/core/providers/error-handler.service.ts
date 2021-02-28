import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { SnackbarNotificationsService } from './snackbar-notifications.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private plSnackbarNotificationsService:SnackbarNotificationsService) { }
  handleError(error: HttpErrorResponse) {

     let errorMessage = error.error.message

    switch (error.status) {
      case 400: this.plSnackbarNotificationsService.httpError(errorMessage, '')
        break;
      case 401:
        this.plSnackbarNotificationsService.httpError(errorMessage, '')
        break;
      case 403: this.plSnackbarNotificationsService.httpError(errorMessage, '')
        break;
      case 404:
          this.plSnackbarNotificationsService.httpError(errorMessage,'')
        break;
      case 504: this.plSnackbarNotificationsService.httpError(errorMessage, '')
        break;
      case 400: this.plSnackbarNotificationsService.httpError(errorMessage,'')  
       break;
    }

    return throwError(error)
  }
}
