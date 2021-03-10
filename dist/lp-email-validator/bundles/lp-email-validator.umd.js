(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('lp-email-validator', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory(global['lp-email-validator'] = {}, global.ng.core, global.ng.forms));
}(this, (function (exports, i0, forms) { 'use strict';

    var LpEmailValidatorDirective = /** @class */ (function () {
        function LpEmailValidatorDirective() {
        }
        LpEmailValidatorDirective.prototype.validate = function (c) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(c.value) ? null : { email: true };
        };
        return LpEmailValidatorDirective;
    }());
    LpEmailValidatorDirective.ɵfac = function LpEmailValidatorDirective_Factory(t) { return new (t || LpEmailValidatorDirective)(); };
    LpEmailValidatorDirective.ɵdir = i0.ɵɵdefineDirective({ type: LpEmailValidatorDirective, selectors: [["", "lpEmailValidator", ""]], features: [i0.ɵɵProvidersFeature([
                { provide: forms.NG_VALIDATORS, useExisting: i0.forwardRef(function () { return LpEmailValidatorDirective; }), multi: true }
            ])] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LpEmailValidatorDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[lpEmailValidator]',
                        providers: [
                            { provide: forms.NG_VALIDATORS, useExisting: i0.forwardRef(function () { return LpEmailValidatorDirective; }), multi: true }
                        ]
                    }]
            }], function () { return []; }, null);
    })();

    var LpEmailValidatorModule = /** @class */ (function () {
        function LpEmailValidatorModule() {
        }
        return LpEmailValidatorModule;
    }());
    LpEmailValidatorModule.ɵmod = i0.ɵɵdefineNgModule({ type: LpEmailValidatorModule });
    LpEmailValidatorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LpEmailValidatorModule_Factory(t) { return new (t || LpEmailValidatorModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LpEmailValidatorModule, { declarations: [LpEmailValidatorDirective], exports: [LpEmailValidatorDirective] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LpEmailValidatorModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [LpEmailValidatorDirective],
                        imports: [],
                        exports: [LpEmailValidatorDirective]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of lp-email-validator
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LpEmailValidatorDirective = LpEmailValidatorDirective;
    exports.LpEmailValidatorModule = LpEmailValidatorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lp-email-validator.umd.js.map
