import { Pipe, NgModule } from '@angular/core';

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
LpParseDatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'lpParseDate'
            },] }
];

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
LpParseHourPipe.decorators = [
    { type: Pipe, args: [{
                name: 'lpParseHour'
            },] }
];

class LpDatePipesModule {
}
LpDatePipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LpParseDatePipe, LpParseHourPipe],
                imports: [],
                exports: [LpParseDatePipe, LpParseHourPipe]
            },] }
];

/*
 * Public API Surface of lp-date-pipes
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpDatePipesModule, LpParseDatePipe, LpParseHourPipe };
//# sourceMappingURL=lp-date-pipes.js.map
