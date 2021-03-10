import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LpDate } from 'lp-operations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/datepicker";
import * as i6 from "@angular/material/select";
import * as i7 from "@angular/material/core";
import * as i8 from "ng-pick-datetime";
function LpDateSelectorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "mat-form-field", 4);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 5, 6);
    i0.ɵɵlistener("ngModelChange", function LpDateSelectorComponent_div_0_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.setDate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "mat-datepicker-toggle", 7);
    i0.ɵɵelement(7, "mat-datepicker", null, 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r4 = i0.ɵɵreference(8);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("min", ctx_r0.minDate)("max", ctx_r0.maxDate)("disabled", ctx_r0.disabled)("ngModel", ctx_r0.selectedDate)("matDatepicker", _r4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("for", _r4);
} }
function LpDateSelectorComponent_div_1_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r10 = ctx.$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", ctx_r9.monthValue(month_r10));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", month_r10, " ");
} }
function LpDateSelectorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "mat-form-field", 10);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Year");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 11, 12);
    i0.ɵɵlistener("keyup", function LpDateSelectorComponent_div_1_Template_input_keyup_4_listener() { i0.ɵɵrestoreView(_r12); const _r7 = i0.ɵɵreference(5); const _r8 = i0.ɵɵreference(10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.setDate(null, _r7.value, _r8.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-form-field", 10);
    i0.ɵɵelementStart(7, "mat-label");
    i0.ɵɵtext(8, "Month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-select", 13, 14);
    i0.ɵɵlistener("selectionChange", function LpDateSelectorComponent_div_1_Template_mat_select_selectionChange_9_listener() { i0.ɵɵrestoreView(_r12); const _r7 = i0.ɵɵreference(5); const _r8 = i0.ɵɵreference(10); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.setDate(undefined, _r7.value, _r8.value); });
    i0.ɵɵtemplate(11, LpDateSelectorComponent_div_1_mat_option_11_Template, 2, 2, "mat-option", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.disabled)("min", ctx_r1.min ? ctx_r1.min.getFullYear() : null)("max", ctx_r1.max ? ctx_r1.max.getFullYear() : null)("value", ctx_r1.selectedDate ? ctx_r1.selectedDate.getFullYear().toString() : null);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.selectedDate ? ctx_r1.selectedDate.getMonth().toString() : null)("disabled", !_r7.value || ctx_r1.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.monthOptions);
} }
function LpDateSelectorComponent_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r14.label);
} }
function LpDateSelectorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, LpDateSelectorComponent_div_2_label_1_Template, 2, 1, "label", 18);
    i0.ɵɵelementStart(2, "input", 19, 20);
    i0.ɵɵlistener("ngModelChange", function LpDateSelectorComponent_div_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.setDate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "owl-date-time", null, 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r16 = i0.ɵɵreference(5);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("owlDateTime", _r16)("owlDateTimeTrigger", _r16)("disabled", ctx_r2.disabled)("placeholder", ctx_r2.placeholder)("min", ctx_r2.minDate)("max", ctx_r2.maxDate)("ngModel", ctx_r2.selectedDate);
} }
export class LpDateSelectorComponent {
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
LpDateSelectorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LpDateSelectorComponent, selectors: [["lp-date-selector"]], inputs: { dateFormat: "dateFormat", selectedDate: "selectedDate", minDate: "minDate", maxDate: "maxDate", placeholder: "placeholder", label: "label", disabled: "disabled" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => LpDateSelectorComponent),
                multi: true,
            }
        ])], decls: 3, vars: 3, consts: [["class", "div-date", "fxLayoutAlign", "center", 4, "ngIf"], ["class", "div-date", "fxLayout.gt-xs", "row", "fxLayoutAlign", "center", "fxLayout.xs", "column", 4, "ngIf"], ["class", "div-date", "fxLayout", "column", "fxLayoutAlign", "center", 4, "ngIf"], ["fxLayoutAlign", "center", 1, "div-date"], ["fxFlex", "100", "appearance", "fill"], ["name", "date", "matInput", "", 3, "min", "max", "disabled", "ngModel", "matDatepicker", "ngModelChange"], ["daySelection", ""], ["matSuffix", "", 3, "for"], ["picker", ""], ["fxLayout.gt-xs", "row", "fxLayoutAlign", "center", "fxLayout.xs", "column", 1, "div-date"], ["fxFlex", "40", "fxLayoutAlign", "center", "appearance", "fill"], ["matInput", "", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", "placeholder", "Year", 3, "disabled", "min", "max", "value", "keyup"], ["yearSelection", ""], [3, "value", "disabled", "selectionChange"], ["monthSelection", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["fxLayout", "column", "fxLayoutAlign", "center", 1, "div-date"], ["for", "endDate", 4, "ngIf"], ["required", "", "matInput", "", "readonly", "", 1, "input-date", 3, "owlDateTime", "owlDateTimeTrigger", "disabled", "placeholder", "min", "max", "ngModel", "ngModelChange"], ["timeSelection", ""], ["dt2", ""], ["for", "endDate"]], template: function LpDateSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, LpDateSelectorComponent_div_0_Template, 9, 7, "div", 0);
        i0.ɵɵtemplate(1, LpDateSelectorComponent_div_1_Template, 12, 7, "div", 1);
        i0.ɵɵtemplate(2, LpDateSelectorComponent_div_2_Template, 6, 8, "div", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.dateFormat === "day");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.dateFormat === "month");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.dateFormat === "time");
    } }, directives: [i1.NgIf, i2.MatFormField, i2.MatLabel, i3.MatInput, i4.DefaultValueAccessor, i5.MatDatepickerInput, i4.NgControlStatus, i4.NgModel, i5.MatDatepickerToggle, i2.MatSuffix, i5.MatDatepicker, i6.MatSelect, i1.NgForOf, i7.MatOption, i8.OwlDateTimeInputDirective, i4.RequiredValidator, i8.OwlDateTimeTriggerDirective, i8.OwlDateTimeComponent], styles: [".div-date[_ngcontent-%COMP%]{margin:5px}.div-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{cursor:pointer}.div-date[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:200px!important} .mat-calendar-content{padding:0 40px 8px 8px!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LpDateSelectorComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtZGF0ZS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvMzQ2OTUvRGVza3RvcC9EUkFGVC90ZWFtLW1hbmFnZXItZnJvbnRlbmQvcHJvamVjdHMvbHAtZGF0ZS1zZWxlY3Rvci9zcmMvIiwic291cmNlcyI6WyJsaWIvbHAtZGF0ZS1zZWxlY3Rvci9scC1kYXRlLXNlbGVjdG9yLmNvbXBvbmVudC50cyIsImxpYi9scC1kYXRlLXNlbGVjdG9yL2xwLWRhdGUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7SUNBdkMsOEJBQ0k7SUFBQSx5Q0FDSTtJQUFBLGlDQUFXO0lBQUEsWUFBUztJQUFBLGlCQUFZO0lBQ2hDLG1DQUNBO0lBRHVDLG1OQUFpQztJQUF4RSxpQkFDQTtJQUFBLDJDQUF3RTtJQUN4RSwwQ0FBeUM7SUFDN0MsaUJBQWlCO0lBQ3JCLGlCQUFNOzs7O0lBTGEsZUFBUztJQUFULGtDQUFTO0lBQ2IsZUFBZTtJQUFmLG9DQUFlLHVCQUFBLDZCQUFBLGdDQUFBLHNCQUFBO0lBQ1csZUFBYztJQUFkLHlCQUFjOzs7SUFjdkMsc0NBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQWE7Ozs7SUFGa0Msb0RBQTJCO0lBQ3RFLGVBQ0o7SUFESSwwQ0FDSjs7OztJQVpoQiw4QkFDSTtJQUFBLDBDQUNRO0lBQUEsaUNBQVc7SUFBQSxvQkFBSTtJQUFBLGlCQUFZO0lBQzNCLHFDQUVSO0lBRitHLG9QQUFpQixJQUFJLDJCQUE0QztJQUF4SyxpQkFFUjtJQUFBLGlCQUFpQjtJQUNqQiwwQ0FDUTtJQUFBLGlDQUFXO0lB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QUFDO3dCQUN0RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IExwRGF0ZSB9IGZyb20gJ2xwLW9wZXJhdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdscC1kYXRlLXNlbGVjdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbHAtZGF0ZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbHAtZGF0ZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHBEYXRlU2VsZWN0b3JDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMcERhdGVTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzICBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQ6IHN0cmluZ1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkRGF0ZTogRGF0ZSBcclxuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlXHJcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZVxyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmdcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nXHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBtb250aE9wdGlvbnMgPSBbJ2phbnVhcnknLCAnZmVicnVhcnknLCAnbWFyY2gnLCAnYXByaWwnLCAnbWF5JywgJ2p1bmUnLCAnanVseScsICdhdWd1c3QnLCAnc2VwdGVtYmVyJywgJ29jdG9iZXInLCAnbm92ZW1iZXInLCAnZGVjZW1iZXInXVxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XHJcbiAgcHVibGljIHdyaXRlVmFsdWUoZGF0ZTogRGF0ZSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xyXG4gIH1cclxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7IHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47IH1cclxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoKSB7IH1cclxuICBzZXREYXRlKGRhdGU/OiBEYXRlLCB5ZWFyPzogc3RyaW5nLCBtb250aD86IHN0cmluZykge1xyXG4gICAgaWYoZGF0ZSl7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcclxuICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5zZWxlY3RlZERhdGUpXHJcbiAgICB9ZWxzZSBpZih5ZWFyLmxlbmd0aCA9PT0gNCl7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoTnVtYmVyKHllYXIpLCBOdW1iZXIobW9udGgpLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5zZWxlY3RlZERhdGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIG1vbnRoVmFsdWUobW9udGg6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIExwRGF0ZS5tb250aFZhbHVlKG1vbnRoKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiXG5cbjxkaXYgY2xhc3M9XCJkaXYtZGF0ZVwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiAqbmdJZj1cImRhdGVGb3JtYXQgPT09ICdkYXknXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjEwMFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+e3tsYWJlbH19PC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBbbWluXT1cIm1pbkRhdGVcIiBbbWF4XT1cIm1heERhdGVcIiAobmdNb2RlbENoYW5nZSk9XCJzZXREYXRlKCRldmVudClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAgW25nTW9kZWxdPVwic2VsZWN0ZWREYXRlXCIgbmFtZT1cImRhdGVcIiAjZGF5U2VsZWN0aW9uIG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiPlxuICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbjxkaXYgIGNsYXNzPVwiZGl2LWRhdGVcIiAqbmdJZj1cImRhdGVGb3JtYXQgPT09ICdtb250aCdcIiBmeExheW91dC5ndC14cz1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dC54cz1cImNvbHVtblwiPlxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI0MFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5ZZWFyPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW21pbl09XCJtaW4gPyBtaW4uZ2V0RnVsbFllYXIoKTpudWxsXCIgW21heF09XCJtYXggPyBtYXguZ2V0RnVsbFllYXIoKTpudWxsXCIgKGtleXVwKT1cInNldERhdGUobnVsbCx5ZWFyU2VsZWN0aW9uLnZhbHVlLCBtb250aFNlbGVjdGlvbi52YWx1ZSlcIiAgI3llYXJTZWxlY3Rpb24gW3ZhbHVlXT1cInNlbGVjdGVkRGF0ZSA/IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkgOiBudWxsXCIgIG1hdElucHV0XG4gICAgICAgICAgICAgICAgb25rZXlwcmVzcz1cInJldHVybiBldmVudC5jaGFyQ29kZSA+PSA0OCAmJiBldmVudC5jaGFyQ29kZSA8PSA1N1wiIHBsYWNlaG9sZGVyPVwiWWVhclwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjQwXCIgIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5Nb250aDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgKHNlbGVjdGlvbkNoYW5nZSk9XCJzZXREYXRlKHVuZGVmaW5lZCx5ZWFyU2VsZWN0aW9uLnZhbHVlLCBtb250aFNlbGVjdGlvbi52YWx1ZSlcIiAgI21vbnRoU2VsZWN0aW9uIFt2YWx1ZV09XCJzZWxlY3RlZERhdGUgPyBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKS50b1N0cmluZygpIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiF5ZWFyU2VsZWN0aW9uLnZhbHVlIHx8IGRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoIG9mIG1vbnRoT3B0aW9uc1wiIFt2YWx1ZV09XCJtb250aFZhbHVlKG1vbnRoKVwiPlxuICAgICAgICAgICAgICAgICAgICB7e21vbnRofX1cbiAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbjxkaXYgIGNsYXNzPVwiZGl2LWRhdGVcIiAqbmdJZj1cImRhdGVGb3JtYXQgPT09ICd0aW1lJ1wiIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8bGFiZWwgKm5nSWY9XCJsYWJlbFwiIGZvcj1cImVuZERhdGVcIj57e2xhYmVsfX08L2xhYmVsPlxuICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAjdGltZVNlbGVjdGlvbiBcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWRhdGVcIlxuICAgICAgICAgICAgICAgIFtvd2xEYXRlVGltZV09XCJkdDJcIlxuICAgICAgICAgICAgICAgIFtvd2xEYXRlVGltZVRyaWdnZXJdPVwiZHQyXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXREYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFttaW5dPVwibWluRGF0ZVwiIFxuICAgICAgICAgICAgICAgIFttYXhdPVwibWF4RGF0ZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgW25nTW9kZWxdPVwic2VsZWN0ZWREYXRlXCIgXG4gICAgICAgICAgICAgICAgbWF0SW5wdXQgXG4gICAgICAgICAgICAgICAgcmVhZG9ubHk+XG4gICAgICAgIDxvd2wtZGF0ZS10aW1lICNkdDI+PC9vd2wtZGF0ZS10aW1lPlxuPC9kaXY+XG5cbiJdfQ==