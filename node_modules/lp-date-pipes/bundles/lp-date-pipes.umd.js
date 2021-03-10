(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('lp-date-pipes', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['lp-date-pipes'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var LpParseDatePipe = /** @class */ (function () {
        function LpParseDatePipe() {
        }
        LpParseDatePipe.prototype.transform = function (time, to) {
            var converted;
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
        };
        return LpParseDatePipe;
    }());
    LpParseDatePipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'lpParseDate'
                },] }
    ];

    var LpParseHourPipe = /** @class */ (function () {
        function LpParseHourPipe() {
        }
        LpParseHourPipe.prototype.transform = function (hour, format) {
            if (hour === null) {
                return null;
            }
            var result;
            switch (format) {
                case 'AM/PM':
                    result = (Number(hour.split(':')[0]) - 12) > 0 ? Number(hour.split(':')[0]) - 12 + ":" + Number(hour.split(':')[1]) + " PM" : hour + " AM";
                    break;
                case '24':
                    result = hour.split(' ')[hour.split(' ').length - 1] === 'AM' ? "" + hour.split(' ')[0] : Number(hour.split(' ')[0].split(':')[0]) + 12 + ":" + hour.split(' ')[0].split(':')[1];
                    break;
            }
            return result;
        };
        return LpParseHourPipe;
    }());
    LpParseHourPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'lpParseHour'
                },] }
    ];

    var LpDatePipesModule = /** @class */ (function () {
        function LpDatePipesModule() {
        }
        return LpDatePipesModule;
    }());
    LpDatePipesModule.decorators = [
        { type: core.NgModule, args: [{
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

    exports.LpDatePipesModule = LpDatePipesModule;
    exports.LpParseDatePipe = LpParseDatePipe;
    exports.LpParseHourPipe = LpParseHourPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lp-date-pipes.umd.js.map
