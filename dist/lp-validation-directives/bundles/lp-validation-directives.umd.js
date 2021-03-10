(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('lp-validation-directives', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory(global['lp-validation-directives'] = {}, global.ng.core, global.ng.forms));
}(this, (function (exports, core, forms) { 'use strict';

    var LpEmailValidatorDirective = /** @class */ (function () {
        function LpEmailValidatorDirective() {
        }
        LpEmailValidatorDirective.prototype.validate = function (c) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(c.value) ? null : { email: true };
        };
        return LpEmailValidatorDirective;
    }());
    LpEmailValidatorDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[lpEmailValidator]',
                    providers: [
                        { provide: forms.NG_VALIDATORS, useExisting: core.forwardRef(function () { return LpEmailValidatorDirective; }), multi: true }
                    ]
                },] }
    ];
    LpEmailValidatorDirective.ctorParameters = function () { return []; };

    var LpValidationDirectivesModule = /** @class */ (function () {
        function LpValidationDirectivesModule() {
        }
        return LpValidationDirectivesModule;
    }());
    LpValidationDirectivesModule.decorators = [
        { type: core.NgModule, args: [{
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

    exports.LpEmailValidatorDirective = LpEmailValidatorDirective;
    exports.LpValidationDirectivesModule = LpValidationDirectivesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lp-validation-directives.umd.js.map
