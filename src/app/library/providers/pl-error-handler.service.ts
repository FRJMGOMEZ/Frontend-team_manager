import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { PlSnackbarNotificationsService } from './pl-snackbar-notifications.service';

@Injectable({
  providedIn: 'root'
})
export class PlErrorHandlerService {

  constructor(private plSnackbarNotificationsService:PlSnackbarNotificationsService) { }
  handleError(error: HttpErrorResponse, message?: string) {

     let errorMessage = message ? message : error.error.message ? error.error.message : error.message;

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
    }

    return throwError(error)
  }
}
