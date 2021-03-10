import { Component, Input, NgModule } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/bottom-sheet';
import * as ɵngcc2 from '@angular/material/icon';
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
LpBottomSheetInfoComponent.ɵfac = function LpBottomSheetInfoComponent_Factory(t) { return new (t || LpBottomSheetInfoComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MatBottomSheet)); };
LpBottomSheetInfoComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LpBottomSheetInfoComponent, selectors: [["lp-bottom-sheet-info"]], inputs: { componentToShow: "componentToShow" }, decls: 2, vars: 2, consts: [["color", "accent", 3, "click"]], template: function LpBottomSheetInfoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mat-icon", 0);
        ɵngcc0.ɵɵlistener("click", function LpBottomSheetInfoComponent_Template_mat_icon_click_0_listener() { return ctx.openInfo(); });
        ɵngcc0.ɵɵtext(1, "info");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("margin", "0px");
    } }, directives: [ɵngcc2.MatIcon], styles: ["mat-icon[_ngcontent-%COMP%]{font-size:25px}"] });
LpBottomSheetInfoComponent.ctorParameters = () => [
    { type: MatBottomSheet }
];
LpBottomSheetInfoComponent.propDecorators = {
    componentToShow: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpBottomSheetInfoComponent, [{
        type: Component,
        args: [{
                selector: 'lp-bottom-sheet-info',
                template: "<mat-icon  [style.margin]=\"'0px'\" color=\"accent\" (click)=\"openInfo()\">info</mat-icon>\r\n",
                styles: ["mat-icon{font-size:25px}"]
            }]
    }], function () { return [{ type: ɵngcc1.MatBottomSheet }]; }, { componentToShow: [{
            type: Input
        }] }); })();

class LpBottomSheetInfoModule {
}
LpBottomSheetInfoModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LpBottomSheetInfoModule });
LpBottomSheetInfoModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LpBottomSheetInfoModule_Factory(t) { return new (t || LpBottomSheetInfoModule)(); }, imports: [[
            CommonModule,
            MatBottomSheetModule,
            MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LpBottomSheetInfoModule, { declarations: function () { return [LpBottomSheetInfoComponent]; }, imports: function () { return [CommonModule,
        MatBottomSheetModule,
        MatIconModule]; }, exports: function () { return [LpBottomSheetInfoComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpBottomSheetInfoModule, [{
        type: NgModule,
        args: [{
                declarations: [LpBottomSheetInfoComponent],
                imports: [
                    CommonModule,
                    MatBottomSheetModule,
                    MatIconModule
                ],
                exports: [LpBottomSheetInfoComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of lp-bottom-sheet-info
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpBottomSheetInfoComponent, LpBottomSheetInfoModule };

//# sourceMappingURL=lp-bottom-sheet-info.js.map