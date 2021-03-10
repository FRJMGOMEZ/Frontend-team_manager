import { ElementRef } from '@angular/core';
import { Validator } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class LpFilesUploaderDirective implements Validator {
    private el;
    allowedMimeTypes: string[];
    notAllowedMimeTypes: string[];
    maxSizeKb: number;
    maxNameLength: number;
    constructor(el: ElementRef);
    validate(): any;
    validateTypes(files: FileList): any;
    validateSize(files: FileList): any;
    validateNameLength(files: FileList): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LpFilesUploaderDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<LpFilesUploaderDirective, "[lpFilesUploader]", never, { "allowedMimeTypes": "allowedMimeTypes"; "notAllowedMimeTypes": "notAllowedMimeTypes"; "maxSizeKb": "maxSizeKb"; "maxNameLength": "maxNameLength"; }, {}, never>;
}

//# sourceMappingURL=lp-files-uploader.directive.d.ts.map