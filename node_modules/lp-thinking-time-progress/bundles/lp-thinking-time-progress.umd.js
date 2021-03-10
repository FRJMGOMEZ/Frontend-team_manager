(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/progress-spinner')) :
    typeof define === 'function' && define.amd ? define('lp-thinking-time-progress', ['exports', '@angular/core', 'rxjs', '@angular/common', '@angular/material/icon', '@angular/material/progress-spinner'], factory) :
    (global = global || self, factory(global['lp-thinking-time-progress'] = {}, global.ng.core, global.rxjs, global.ng.common, global.ng.material.icon, global.ng.material.progressSpinner));
}(this, (function (exports, core, rxjs, common, icon, progressSpinner) { 'use strict';

    var LpThinkingTimeProgressComponent = /** @class */ (function () {
        function LpThinkingTimeProgressComponent() {
            this.progress = 0;
            this.show = false;
            this.velocity = 5;
            this.diameter = 60;
            this.end = new core.EventEmitter();
        }
        LpThinkingTimeProgressComponent.prototype.ngOnInit = function () {
        };
        LpThinkingTimeProgressComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.show && this.show) {
                this.timeSubscription = rxjs.interval(this.velocity * 30).subscribe(function () {
                    if (_this.progress <= 100) {
                        _this.progress++;
                    }
                    else {
                        _this.timeSubscription.unsubscribe();
                        _this.progress = 0;
                        _this.end.emit(true);
                    }
                });
            }
            else {
                this.timeSubscription ? this.timeSubscription.unsubscribe() : null;
                this.progress = 0;
            }
        };
        LpThinkingTimeProgressComponent.prototype.stopProgress = function () {
            this.timeSubscription.unsubscribe();
            this.progress = 0;
            this.end.emit(false);
        };
        LpThinkingTimeProgressComponent.prototype.ngOnDestroy = function () {
            this.timeSubscription ? this.timeSubscription.unsubscribe() : null;
        };
        return LpThinkingTimeProgressComponent;
    }());
    LpThinkingTimeProgressComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lp-thinking-time-progress',
                    template: "\r\n  <div class=\"div-thinking-time\" [style.position]=\"'relative'\" *ngIf=\"show\">\r\n    <mat-progress-spinner\r\n         diameter=\"60\"\r\n         color=\"primary\"\r\n         mode=\"determinate\"\r\n         [value]=\"progress\">\r\n    </mat-progress-spinner>\r\n    <mat-icon (click)=\"stopProgress()\" class=\"mat-icon-progress-cancel\">cancel</mat-icon>\r\n  </div>",
                    styles: [".div-thinking-time{height:60px;width:60px}.mat-icon-progress-cancel{position:absolute!important;right:30%;top:30%;z-index:88888}"]
                },] }
    ];
    LpThinkingTimeProgressComponent.ctorParameters = function () { return []; };
    LpThinkingTimeProgressComponent.propDecorators = {
        progress: [{ type: core.Input }],
        show: [{ type: core.Input }],
        velocity: [{ type: core.Input }],
        diameter: [{ type: core.Input }],
        end: [{ type: core.Output }]
    };

    var LpThinkingTimeProgressModule = /** @class */ (function () {
        function LpThinkingTimeProgressModule() {
        }
        return LpThinkingTimeProgressModule;
    }());
    LpThinkingTimeProgressModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        LpThinkingTimeProgressComponent
                    ],
                    imports: [
                        common.CommonModule,
                        icon.MatIconModule,
                        progressSpinner.MatProgressSpinnerModule
                    ],
                    exports: [
                        LpThinkingTimeProgressComponent
                    ]
                },] }
    ];

    /*
     * Public API Surface of lp-thinking-time-progress
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LpThinkingTimeProgressComponent = LpThinkingTimeProgressComponent;
    exports.LpThinkingTimeProgressModule = LpThinkingTimeProgressModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lp-thinking-time-progress.umd.js.map
