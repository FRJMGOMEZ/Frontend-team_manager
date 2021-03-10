(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/bottom-sheet'), require('@angular/common'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('lp-bottom-sheet-info', ['exports', '@angular/core', '@angular/material/bottom-sheet', '@angular/common', '@angular/material/icon'], factory) :
    (global = global || self, factory(global['lp-bottom-sheet-info'] = {}, global.ng.core, global.ng.material.bottomSheet, global.ng.common, global.ng.material.icon));
}(this, (function (exports, core, bottomSheet, common, icon) { 'use strict';

    var LpBottomSheetInfoComponent = /** @class */ (function () {
        function LpBottomSheetInfoComponent(_bottomSheet) {
            this._bottomSheet = _bottomSheet;
        }
        LpBottomSheetInfoComponent.prototype.ngOnInit = function () {
        };
        LpBottomSheetInfoComponent.prototype.openInfo = function () {
            this._bottomSheet.open(this.componentToShow);
        };
        return LpBottomSheetInfoComponent;
    }());
    LpBottomSheetInfoComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lp-bottom-sheet-info',
                    template: "<mat-icon  [style.margin]=\"'0px'\" color=\"accent\" (click)=\"openInfo()\">info</mat-icon>\r\n",
                    styles: ["mat-icon{font-size:25px}"]
                },] }
    ];
    LpBottomSheetInfoComponent.ctorParameters = function () { return [
        { type: bottomSheet.MatBottomSheet }
    ]; };
    LpBottomSheetInfoComponent.propDecorators = {
        componentToShow: [{ type: core.Input }]
    };

    var LpBottomSheetInfoModule = /** @class */ (function () {
        function LpBottomSheetInfoModule() {
        }
        return LpBottomSheetInfoModule;
    }());
    LpBottomSheetInfoModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [LpBottomSheetInfoComponent],
                    imports: [
                        common.CommonModule,
                        bottomSheet.MatBottomSheetModule,
                        icon.MatIconModule
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

    exports.LpBottomSheetInfoComponent = LpBottomSheetInfoComponent;
    exports.LpBottomSheetInfoModule = LpBottomSheetInfoModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lp-bottom-sheet-info.umd.js.map
