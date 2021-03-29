import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
private currentPageSrc = new Subject<string>();
public currentPage$ = this.currentPageSrc.asObservable();

constructor(private router:Router) { }

setCurrentPage(page:string){
  this.currentPageSrc.next(page);
}/* 
reloadComponent(absoultePath:string,ar?:ActivatedRoute){
  ar ? this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([absoultePath], {relativeTo: ar })) : this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>this.router.navigate([absoultePath]));
} */

/* navigateToChild(path:string){
 
} */
}
