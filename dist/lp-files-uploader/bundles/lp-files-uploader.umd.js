(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('lp-files-uploader', ['exports', '@angular/core', '@angular/forms', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory(global['lp-files-uploader'] = {}, global.ng.core, global.ng.forms, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, forms, operators, common) { 'use strict';

    var LpFilesUploaderComponent = /** @class */ (function () {
        function LpFilesUploaderComponent() {
            /* VALIDATION CRITERIA */
            this.config = {};
            this.propagateChange = function (_) { };
        }
        LpFilesUploaderComponent.prototype.validate = function () {
            return this.errors;
        };
        LpFilesUploaderComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.trigger) {
                this.trigger.nativeElement.addEventListener('click', function () {
                    _this.fileInput.nativeElement.click();
                });
            }
            else {
                throw new Error('Component needs a trigger');
            }
            this.fileInputController.valueChanges.pipe(operators.skip(1)).subscribe(function () {
                var errors = _this.fileInputController.control.errors;
                if (errors) {
                    _this.errors = errors;
                    _this.propagateChange(null);
                }
                else {
                    _this.errors = null;
                    _this.propagateChange(_this.fileInput.nativeElement.files);
                }
                _this.fileInput.nativeElement.files = null;
                _this.fileInput.nativeElement.value = null;
            });
        };
        LpFilesUploaderComponent.prototype.writeValue = function (obj) { };
        LpFilesUploaderComponent.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        LpFilesUploaderComponent.prototype.registerOnTouched = function () { };
        return LpFilesUploaderComponent;
    }());
    LpFilesUploaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lp-files-uploader',
                    template: "\n\n<form #form=\"ngForm\">\n    <input \n    hidden\n    style=\"display:none\" \n    #fileInput  \n    #fileInputCtrl=\"ngModel\"\n    ngModel\n    name=\"files-input\"\n    type=\"file\"\n    [multiple]=\"config.multiple\"\n    lpFilesUploader\n    [allowedMimeTypes]=\"config.allowedMimeTypes \"\n    [notAllowedMimeTypes]=\"config.notAllowedMimeTypes\"\n    [maxSizeKb]=\"config.maxSizeKb\" \n    [maxNameLength]=\"config.maxNameLength\"\n    >\n</form>\n\n\n",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return LpFilesUploaderComponent; }),
                            multi: true,
                        },
                        {
                            provide: forms.NG_VALIDATORS,
                            useExisting: core.forwardRef(function () { return LpFilesUploaderComponent; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    LpFilesUploaderComponent.propDecorators = {
        trigger: [{ type: core.Input }],
        fileInput: [{ type: core.ViewChild, args: ['fileInput', { static: true },] }],
        fileInputController: [{ type: core.ViewChild, args: ['fileInputCtrl', { static: true },] }],
        config: [{ type: core.Input }]
    };

    var LpFilesUploaderDirective = /** @class */ (function () {
        function LpFilesUploaderDirective(el) {
            this.el = el;
        }
        LpFilesUploaderDirective.prototype.validate = function () {
            var files = this.el.nativeElement.files;
            var error = this.validateTypes(files) ? this.validateTypes(files) : this.validateSize(files) ? this.validateSize(files) : this.validateNameLength(files) ? this.validateNameLength(files) : null;
            return error;
        };
        LpFilesUploaderDirective.prototype.validateTypes = function (files) {
            var _this = this;
            var error = null;
            Array.from(files).forEach(function (file) {
                if (_this.allowedMimeTypes) {
                    if (_this.allowedMimeTypes.indexOf(file.type) < 0) {
                        error = { invalidMimeType: true };
                    }
                }
            });
            if (this.notAllowedMimeTypes) {
                Array.from(files).forEach(function (file) {
                    if (_this.notAllowedMimeTypes.indexOf(file.type) >= 0) {
                        error = { invalidMimeType: true };
                    }
                });
            }
            return error;
        };
        LpFilesUploaderDirective.prototype.validateSize = function (files) {
            var _this = this;
            var error = null;
            if (this.maxSizeKb) {
                Array.from(files).forEach(function (file) {
                    var sizeInKb = file.size / 1024;
                    if (sizeInKb > _this.maxSizeKb) {
                        error = { invalidFileSize: true };
                    }
                });
            }
            return error;
        };
        LpFilesUploaderDirective.prototype.validateNameLength = function (files) {
            var _this = this;
            var error = null;
            if (this.maxNameLength) {
                Array.from(files).forEach(function (file) {
                    if (file.name.length > _this.maxNameLength) {
                        error = { invalidNameLength: true };
                    }
                });
            }
            return error;
        };
        return LpFilesUploaderDirective;
    }());
    LpFilesUploaderDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[lpFilesUploader]',
                    providers: [
                        {
                            provide: forms.NG_VALIDATORS,
                            useExisting: core.forwardRef(function () { return LpFilesUploaderDirective; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    LpFilesUploaderDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    LpFilesUploaderDirective.propDecorators = {
        allowedMimeTypes: [{ type: core.Input }],
        notAllowedMimeTypes: [{ type: core.Input }],
        maxSizeKb: [{ type: core.Input }],
        maxNameLength: [{ type: core.Input }]
    };

    var LpFilesUploaderModule = /** @class */ (function () {
        function LpFilesUploaderModule() {
        }
        return LpFilesUploaderModule;
    }());
    LpFilesUploaderModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        LpFilesUploaderDirective,
                        LpFilesUploaderComponent
                    ],
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule
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

    exports.LpFilesUploaderComponent = LpFilesUploaderComponent;
    exports.LpFilesUploaderDirective = LpFilesUploaderDirective;
    exports.LpFilesUploaderModule = LpFilesUploaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lp-files-uploader.umd.js.map
