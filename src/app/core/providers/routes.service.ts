import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
private currentPageSrc = new Subject<string>();
public currentPage$ = this.currentPageSrc.asObservable();

constructor() { }

setCurrentPage(page:string){
  this.currentPageSrc.next(page);
}
}
