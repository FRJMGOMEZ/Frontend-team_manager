import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵlistener, ɵɵProvidersFeature, forwardRef, ɵsetClassMetadata, Directive, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class LpInputTrimmerDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.propagateChange = (_) => { };
    }
    onChange(value) {
        this.propagateChange(value.trim());
    }
    writeValue(val) {
        const value = val == null ? '' : val;
        this.renderer.setProperty(this.el.nativeElement, 'value', value);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
}
LpInputTrimmerDirective.ɵfac = function LpInputTrimmerDirective_Factory(t) { return new (t || LpInputTrimmerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
LpInputTrimmerDirective.ɵdir = ɵɵdefineDirective({ type: LpInputTrimmerDirective, selectors: [["", "lpInputTrimmer", ""]], hostBindings: function LpInputTrimmerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("input", function LpInputTrimmerDirective_input_HostBindingHandler($event) { return ctx.onChange($event.target.value); });
    } }, features: [ɵɵProvidersFeature([{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => LpInputTrimmerDirective),
                multi: true
            }])] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LpInputTrimmerDirective, [{
        type: Directive,
        args: [{
                selector: '[lpInputTrimmer]',
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => LpInputTrimmerDirective),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { onChange: [{
            type: HostListener,
            args: ['input', ['$event.target.value']]
        }] }); })();

class LpInputTrimmerModule {
}
LpInputTrimmerModule.ɵmod = ɵɵdefineNgModule({ type: LpInputTrimmerModule });
LpInputTrimmerModule.ɵinj = ɵɵdefineInjector({ factory: function LpInputTrimmerModule_Factory(t) { return new (t || LpInputTrimmerModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(LpInputTrimmerModule, { declarations: [LpInputTrimmerDirective], exports: [LpInputTrimmerDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(LpInputTrimmerModule, [{
        type: NgModule,
        args: [{
                declarations: [LpInputTrimmerDirective],
                imports: [],
                exports: [LpInputTrimmerDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of lp-input-trimmer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpInputTrimmerDirective, LpInputTrimmerModule };
//# sourceMappingURL=lp-input-trimmer.js.map
