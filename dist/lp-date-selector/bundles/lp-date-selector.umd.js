(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('lp-operations'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/datepicker'), require('@angular/material/select'), require('@angular/material/core'), require('ng-pick-datetime'), require('@angular/material/button'), require('@angular/material/tooltip')) :
    typeof define === 'function' && define.amd ? define('lp-date-selector', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'lp-operations', '@angular/material/form-field', '@angular/material/input', '@angular/material/datepicker', '@angular/material/select', '@angular/material/core', 'ng-pick-datetime', '@angular/material/button', '@angular/material/tooltip'], factory) :
    (global = global || self, factory(global['lp-date-selector'] = {}, global.ng.core, global.ng.common, global.ng.forms, global.lpOperations, global.ng.material.formField, global.ng.material.input, global.ng.material.datepicker, global.ng.material.select, global.ng.material.core, global.i8, global.ng.material.button, global.ng.material.tooltip));
}(this, (function (exports, i0, i1, i4, lpOperations, i2, i3, i5, i6, i7, i8, button, tooltip) { 'use strict';

    function LpDateSelectorComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 3);
            i0.ɵɵelementStart(1, "mat-form-field", 4);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 5, 6);
            i0.ɵɵlistener("ngModelChange", function LpDateSelectorComponent_div_0_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.setDate($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "mat-datepicker-toggle", 7);
            i0.ɵɵelement(7, "mat-datepicker", null, 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r4 = i0.ɵɵreference(8);
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r0.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("min", ctx_r0.minDate)("max", ctx_r0.maxDate)("disabled", ctx_r0.disabled)("ngModel", ctx_r0.selectedDate)("matDatepicker", _r4);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("for", _r4);
        }
    }
    function LpDateSelectorComponent_div_1_mat_option_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 16);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var month_r10 = ctx.$implicit;
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", ctx_r9.monthValue(month_r10));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", month_r10, " ");
        }
    }
    function LpDateSelectorComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵelementStart(1, "mat-form-field", 10);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Year");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 11, 12);
            i0.ɵɵlistener("keyup", function LpDateSelectorComponent_div_1_Template_input_keyup_4_listener() { i0.ɵɵrestoreView(_r12_1); var _r7 = i0.ɵɵreference(5); var _r8 = i0.ɵɵreference(10); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.setDate(null, _r7.value, _r8.value); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-form-field", 10);
            i0.ɵɵelementStart(7, "mat-label");
            i0.ɵɵtext(8, "Month");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-select", 13, 14);
            i0.ɵɵlistener("selectionChange", function LpDateSelectorComponent_div_1_Template_mat_select_selectionChange_9_listener() { i0.ɵɵrestoreView(_r12_1); var _r7 = i0.ɵɵreference(5); var _r8 = i0.ɵɵreference(10); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.setDate(undefined, _r7.value, _r8.value); });
            i0.ɵɵtemplate(11, LpDateSelectorComponent_div_1_mat_option_11_Template, 2, 2, "mat-option", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r7 = i0.ɵɵreference(5);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx_r1.disabled)("min", ctx_r1.min ? ctx_r1.min.getFullYear() : null)("max", ctx_r1.max ? ctx_r1.max.getFullYear() : null)("value", ctx_r1.selectedDate ? ctx_r1.selectedDate.getFullYear().toString() : null);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx_r1.selectedDate ? ctx_r1.selectedDate.getMonth().toString() : null)("disabled", !_r7.value || ctx_r1.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r1.monthOptions);
        }
    }
    function LpDateSelectorComponent_div_2_label_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "label", 22);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r14.label);
        }
    }
    function LpDateSelectorComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵtemplate(1, LpDateSelectorComponent_div_2_label_1_Template, 2, 1, "label", 18);
            i0.ɵɵelementStart(2, "input", 19, 20);
            i0.ɵɵlistener("ngModelChange", function LpDateSelectorComponent_div_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.setDate($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "owl-date-time", null, 21);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r16 = i0.ɵɵreference(5);
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("owlDateTime", _r16)("owlDateTimeTrigger", _r16)("disabled", ctx_r2.disabled)("placeholder", ctx_r2.placeholder)("min", ctx_r2.minDate)("max", ctx_r2.maxDate)("ngModel", ctx_r2.selectedDate);
        }
    }
    var LpDateSelectorComponent = /** @class */ (function () {
        function LpDateSelectorComponent() {
            this.disabled = false;
            this.monthOptions = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
            this.propagateChange = function (_) { };
        }
        LpDateSelectorComponent.prototype.writeValue = function (date) {
            this.selectedDate = date;
        };
        LpDateSelectorComponent.prototype.registerOnChange = function (fn) { this.propagateChange = fn; };
        LpDateSelectorComponent.prototype.registerOnTouched = function () { };
        LpDateSelectorComponent.prototype.setDate = function (date, year, month) {
            if (date) {
                this.selectedDate = date;
                this.propagateChange(this.selectedDate);
            }
            else if (year.length === 4) {
                this.selectedDate = new Date(Number(year), Number(month), 1, 0, 0, 0, 0);
                this.propagateChange(this.selectedDate);
            }
        };
        LpDateSelectorComponent.prototype.monthValue = function (month) {
            return lpOperations.LpDate.monthValue(month);
        };
        return LpDateSelectorComponent;
    }());
    LpDateSelectorComponent.ɵfac = function LpDateSelectorComponent_Factory(t) { return new (t || LpDateSelectorComponent)(); };
    LpDateSelectorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LpDateSelectorComponent, selectors: [["lp-date-selector"]], inputs: { dateFormat: "dateFormat", selectedDate: "selectedDate", minDate: "minDate", maxDate: "maxDate", placeholder: "placeholder", label: "label", disabled: "disabled" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: i4.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return LpDateSelectorComponent; }),
                    multi: true,
                }
            ])], decls: 3, vars: 3, consts: [["class", "div-date", "fxLayoutAlign", "center", 4, "ngIf"], ["class", "div-date", "fxLayout.gt-xs", "row", "fxLayoutAlign", "center", "fxLayout.xs", "column", 4, "ngIf"], ["class", "div-date", "fxLayout", "column", "fxLayoutAlign", "center", 4, "ngIf"], ["fxLayoutAlign", "center", 1, "div-date"], ["fxFlex", "100", "appearance", "fill"], ["name", "date", "matInput", "", 3, "min", "max", "disabled", "ngModel", "matDatepicker", "ngModelChange"], ["daySelection", ""], ["matSuffix", "", 3, "for"], ["picker", ""], ["fxLayout.gt-xs", "row", "fxLayoutAlign", "center", "fxLayout.xs", "column", 1, "div-date"], ["fxFlex", "40", "fxLayoutAlign", "center", "appearance", "fill"], ["matInput", "", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", "placeholder", "Year", 3, "disabled", "min", "max", "value", "keyup"], ["yearSelection", ""], [3, "value", "disabled", "selectionChange"], ["monthSelection", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["fxLayout", "column", "fxLayoutAlign", "center", 1, "div-date"], ["for", "endDate", 4, "ngIf"], ["required", "", "matInput", "", "readonly", "", 1, "input-date", 3, "owlDateTime", "owlDateTimeTrigger", "disabled", "placeholder", "min", "max", "ngModel", "ngModelChange"], ["timeSelection", ""], ["dt2", ""], ["for", "endDate"]], template: function LpDateSelectorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, LpDateSelectorComponent_div_0_Template, 9, 7, "div", 0);
                i0.ɵɵtemplate(1, LpDateSelectorComponent_div_1_Template, 12, 7, "div", 1);
                i0.ɵɵtemplate(2, LpDateSelectorComponent_div_2_Template, 6, 8, "div", 2);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.dateFormat === "day");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.dateFormat === "month");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.dateFormat === "time");
            }
        }, directives: [i1.NgIf, i2.MatFormField, i2.MatLabel, i3.MatInput, i4.DefaultValueAccessor, i5.MatDatepickerInput, i4.NgControlStatus, i4.NgModel, i5.MatDatepickerToggle, i2.MatSuffix, i5.MatDatepicker, i6.MatSelect, i1.NgForOf, i7.MatOption, i8.OwlDateTimeInputDirective, i4.RequiredValidator, i8.OwlDateTimeTriggerDirective, i8.OwlDateTimeComponent], styles: [".div-date[_ngcontent-%COMP%]{margin:5px}.div-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{cursor:pointer}.div-date[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:200px!important} .mat-calendar-content{padding:0 40px 8px 8px!important}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LpDateSelectorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lp-date-selector',
                        templateUrl: './lp-date-selector.component.html',
                        styleUrls: ['./lp-date-selector.component.scss'],
                        providers: [
                            {
                                provide: i4.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return LpDateSelectorComponent; }),
                                multi: true,
                            }
                        ]
                    }]
            }], function () { return []; }, { dateFormat: [{
                    type: i0.Input
                }], selectedDate: [{
                    type: i0.Input
                }], minDate: [{
                    type: i0.Input
                }], maxDate: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }] });
    })();

    var LpDateSelectorModule = /** @class */ (function () {
        function LpDateSelectorModule() {
        }
        return LpDateSelectorModule;
    }());
    LpDateSelectorModule.ɵmod = i0.ɵɵdefineNgModule({ type: LpDateSelectorModule });
    LpDateSelectorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LpDateSelectorModule_Factory(t) { return new (t || LpDateSelectorModule)(); }, imports: [[
                i1.CommonModule,
                i8.OwlDateTimeModule,
                i8.OwlNativeDateTimeModule,
                button.MatButtonModule,
                i3.MatInputModule,
                i6.MatSelectModule,
                tooltip.MatTooltipModule,
                i5.MatDatepickerModule,
                i7.MatNativeDateModule,
                i4.FormsModule,
                i4.ReactiveFormsModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LpDateSelectorModule, { declarations: [LpDateSelectorComponent], imports: [i1.CommonModule,
                i8.OwlDateTimeModule,
                i8.OwlNativeDateTimeModule,
                button.MatButtonModule,
                i3.MatInputModule,
                i6.MatSelectModule,
                tooltip.MatTooltipModule,
                i5.MatDatepickerModule,
                i7.MatNativeDateModule,
                i4.FormsModule,
                i4.ReactiveFormsModule], exports: [LpDateSelectorComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LpDateSelectorModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [LpDateSelectorComponent],
                        imports: [
                            i1.CommonModule,
                            i8.OwlDateTimeModule,
                            i8.OwlNativeDateTimeModule,
                            button.MatButtonModule,
                            i3.MatInputModule,
                            i6.MatSelectModule,
                            tooltip.MatTooltipModule,
                            i5.MatDatepickerModule,
                            i7.MatNativeDateModule,
                            i4.FormsModule,
                            i4.ReactiveFormsModule
                        ],
                        exports: [
                            LpDateSelectorComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of lp-date-selector
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LpDateSelectorComponent = LpDateSelectorComponent;
    exports.LpDateSelectorModule = LpDateSelectorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lp-date-selector.umd.js.map
