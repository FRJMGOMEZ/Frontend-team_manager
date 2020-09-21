import { Directive, Renderer2, ElementRef } from '@angular/core';
import { AuthService } from '../../auth/shared/providers/auth.service';
@Directive({
  selector: '[appIsAdm]'
})
export class IsAdmDirective {

  constructor(private authService:AuthService, private renderer:Renderer2, private el:ElementRef) { 
    if (this.authService.userOnline.role != 'ADMIN_ROLE'){
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
    }
  }
}