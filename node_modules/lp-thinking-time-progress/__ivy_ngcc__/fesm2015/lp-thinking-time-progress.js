import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/material/progress-spinner';
import * as ɵngcc3 from '@angular/material/icon';

function LpThinkingTimeProgressComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelement(1, "mat-progress-spinner", 2);
    ɵngcc0.ɵɵelementStart(2, "mat-icon", 3);
    ɵngcc0.ɵɵlistener("click", function LpThinkingTimeProgressComponent_div_0_Template_mat_icon_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.stopProgress(); });
    ɵngcc0.ɵɵtext(3, "cancel");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("position", "relative");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r0.progress);
} }
class LpThinkingTimeProgressComponent {
    constructor() {
        this.progress = 0;
        this.show = false;
        this.velocity = 5;
        this.diameter = 60;
        this.end = new EventEmitter();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.show && this.show) {
            this.timeSubscription = interval(this.velocity * 30).subscribe(() => {
                if (this.progress <= 100) {
                    this.progress++;
                }
                else {
                    this.timeSubscription.unsubscribe();
                    this.progress = 0;
                    this.end.emit(true);
                }
            });
        }
        else {
            this.timeSubscription ? this.timeSubscription.unsubscribe() : null;
            this.progress = 0;
        }
    }
    stopProgress() {
        this.timeSubscription.unsubscribe();
        this.progress = 0;
        this.end.emit(false);
    }
    ngOnDestroy() {
        this.timeSubscription ? this.timeSubscription.unsubscribe() : null;
    }
}
LpThinkingTimeProgressComponent.ɵfac = function LpThinkingTimeProgressComponent_Factory(t) { return new (t || LpThinkingTimeProgressComponent)(); };
LpThinkingTimeProgressComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LpThinkingTimeProgressComponent, selectors: [["lp-thinking-time-progress"]], inputs: { progress: "progress", show: "show", velocity: "velocity", diameter: "diameter" }, outputs: { end: "end" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "div-thinking-time", 3, "position", 4, "ngIf"], [1, "div-thinking-time"], ["diameter", "60", "color", "primary", "mode", "determinate", 3, "value"], [1, "mat-icon-progress-cancel", 3, "click"]], template: function LpThinkingTimeProgressComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, LpThinkingTimeProgressComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.show);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.MatProgressSpinner, ɵngcc3.MatIcon], styles: [".div-thinking-time[_ngcontent-%COMP%]{height:60px;width:60px}.mat-icon-progress-cancel[_ngcontent-%COMP%]{position:absolute!important;right:30%;top:30%;z-index:88888}"] });
LpThinkingTimeProgressComponent.ctorParameters = () => [];
LpThinkingTimeProgressComponent.propDecorators = {
    progress: [{ type: Input }],
    show: [{ type: Input }],
    velocity: [{ type: Input }],
    diameter: [{ type: Input }],
    end: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpThinkingTimeProgressComponent, [{
        type: Component,
        args: [{
                selector: 'lp-thinking-time-progress',
                template: "\r\n  <div class=\"div-thinking-time\" [style.position]=\"'relative'\" *ngIf=\"show\">\r\n    <mat-progress-spinner\r\n         diameter=\"60\"\r\n         color=\"primary\"\r\n         mode=\"determinate\"\r\n         [value]=\"progress\">\r\n    </mat-progress-spinner>\r\n    <mat-icon (click)=\"stopProgress()\" class=\"mat-icon-progress-cancel\">cancel</mat-icon>\r\n  </div>",
                styles: [".div-thinking-time{height:60px;width:60px}.mat-icon-progress-cancel{position:absolute!important;right:30%;top:30%;z-index:88888}"]
            }]
    }], function () { return []; }, { progress: [{
            type: Input
        }], show: [{
            type: Input
        }], velocity: [{
            type: Input
        }], diameter: [{
            type: Input
        }], end: [{
            type: Output
        }] }); })();

class LpThinkingTimeProgressModule {
}
LpThinkingTimeProgressModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LpThinkingTimeProgressModule });
LpThinkingTimeProgressModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LpThinkingTimeProgressModule_Factory(t) { return new (t || LpThinkingTimeProgressModule)(); }, imports: [[
            CommonModule,
            MatIconModule,
            MatProgressSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LpThinkingTimeProgressModule, { declarations: function () { return [LpThinkingTimeProgressComponent]; }, imports: function () { return [CommonModule,
        MatIconModule,
        MatProgressSpinnerModule]; }, exports: function () { return [LpThinkingTimeProgressComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpThinkingTimeProgressModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    LpThinkingTimeProgressComponent
                ],
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatProgressSpinnerModule
                ],
                exports: [
                    LpThinkingTimeProgressComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of lp-thinking-time-progress
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpThinkingTimeProgressComponent, LpThinkingTimeProgressModule };

//# sourceMappingURL=lp-thinking-time-progress.js.map