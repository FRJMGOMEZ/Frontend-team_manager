import { ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class LpInputTrimmerDirective implements ControlValueAccessor {
    private el;
    private renderer;
    constructor(el: ElementRef, renderer: Renderer2);
    onChange(value: string): void;
    private propagateChange;
    writeValue(val: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    static ɵfac: i0.ɵɵFactoryDef<LpInputTrimmerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<LpInputTrimmerDirective, "[lpInputTrimmer]", never, {}, {}, never>;
}
