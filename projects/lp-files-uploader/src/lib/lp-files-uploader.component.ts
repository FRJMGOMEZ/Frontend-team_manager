import { Component, forwardRef, ElementRef,ViewChild, Input,  AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel, NG_VALIDATORS, Validator } from '@angular/forms';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'lp-files-uploader',
  templateUrl: './lp-files-uploader.component.html',
  styles:[],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LpFilesUploaderComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LpFilesUploaderComponent),
      multi: true,
    }
  ]
})
export class LpFilesUploaderComponent implements  ControlValueAccessor, AfterViewInit, Validator{
  @Input() trigger:ElementRef
  @ViewChild('fileInput',{static:true}) fileInput:ElementRef;
  @ViewChild('fileInputCtrl',{static:true}) fileInputController:NgModel;
   /* VALIDATION CRITERIA */
  @Input() config: { [key: string]: any } = {}
  errors: { [key: string]: any }
  validate(){
    return this.errors
  }
  ngAfterViewInit(){

  if (this.trigger) {
    this.trigger.nativeElement.addEventListener('click', () => {
      this.fileInput.nativeElement.click();
    })
 } else {
   throw new Error('Component needs a trigger')
 }
    this.fileInputController.valueChanges.pipe(skip(1)).subscribe(() => {
       let errors = this.fileInputController.control.errors;
        if(errors){
          this.errors = errors;
          this.propagateChange(null);
        }else{
          this.errors = null;
          this.propagateChange(this.fileInput.nativeElement.files);
        }
        this.fileInput.nativeElement.files = null;
        this.fileInput.nativeElement.value = null;
    })
  }

  private propagateChange = (_: any) => {};
  public writeValue(obj: any) {}
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  public registerOnTouched() { }

}



 

  



