import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor() { }
  handleError(error) {
    let errorMessage = '';
    if (error.error.message) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${
        error.error.err.message
      }`;
    }
    console.log('right here') 
    return throwError(errorMessage);
  }
}
