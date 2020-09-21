import { Component, OnInit, forwardRef, ContentChild, ElementRef,ViewChild, Input, Output, EventEmitter, AfterViewInit, ComponentRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel } from '@angular/forms';
import { skip } from 'rxjs/operators';


@Component({
  selector: 'app-files-uploader',
  templateUrl: './files-uploader.component.html',
  styleUrls: ['./files-uploader.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilesUploaderComponent),
      multi: true,
    }
  ]
})
export class FilesUploaderComponent implements OnInit, ControlValueAccessor, AfterViewInit{

  /* Se obtiene la referencia de este elemento como un NgModel */
  @Input() fileUploader: NgModel

  @ContentChild('parentElementTrigger',{static:true}) parentElementTrigger : ElementRef;
  
  @ViewChild('fileInput',{static:true}) fileInput:ElementRef;
  @ViewChild('fileInputCtrl',{static:true}) fileInputController:NgModel;

   /* VALIDATION CRITERIA */
  @Input() allowedMimeTypes: string[]=[];
  @Input() notAllowedMimeTypes: string[]=[];
  @Input() maxSizeKb:number = 5; 
  @Input() maxNameLength:number = 50;
  @Input() multiple:boolean;
   
  /////////////////////////

  @Output() errors: EventEmitter<{ type: string, message: string }[]> = new EventEmitter <{type:string, message: string}[]>()
 
  constructor() {}
  ngOnInit() {
    if (this.parentElementTrigger) {
      this.parentElementTrigger.nativeElement.addEventListener('click', () => {
        this.fileInput.nativeElement.click();
      })
    } else {
      throw new Error('El padre necesita referenciar un elemento como parentElementTrigger para el funcionamiento del componente')
    }
  }

  ngAfterViewInit(){
    this.fileInputController.valueChanges.pipe(skip(1)).subscribe(() => {
       let errors = this.fileInputController.control.errors;
        if(errors){
          this.fileUploader.control.setErrors(errors)
        }else{
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



 

  



