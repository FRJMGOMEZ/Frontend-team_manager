import { Pipe, NgModule } from '@angular/core';

import * as ɵngcc0 from '@angular/core';
class LpParseDatePipe {
    transform(time, to) {
        let converted;
        if (time === null) {
            return null;
        }
        switch (to) {
            case 'miliseconds':
                converted = time.getTime();
                break;
            case 'date':
                converted = new Date(time);
                break;
        }
        return converted;
    }
}
LpParseDatePipe.ɵfac = function LpParseDatePipe_Factory(t) { return new (t || LpParseDatePipe)(); };
LpParseDatePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "lpParseDate", type: LpParseDatePipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpParseDatePipe, [{
        type: Pipe,
        args: [{
                name: 'lpParseDate'
            }]
    }], null, null); })();

class LpParseHourPipe {
    transform(hour, format) {
        if (hour === null) {
            return null;
        }
        let result;
        switch (format) {
            case 'AM/PM':
                result = (Number(hour.split(':')[0]) - 12) > 0 ? `${Number(hour.split(':')[0]) - 12}:${Number(hour.split(':')[1])} PM` : `${hour} AM`;
                break;
            case '24':
                result = hour.split(' ')[hour.split(' ').length - 1] === 'AM' ? `${hour.split(' ')[0]}` : `${Number(hour.split(' ')[0].split(':')[0]) + 12}:${hour.split(' ')[0].split(':')[1]}`;
                break;
        }
        return result;
    }
}
LpParseHourPipe.ɵfac = function LpParseHourPipe_Factory(t) { return new (t || LpParseHourPipe)(); };
LpParseHourPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "lpParseHour", type: LpParseHourPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpParseHourPipe, [{
        type: Pipe,
        args: [{
                name: 'lpParseHour'
            }]
    }], null, null); })();

class LpDatePipesModule {
}
LpDatePipesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LpDatePipesModule });
LpDatePipesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LpDatePipesModule_Factory(t) { return new (t || LpDatePipesModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LpDatePipesModule, { declarations: [LpParseDatePipe, LpParseHourPipe], exports: [LpParseDatePipe, LpParseHourPipe] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpDatePipesModule, [{
        type: NgModule,
        args: [{
                declarations: [LpParseDatePipe, LpParseHourPipe],
                imports: [],
                exports: [LpParseDatePipe, LpParseHourPipe]
            }]
    }], null, null); })();

/*
 * Public API Surface of lp-date-pipes
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpDatePipesModule, LpParseDatePipe, LpParseHourPipe };

//# sourceMappingURL=lp-date-pipes.js.map