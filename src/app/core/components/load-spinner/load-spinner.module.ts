import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadSpinnerComponent } from './load-spinner.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { LoadSpinnerService } from './load-spinner.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [LoadSpinnerComponent],
  exports:[LoadSpinnerComponent]
})
export class LoadSpinnerModule { }
