import { ɵɵdefineDirective, ɵɵProvidersFeature, forwardRef, ɵsetClassMetadata, Directive, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

class LpEmailValidatorDirective {
    constructor() { }
    validate(c) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(c.value) ? null : { email: true };
    }
}
LpEmailValidatorDirective.ɵfac = function LpEmailValidatorDirective_Factory(t) { return new (t || LpEmailValidatorDirective)(); };
LpEmailValidatorDirective.ɵdir = ɵɵdefineDirective({ type: LpEmailValidatorDirective, selectors: [["", "lpEmailValidator", ""]], features: [ɵɵProvidersFeature([
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => LpEmailValidatorDirective), multi: true }
        ])] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LpEmailValidatorDirective, [{
        type: Directive,
        args: [{
                selector: '[lpEmailValidator]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => LpEmailValidatorDirective), multi: true }
                ]
            }]
    }], function () { return []; }, null); })();

class LpEmailValidatorModule {
}
LpEmailValidatorModule.ɵmod = ɵɵdefineNgModule({ type: LpEmailValidatorModule });
LpEmailValidatorModule.ɵinj = ɵɵdefineInjector({ factory: function LpEmailValidatorModule_Factory(t) { return new (t || LpEmailValidatorModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(LpEmailValidatorModule, { declarations: [LpEmailValidatorDirective], exports: [LpEmailValidatorDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(LpEmailValidatorModule, [{
        type: NgModule,
        args: [{
                declarations: [LpEmailValidatorDirective],
                imports: [],
                exports: [LpEmailValidatorDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of lp-email-validator
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpEmailValidatorDirective, LpEmailValidatorModule };
//# sourceMappingURL=lp-email-validator.js.map
