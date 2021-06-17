import { Directive, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/providers/auth.service';
import { ProjectService } from '../../core/providers/project.service';
import { User } from '../../core/models/user.model';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appIsAdm]'
})
export class IsAdmDirective implements OnDestroy {

  projectSubs:Subscription;

  projectSelectionSubs:Subscription;

  constructor(private authService:AuthService, private renderer:Renderer2, private el:ElementRef, private projectService:ProjectService) { 
     this.check()
     this.projectSubs = this.projectService.project$.subscribe(()=>{
         this.check()
     });
     this.projectSelectionSubs = this.projectService.selectedProject$.subscribe(()=>{
       this.check();
     });
  }

  check(){
  if (!(this.projectService.selectedProject.administrators as User[]).map((u)=>{ return u._id}).includes(this.authService.userOnline._id)){
     this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
  } else {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'inherit');
  }
  }

  ngOnDestroy(){
  this.projectSubs.unsubscribe();
  this.projectSelectionSubs.unsubscribe();
  }
  
}