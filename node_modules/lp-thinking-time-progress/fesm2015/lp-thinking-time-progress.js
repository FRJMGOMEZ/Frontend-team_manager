import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
LpThinkingTimeProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'lp-thinking-time-progress',
                template: "\r\n  <div class=\"div-thinking-time\" [style.position]=\"'relative'\" *ngIf=\"show\">\r\n    <mat-progress-spinner\r\n         diameter=\"60\"\r\n         color=\"primary\"\r\n         mode=\"determinate\"\r\n         [value]=\"progress\">\r\n    </mat-progress-spinner>\r\n    <mat-icon (click)=\"stopProgress()\" class=\"mat-icon-progress-cancel\">cancel</mat-icon>\r\n  </div>",
                styles: [".div-thinking-time{height:60px;width:60px}.mat-icon-progress-cancel{position:absolute!important;right:30%;top:30%;z-index:88888}"]
            },] }
];
LpThinkingTimeProgressComponent.ctorParameters = () => [];
LpThinkingTimeProgressComponent.propDecorators = {
    progress: [{ type: Input }],
    show: [{ type: Input }],
    velocity: [{ type: Input }],
    diameter: [{ type: Input }],
    end: [{ type: Output }]
};

class LpThinkingTimeProgressModule {
}
LpThinkingTimeProgressModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/*
 * Public API Surface of lp-thinking-time-progress
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpThinkingTimeProgressComponent, LpThinkingTimeProgressModule };
//# sourceMappingURL=lp-thinking-time-progress.js.map
