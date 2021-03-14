import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { User } from '../../core/models/user.model';
import { AuthService } from '../../core/providers/auth.service';

@Directive({
  selector: '[appIsUserOnline]'
})
export class IsUserOnlineDirective implements OnInit {

  @Input() user:User

  @Input() reverseDirective:boolean = false;

  constructor(private authService:AuthService, private el:ElementRef, private renderer:Renderer2) {}

   ngOnInit(){
     if (this.reverseDirective) {
       if (this.user._id === this.authService.userOnline._id) {
         this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
       }
     } else {
       if (this.user._id != this.authService.userOnline._id) {
         this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
       }
     }
   }
}
