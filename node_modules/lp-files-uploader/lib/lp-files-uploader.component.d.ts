import { ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NgModel, Validator } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class LpFilesUploaderComponent implements ControlValueAccessor, AfterViewInit, Validator {
    trigger: ElementRef;
    fileInput: ElementRef;
    fileInputController: NgModel;
    config: {
        [key: string]: any;
    };
    errors: {
        [key: string]: any;
    };
    validate(): {
        [key: string]: any;
    };
    ngAfterViewInit(): void;
    private propagateChange;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LpFilesUploaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LpFilesUploaderComponent, "lp-files-uploader", never, { "config": "config"; "trigger": "trigger"; }, {}, never, never>;
}

//# sourceMappingURL=lp-files-uploader.component.d.ts.map