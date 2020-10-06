import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    PagesComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule, 
    RouterModule,
    MaterialModule
  ]
})
export class PagesModule { }