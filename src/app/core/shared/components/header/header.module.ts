import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from '../../directives/directives.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
     HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    DirectivesModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
