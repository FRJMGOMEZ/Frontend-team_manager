import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/shared/providers/auth.service';

@Directive({
  selector: '[appProjectAdmRole]'
})
export class ProjectAdmRoleDirective implements OnInit {
  @Input() administrators:string[]=[];

  constructor( private authService:AuthService, private el:ElementRef, private renderer:Renderer2) {}

   ngOnInit(){
     if (!this.administrators.includes(this.authService.userOnline._id)) {
       this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
     } 
   }
}
