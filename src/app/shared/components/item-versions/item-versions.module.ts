import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemVersionsComponent } from './item-versions.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [ItemVersionsComponent],
  exports:[ItemVersionsComponent]
})
export class ItemVersionsModule { }
