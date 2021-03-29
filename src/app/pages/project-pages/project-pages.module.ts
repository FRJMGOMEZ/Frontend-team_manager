import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPagesComponent } from './project-pages.component';
import { ProjectPagesRoutingModule } from './project-pages-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ProjectPagesRoutingModule
  ],
  declarations: [ProjectPagesComponent]
})
export class ProjectPagesModule { }
