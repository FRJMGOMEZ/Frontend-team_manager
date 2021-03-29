import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';
import { ProjectService } from '../../core/providers/project.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectGuard implements CanActivate {

  constructor(private projectService:ProjectService,private router:Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const projectId = next.paramMap.get('id');
      if(projectId){
        return this.projectService.getProjects().pipe(switchMap(() => { 
            return this.projectService.userIsPartOfProject(projectId).pipe(map((res: boolean) => {
              if(res){
                  if(!this.projectService.selectedProject || this.projectService.selectedProject._id != projectId){
                    this.projectService.selectProject(projectId);
                    return true;
                  }else{
                    return true;
                  }
              }else{
                this.router.navigateByUrl('/pages');
                return false;
              }}))}))
      }else{
        this.router.navigate(['/']);
      }
  }

}
