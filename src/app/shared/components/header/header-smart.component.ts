import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../auth/shared/providers/auth.service';

@Component({
    selector: 'app-header-smart',
    template: `
    <app-header (logout)="logout()" (toggleSideMenu)="toggleSideMenu.emit()" >
    
    <ng-content> </ng-content>
    
    </app-header>`,
    styleUrls: ['./header.component.scss']
    
})
export class HeaderSmartComponent {

    @Output() toggleSideMenu: EventEmitter<void> = new EventEmitter<void>()

    constructor(private authService: AuthService) { }

    logout() {
       let subs =  this.authService.logout().subscribe(()=>{
              subs.unsubscribe()
        })
    }

}