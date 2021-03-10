import { Directive, forwardRef, NgModule } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

import * as ɵngcc0 from '@angular/core';
class LpEmailValidatorDirective {
    constructor() { }
    validate(c) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(c.value) ? null : { email: true };
    }
}
LpEmailValidatorDirective.ɵfac = function LpEmailValidatorDirective_Factory(t) { return new (t || LpEmailValidatorDirective)(); };
LpEmailValidatorDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: LpEmailValidatorDirective, selectors: [["", "lpEmailValidator", ""]], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => LpEmailValidatorDirective), multi: true }
        ])] });
LpEmailValidatorDirective.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpEmailValidatorDirective, [{
        type: Directive,
        args: [{
                selector: '[lpEmailValidator]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => LpEmailValidatorDirective), multi: true }
                ]
            }]
    }], function () { return []; }, null); })();

class LpValidationDirectivesModule {
}
LpValidationDirectivesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LpValidationDirectivesModule });
LpValidationDirectivesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LpValidationDirectivesModule_Factory(t) { return new (t || LpValidationDirectivesModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LpValidationDirectivesModule, { declarations: [LpEmailValidatorDirective], exports: [LpEmailValidatorDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpValidationDirectivesModule, [{
        type: NgModule,
        args: [{
                declarations: [LpEmailValidatorDirective],
                imports: [],
                exports: [LpEmailValidatorDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of lp-validation-directives
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpEmailValidatorDirective, LpValidationDirectivesModule };

//# sourceMappingURL=lp-validation-directives.js.map