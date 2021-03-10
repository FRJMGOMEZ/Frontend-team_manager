(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('lp-input-trimmer', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory(global['lp-input-trimmer'] = {}, global.ng.core, global.ng.forms));
}(this, (function (exports, i0, forms) { 'use strict';

    var LpInputTrimmerDirective = /** @class */ (function () {
        function LpInputTrimmerDirective(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.propagateChange = function (_) { };
        }
        LpInputTrimmerDirective.prototype.onChange = function (value) {
            this.propagateChange(value.trim());
        };
        LpInputTrimmerDirective.prototype.writeValue = function (val) {
            var value = val == null ? '' : val;
            this.renderer.setProperty(this.el.nativeElement, 'value', value);
        };
        LpInputTrimmerDirective.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        LpInputTrimmerDirective.prototype.registerOnTouched = function () { };
        return LpInputTrimmerDirective;
    }());
    LpInputTrimmerDirective.ɵfac = function LpInputTrimmerDirective_Factory(t) { return new (t || LpInputTrimmerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    LpInputTrimmerDirective.ɵdir = i0.ɵɵdefineDirective({ type: LpInputTrimmerDirective, selectors: [["", "lpInputTrimmer", ""]], hostBindings: function LpInputTrimmerDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("input", function LpInputTrimmerDirective_input_HostBindingHandler($event) { return ctx.onChange($event.target.value); });
            }
        }, features: [i0.ɵɵProvidersFeature([{
                    provide: forms.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return LpInputTrimmerDirective; }),
                    multi: true
                }])] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LpInputTrimmerDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[lpInputTrimmer]',
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return LpInputTrimmerDirective; }),
                                multi: true
                            }]
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { onChange: [{
                    type: i0.HostListener,
                    args: ['input', ['$event.target.value']]
                }] });
    })();

    var LpInputTrimmerModule = /** @class */ (function () {
        function LpInputTrimmerModule() {
        }
        return LpInputTrimmerModule;
    }());
    LpInputTrimmerModule.ɵmod = i0.ɵɵdefineNgModule({ type: LpInputTrimmerModule });
    LpInputTrimmerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LpInputTrimmerModule_Factory(t) { return new (t || LpInputTrimmerModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LpInputTrimmerModule, { declarations: [LpInputTrimmerDirective], exports: [LpInputTrimmerDirective] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LpInputTrimmerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [LpInputTrimmerDirective],
                        imports: [],
                        exports: [LpInputTrimmerDirective]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of lp-input-trimmer
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LpInputTrimmerDirective = LpInputTrimmerDirective;
    exports.LpInputTrimmerModule = LpInputTrimmerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lp-input-trimmer.umd.js.map
