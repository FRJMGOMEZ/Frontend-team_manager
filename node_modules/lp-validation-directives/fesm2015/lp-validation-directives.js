import { Directive, forwardRef, NgModule } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

class LpEmailValidatorDirective {
    constructor() { }
    validate(c) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(c.value) ? null : { email: true };
    }
}
LpEmailValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lpEmailValidator]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => LpEmailValidatorDirective), multi: true }
                ]
            },] }
];
LpEmailValidatorDirective.ctorParameters = () => [];

class LpValidationDirectivesModule {
}
LpValidationDirectivesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LpEmailValidatorDirective],
                imports: [],
                exports: [LpEmailValidatorDirective]
            },] }
];

/*
 * Public API Surface of lp-validation-directives
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpEmailValidatorDirective, LpValidationDirectivesModule };
//# sourceMappingURL=lp-validation-directives.js.map
