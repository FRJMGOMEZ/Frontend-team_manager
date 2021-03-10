import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class LpDateSelectorComponent implements ControlValueAccessor {
    dateFormat: string;
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    placeholder: string;
    label: string;
    disabled: boolean;
    monthOptions: string[];
    constructor();
    private propagateChange;
    writeValue(date: Date): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    setDate(date?: Date, year?: string, month?: string): void;
    monthValue(month: string): any;
    static ɵfac: i0.ɵɵFactoryDef<LpDateSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LpDateSelectorComponent, "lp-date-selector", never, { "dateFormat": "dateFormat"; "selectedDate": "selectedDate"; "minDate": "minDate"; "maxDate": "maxDate"; "placeholder": "placeholder"; "label": "label"; "disabled": "disabled"; }, {}, never, never>;
}
