import { Directive, Renderer2, ElementRef} from '@angular/core';
import { AuthService } from '../../auth/shared/providers/auth.service';
import { Project } from '../../core/models/project.model';
import { ProjectService } from '../../core/providers/project.service';

@Directive({
  selector: '[appIsAdm]'
})
export class IsAdmDirective {

  constructor(private authService:AuthService, private renderer:Renderer2, private el:ElementRef, private projectService:ProjectService) { 
    if (this.projectService.projects.filter((eachProject:Project)=>{
        return (eachProject.administrators as string[]).includes(this.authService.userOnline._id)
    }).length === 0){
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
    }
  }
}