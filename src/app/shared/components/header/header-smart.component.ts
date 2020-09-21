import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../auth/shared/providers/auth.service';

@Component({
    selector: 'app-header-smart',
    template: `
    <app-header (logout)="logout()" (toggleSideMenu)="toggleSideMenu.emit()" > </app-header>`
})
export class HeaderSmartComponent {

    @Output() toggleSideMenu: EventEmitter<void> = new EventEmitter<void>()

    constructor(private authService: AuthService) { }

    logout() {
        console.log('logout')
        this.authService.logout()
    }

}