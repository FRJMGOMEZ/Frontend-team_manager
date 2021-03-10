import { Component, Input, NgModule } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

class LpBottomSheetInfoComponent {
    constructor(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
    }
    ngOnInit() {
    }
    openInfo() {
        this._bottomSheet.open(this.componentToShow);
    }
}
LpBottomSheetInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'lp-bottom-sheet-info',
                template: "<mat-icon  [style.margin]=\"'0px'\" color=\"accent\" (click)=\"openInfo()\">info</mat-icon>\r\n",
                styles: ["mat-icon{font-size:25px}"]
            },] }
];
LpBottomSheetInfoComponent.ctorParameters = () => [
    { type: MatBottomSheet }
];
LpBottomSheetInfoComponent.propDecorators = {
    componentToShow: [{ type: Input }]
};

class LpBottomSheetInfoModule {
}
LpBottomSheetInfoModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LpBottomSheetInfoComponent],
                imports: [
                    CommonModule,
                    MatBottomSheetModule,
                    MatIconModule
                ],
                exports: [LpBottomSheetInfoComponent]
            },] }
];

/*
 * Public API Surface of lp-bottom-sheet-info
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpBottomSheetInfoComponent, LpBottomSheetInfoModule };
//# sourceMappingURL=lp-bottom-sheet-info.js.map
