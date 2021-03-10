import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelement, ɵɵreference, ɵɵadvance, ɵɵtextInterpolate, ɵɵproperty, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵdefineComponent, ɵɵProvidersFeature, forwardRef, ɵsetClassMetadata, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor, NgControlStatus, NgModel, RequiredValidator, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LpDate } from 'lp-operations';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption, MatNativeDateModule } from '@angular/material/core';
import { OwlDateTimeInputDirective, OwlDateTimeTriggerDirective, OwlDateTimeComponent, OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

function LpDateSelectorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "mat-form-field", 4);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "input", 5, 6);
    ɵɵlistener("ngModelChange", function LpDateSelectorComponent_div_0_Template_input_ngModelChange_4_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.setDate($event); });
    ɵɵelementEnd();
    ɵɵelement(6, "mat-datepicker-toggle", 7);
    ɵɵelement(7, "mat-datepicker", null, 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r4 = ɵɵreference(8);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.label);
    ɵɵadvance(1);
    ɵɵproperty("min", ctx_r0.minDate)("max", ctx_r0.maxDate)("disabled", ctx_r0.disabled)("ngModel", ctx_r0.selectedDate)("matDatepicker", _r4);
    ɵɵadvance(2);
    ɵɵproperty("for", _r4);
} }
function LpDateSelectorComponent_div_1_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const month_r10 = ctx.$implicit;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("value", ctx_r9.monthValue(month_r10));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", month_r10, " ");
} }
function LpDateSelectorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "mat-form-field", 10);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3, "Year");
    ɵɵelementEnd();
    ɵɵelementStart(4, "input", 11, 12);
    ɵɵlistener("keyup", function LpDateSelectorComponent_div_1_Template_input_keyup_4_listener() { ɵɵrestoreView(_r12); const _r7 = ɵɵreference(5); const _r8 = ɵɵreference(10); const ctx_r11 = ɵɵnextContext(); return ctx_r11.setDate(null, _r7.value, _r8.value); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-form-field", 10);
    ɵɵelementStart(7, "mat-label");
    ɵɵtext(8, "Month");
    ɵɵelementEnd();
    ɵɵelementStart(9, "mat-select", 13, 14);
    ɵɵlistener("selectionChange", function LpDateSelectorComponent_div_1_Template_mat_select_selectionChange_9_listener() { ɵɵrestoreView(_r12); const _r7 = ɵɵreference(5); const _r8 = ɵɵreference(10); const ctx_r13 = ɵɵnextContext(); return ctx_r13.setDate(undefined, _r7.value, _r8.value); });
    ɵɵtemplate(11, LpDateSelectorComponent_div_1_mat_option_11_Template, 2, 2, "mat-option", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = ɵɵreference(5);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("disabled", ctx_r1.disabled)("min", ctx_r1.min ? ctx_r1.min.getFullYear() : null)("max", ctx_r1.max ? ctx_r1.max.getFullYear() : null)("value", ctx_r1.selectedDate ? ctx_r1.selectedDate.getFullYear().toString() : null);
    ɵɵadvance(5);
    ɵɵproperty("value", ctx_r1.selectedDate ? ctx_r1.selectedDate.getMonth().toString() : null)("disabled", !_r7.value || ctx_r1.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.monthOptions);
} }
function LpDateSelectorComponent_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r14.label);
} }
function LpDateSelectorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, LpDateSelectorComponent_div_2_label_1_Template, 2, 1, "label", 18);
    ɵɵelementStart(2, "input", 19, 20);
    ɵɵlistener("ngModelChange", function LpDateSelectorComponent_div_2_Template_input_ngModelChange_2_listener($event) { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(); return ctx_r17.setDate($event); });
    ɵɵelementEnd();
    ɵɵelement(4, "owl-date-time", null, 21);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r16 = ɵɵreference(5);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.label);
    ɵɵadvance(1);
    ɵɵproperty("owlDateTime", _r16)("owlDateTimeTrigger", _r16)("disabled", ctx_r2.disabled)("placeholder", ctx_r2.placeholder)("min", ctx_r2.minDate)("max", ctx_r2.maxDate)("ngModel", ctx_r2.selectedDate);
} }
class LpDateSelectorComponent {
    constructor() {
        this.disabled = false;
        this.monthOptions = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        this.propagateChange = (_) => { };
    }
    writeValue(date) {
        this.selectedDate = date;
    }
    registerOnChange(fn) { this.propagateChange = fn; }
    registerOnTouched() { }
    setDate(date, year, month) {
        if (date) {
            this.selectedDate = date;
            this.propagateChange(this.selectedDate);
        }
        else if (year.length === 4) {
            this.selectedDate = new Date(Number(year), Number(month), 1, 0, 0, 0, 0);
            this.propagateChange(this.selectedDate);
        }
    }
    monthValue(month) {
        return LpDate.monthValue(month);
    }
}
LpDateSelectorComponent.ɵfac = function LpDateSelectorComponent_Factory(t) { return new (t || LpDateSelectorComponent)(); };
LpDateSelectorComponent.ɵcmp = ɵɵdefineComponent({ type: LpDateSelectorComponent, selectors: [["lp-date-selector"]], inputs: { dateFormat: "dateFormat", selectedDate: "selectedDate", minDate: "minDate", maxDate: "maxDate", placeholder: "placeholder", label: "label", disabled: "disabled" }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => LpDateSelectorComponent),
                multi: true,
            }
        ])], decls: 3, vars: 3, consts: [["class", "div-date", "fxLayoutAlign", "center", 4, "ngIf"], ["class", "div-date", "fxLayout.gt-xs", "row", "fxLayoutAlign", "center", "fxLayout.xs", "column", 4, "ngIf"], ["class", "div-date", "fxLayout", "column", "fxLayoutAlign", "center", 4, "ngIf"], ["fxLayoutAlign", "center", 1, "div-date"], ["fxFlex", "100", "appearance", "fill"], ["name", "date", "matInput", "", 3, "min", "max", "disabled", "ngModel", "matDatepicker", "ngModelChange"], ["daySelection", ""], ["matSuffix", "", 3, "for"], ["picker", ""], ["fxLayout.gt-xs", "row", "fxLayoutAlign", "center", "fxLayout.xs", "column", 1, "div-date"], ["fxFlex", "40", "fxLayoutAlign", "center", "appearance", "fill"], ["matInput", "", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", "placeholder", "Year", 3, "disabled", "min", "max", "value", "keyup"], ["yearSelection", ""], [3, "value", "disabled", "selectionChange"], ["monthSelection", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["fxLayout", "column", "fxLayoutAlign", "center", 1, "div-date"], ["for", "endDate", 4, "ngIf"], ["required", "", "matInput", "", "readonly", "", 1, "input-date", 3, "owlDateTime", "owlDateTimeTrigger", "disabled", "placeholder", "min", "max", "ngModel", "ngModelChange"], ["timeSelection", ""], ["dt2", ""], ["for", "endDate"]], template: function LpDateSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, LpDateSelectorComponent_div_0_Template, 9, 7, "div", 0);
        ɵɵtemplate(1, LpDateSelectorComponent_div_1_Template, 12, 7, "div", 1);
        ɵɵtemplate(2, LpDateSelectorComponent_div_2_Template, 6, 8, "div", 2);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.dateFormat === "day");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.dateFormat === "month");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.dateFormat === "time");
    } }, directives: [NgIf, MatFormField, MatLabel, MatInput, DefaultValueAccessor, MatDatepickerInput, NgControlStatus, NgModel, MatDatepickerToggle, MatSuffix, MatDatepicker, MatSelect, NgForOf, MatOption, OwlDateTimeInputDirective, RequiredValidator, OwlDateTimeTriggerDirective, OwlDateTimeComponent], styles: [".div-date[_ngcontent-%COMP%]{margin:5px}.div-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{cursor:pointer}.div-date[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:200px!important} .mat-calendar-content{padding:0 40px 8px 8px!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LpDateSelectorComponent, [{
        type: Component,
        args: [{
                selector: 'lp-date-selector',
                templateUrl: './lp-date-selector.component.html',
                styleUrls: ['./lp-date-selector.component.scss'],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => LpDateSelectorComponent),
                        multi: true,
                    }
                ]
            }]
    }], function () { return []; }, { dateFormat: [{
            type: Input
        }], selectedDate: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();

class LpDateSelectorModule {
}
LpDateSelectorModule.ɵmod = ɵɵdefineNgModule({ type: LpDateSelectorModule });
LpDateSelectorModule.ɵinj = ɵɵdefineInjector({ factory: function LpDateSelectorModule_Factory(t) { return new (t || LpDateSelectorModule)(); }, imports: [[
            CommonModule,
            OwlDateTimeModule,
            OwlNativeDateTimeModule,
            MatButtonModule,
            MatInputModule,
            MatSelectModule,
            MatTooltipModule,
            MatDatepickerModule,
            MatNativeDateModule,
            FormsModule,
            ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(LpDateSelectorModule, { declarations: [LpDateSelectorComponent], imports: [CommonModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule], exports: [LpDateSelectorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(LpDateSelectorModule, [{
        type: NgModule,
        args: [{
                declarations: [LpDateSelectorComponent],
                imports: [
                    CommonModule,
                    OwlDateTimeModule,
                    OwlNativeDateTimeModule,
                    MatButtonModule,
                    MatInputModule,
                    MatSelectModule,
                    MatTooltipModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                exports: [
                    LpDateSelectorComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of lp-date-selector
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpDateSelectorComponent, LpDateSelectorModule };
//# sourceMappingURL=lp-date-selector.js.map
