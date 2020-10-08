import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() toggleSideMenu: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }
  
}