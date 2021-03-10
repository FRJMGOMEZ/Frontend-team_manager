import { Component, forwardRef, Input, ViewChild, Directive, ElementRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { skip } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';

const _c0 = ["fileInput"];
const _c1 = ["fileInputCtrl"];
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
LpFilesUploaderComponent.ɵfac = function LpFilesUploaderComponent_Factory(t) { return new (t || LpFilesUploaderComponent)(); };
LpFilesUploaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LpFilesUploaderComponent, selectors: [["lp-files-uploader"]], viewQuery: function LpFilesUploaderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
        ɵngcc0.ɵɵstaticViewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fileInputController = _t.first);
    } }, inputs: { config: "config", trigger: "trigger" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => LpFilesUploaderComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => LpFilesUploaderComponent),
                multi: true
            }
        ])], decls: 5, vars: 5, consts: [["form", "ngForm"], ["hidden", "", "ngModel", "", "name", "files-input", "type", "file", "lpFilesUploader", "", 2, "display", "none", 3, "multiple", "allowedMimeTypes", "notAllowedMimeTypes", "maxSizeKb", "maxNameLength"], ["fileInput", "", "fileInputCtrl", "ngModel"]], template: function LpFilesUploaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "form", null, 0);
        ɵngcc0.ɵɵelement(2, "input", 1, 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("multiple", ctx.config.multiple)("allowedMimeTypes", ctx.config.allowedMimeTypes)("notAllowedMimeTypes", ctx.config.notAllowedMimeTypes)("maxSizeKb", ctx.config.maxSizeKb)("maxNameLength", ctx.config.maxNameLength);
    } }, directives: function () { return [ɵngcc1.ɵangular_packages_forms_forms_y, ɵngcc1.NgControlStatusGroup, ɵngcc1.NgForm, ɵngcc1.DefaultValueAccessor, ɵngcc1.NgControlStatus, ɵngcc1.NgModel, LpFilesUploaderDirective]; }, encapsulation: 2 });
LpFilesUploaderComponent.propDecorators = {
    trigger: [{ type: Input }],
    fileInput: [{ type: ViewChild, args: ['fileInput', { static: true },] }],
    fileInputController: [{ type: ViewChild, args: ['fileInputCtrl', { static: true },] }],
    config: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpFilesUploaderComponent, [{
        type: Component,
        args: [{
                selector: 'lp-files-uploader',
                template: "\n\n<form #form=\"ngForm\">\n    <input \n    hidden\n    style=\"display:none\" \n    #fileInput  \n    #fileInputCtrl=\"ngModel\"\n    ngModel\n    name=\"files-input\"\n    type=\"file\"\n    [multiple]=\"config.multiple\"\n    lpFilesUploader\n    [allowedMimeTypes]=\"config.allowedMimeTypes \"\n    [notAllowedMimeTypes]=\"config.notAllowedMimeTypes\"\n    [maxSizeKb]=\"config.maxSizeKb\" \n    [maxNameLength]=\"config.maxNameLength\"\n    >\n</form>\n\n\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => LpFilesUploaderComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => LpFilesUploaderComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { config: [{
            type: Input
        }], trigger: [{
            type: Input
        }], fileInput: [{
            type: ViewChild,
            args: ['fileInput', { static: true }]
        }], fileInputController: [{
            type: ViewChild,
            args: ['fileInputCtrl', { static: true }]
        }] }); })();

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
LpFilesUploaderDirective.ɵfac = function LpFilesUploaderDirective_Factory(t) { return new (t || LpFilesUploaderDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
LpFilesUploaderDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: LpFilesUploaderDirective, selectors: [["", "lpFilesUploader", ""]], inputs: { allowedMimeTypes: "allowedMimeTypes", notAllowedMimeTypes: "notAllowedMimeTypes", maxSizeKb: "maxSizeKb", maxNameLength: "maxNameLength" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => LpFilesUploaderDirective),
                multi: true
            }
        ])] });
LpFilesUploaderDirective.ctorParameters = () => [
    { type: ElementRef }
];
LpFilesUploaderDirective.propDecorators = {
    allowedMimeTypes: [{ type: Input }],
    notAllowedMimeTypes: [{ type: Input }],
    maxSizeKb: [{ type: Input }],
    maxNameLength: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpFilesUploaderDirective, [{
        type: Directive,
        args: [{
                selector: '[lpFilesUploader]',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => LpFilesUploaderDirective),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { allowedMimeTypes: [{
            type: Input
        }], notAllowedMimeTypes: [{
            type: Input
        }], maxSizeKb: [{
            type: Input
        }], maxNameLength: [{
            type: Input
        }] }); })();

class LpFilesUploaderModule {
}
LpFilesUploaderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LpFilesUploaderModule });
LpFilesUploaderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LpFilesUploaderModule_Factory(t) { return new (t || LpFilesUploaderModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LpFilesUploaderModule, { declarations: function () { return [LpFilesUploaderDirective, LpFilesUploaderComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        ReactiveFormsModule]; }, exports: function () { return [LpFilesUploaderDirective, LpFilesUploaderComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpFilesUploaderModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

/*
 * Public API Surface of lp-files-uploader
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpFilesUploaderComponent, LpFilesUploaderDirective, LpFilesUploaderModule };

//# sourceMappingURL=lp-files-uploader.js.map