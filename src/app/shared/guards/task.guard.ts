import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from '../../core/providers/task.service';
import { ProjectService } from '../../core/providers/project.service';

@Injectable({
    providedIn: 'root'
})
export class TaskGuard implements CanActivate {

    constructor(private taskService:TaskService, private router: Router, private projectService:ProjectService) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
              const projectId =this.projectService.selectedProject._id;
              const taskId = next.paramMap.get('id');
              if(taskId){
                   return this.taskService.userIsPartOfTask(taskId,projectId);
              }else{
                  this.router.navigate(['/']);
                  return false;
              }  
    }

}
