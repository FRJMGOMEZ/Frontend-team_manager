import { Component, forwardRef, Input, ViewChild, Directive, ElementRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { skip } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

class LpFilesUploaderComponent {
    constructor() {
        /* VALIDATION CRITERIA */
        this.config = {};
        this.propagateChange = (_) => { };
    }
    validate() {
        return this.errors;
    }
    ngAfterViewInit() {
        if (this.trigger) {
            this.trigger.nativeElement.addEventListener('click', () => {
                this.fileInput.nativeElement.click();
            });
        }
        else {
            throw new Error('Component needs a trigger');
        }
        this.fileInputController.valueChanges.pipe(skip(1)).subscribe(() => {
            let errors = this.fileInputController.control.errors;
            if (errors) {
                this.errors = errors;
                this.propagateChange(null);
            }
            else {
                this.errors = null;
                this.propagateChange(this.fileInput.nativeElement.files);
            }
            this.fileInput.nativeElement.files = null;
            this.fileInput.nativeElement.value = null;
        });
    }
    writeValue(obj) { }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
}
LpFilesUploaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lp-files-uploader',
                template: "\n\n<form #form=\"ngForm\">\n    <input \n    hidden\n    style=\"display:none\" \n    #fileInput  \n    #fileInputCtrl=\"ngModel\"\n    ngModel\n    name=\"files-input\"\n    type=\"file\"\n    [multiple]=\"config.multiple\"\n    lpFilesUploader\n    [allowedMimeTypes]=\"config.allowedMimeTypes \"\n    [notAllowedMimeTypes]=\"config.notAllowedMimeTypes\"\n    [maxSizeKb]=\"config.maxSizeKb\" \n    [maxNameLength]=\"config.maxNameLength\"\n    >\n</form>\n\n\n",
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
            },] }
];
LpFilesUploaderComponent.propDecorators = {
    trigger: [{ type: Input }],
    fileInput: [{ type: ViewChild, args: ['fileInput', { static: true },] }],
    fileInputController: [{ type: ViewChild, args: ['fileInputCtrl', { static: true },] }],
    config: [{ type: Input }]
};

class LpFilesUploaderDirective {
    constructor(el) {
        this.el = el;
    }
    validate() {
        let files = this.el.nativeElement.files;
        let error = this.validateTypes(files) ? this.validateTypes(files) : this.validateSize(files) ? this.validateSize(files) : this.validateNameLength(files) ? this.validateNameLength(files) : null;
        return error;
    }
    validateTypes(files) {
        let error = null;
        Array.from(files).forEach((file) => {
            if (this.allowedMimeTypes) {
                if (this.allowedMimeTypes.indexOf(file.type) < 0) {
                    error = { invalidMimeType: true };
                }
            }
        });
        if (this.notAllowedMimeTypes) {
            Array.from(files).forEach((file) => {
                if (this.notAllowedMimeTypes.indexOf(file.type) >= 0) {
                    error = { invalidMimeType: true };
                }
            });
        }
        return error;
    }
    validateSize(files) {
        let error = null;
        if (this.maxSizeKb) {
            Array.from(files).forEach((file) => {
                let sizeInKb = file.size / 1024;
                if (sizeInKb > this.maxSizeKb) {
                    error = { invalidFileSize: true };
                }
            });
        }
        return error;
    }
    validateNameLength(files) {
        let error = null;
        if (this.maxNameLength) {
            Array.from(files).forEach((file) => {
                if (file.name.length > this.maxNameLength) {
                    error = { invalidNameLength: true };
                }
            });
        }
        return error;
    }
}
LpFilesUploaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lpFilesUploader]',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => LpFilesUploaderDirective),
                        multi: true,
                    }
                ]
            },] }
];
LpFilesUploaderDirective.ctorParameters = () => [
    { type: ElementRef }
];
LpFilesUploaderDirective.propDecorators = {
    allowedMimeTypes: [{ type: Input }],
    notAllowedMimeTypes: [{ type: Input }],
    maxSizeKb: [{ type: Input }],
    maxNameLength: [{ type: Input }]
};

class LpFilesUploaderModule {
}
LpFilesUploaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    LpFilesUploaderDirective,
                    LpFilesUploaderComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                exports: [
                    LpFilesUploaderDirective,
                    LpFilesUploaderComponent
                ]
            },] }
];

/*
 * Public API Surface of lp-files-uploader
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpFilesUploaderComponent, LpFilesUploaderDirective, LpFilesUploaderModule };
//# sourceMappingURL=lp-files-uploader.js.map
