(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/dialog'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('lp-dialogs', ['exports', '@angular/core', '@angular/material/dialog', '@angular/common'], factory) :
    (global = global || self, factory(global['lp-dialogs'] = {}, global.ng.core, global.ng.material.dialog, global.ng.common));
}(this, (function (exports, i0, i1, common) { 'use strict';

    var LpInfoDialogComponent = /** @class */ (function () {
        function LpInfoDialogComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        LpInfoDialogComponent.prototype.ngOnInit = function () {
            this.message = this.data.message;
            this.title = this.data.title;
            this.item = this.data.item;
        };
        LpInfoDialogComponent.prototype.hideModal = function () {
            this.dialogRef.close();
        };
        /// MUST CREATE A BACKEND TO REPORT ERRORS ///
        LpInfoDialogComponent.prototype.reportError = function () { };
        return LpInfoDialogComponent;
    }());
    LpInfoDialogComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-lp-info-dialog',
                    template: "<h2 mat-dialog-title> {{title}} </h2>\n<mat-dialog-content>\n    <p >\n        {{item}}\n    </p>\n    <div class=\"div-message\" >\n       <p>{{message}}</p>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button class=\"mat-raised-button\" (click)=\"hideModal()\">Close</button>\n</mat-dialog-actions>\n",
                    styles: [".div-message{max-width:35vw}.div-message p{text-align:center;word-break:break-all}"]
                },] }
    ];
    LpInfoDialogComponent.ctorParameters = function () { return [
        { type: i1.MatDialogRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.MAT_DIALOG_DATA,] }] }
    ]; };

    var LpConfirmDialogComponent = /** @class */ (function () {
        function LpConfirmDialogComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        LpConfirmDialogComponent.prototype.ngOnInit = function () {
            this.message = this.data.message;
            this.title = this.data.title;
        };
        LpConfirmDialogComponent.prototype.hideModal = function (accepted) {
            this.dialogRef.close(accepted);
        };
        return LpConfirmDialogComponent;
    }());
    LpConfirmDialogComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-lp-confirm-dialog',
                    template: " <h2 mat-dialog-title> {{title}} </h2>\n<mat-dialog-content>\n    <p>\n        {{message}}\n    </p>\n</mat-dialog-content>\n<mat-dialog-actions>\n<button class=\"mat-raised-button\" (click)=\"hideModal(true)\">Accept</button>\n<button class=\"mat-raised-button\" (click)=\"hideModal(false)\">Cancel</button>\n</mat-dialog-actions>",
                    styles: [""]
                },] }
    ];
    LpConfirmDialogComponent.ctorParameters = function () { return [
        { type: i1.MatDialogRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.MAT_DIALOG_DATA,] }] }
    ]; };

    var LpDialogsModule = /** @class */ (function () {
        function LpDialogsModule() {
        }
        return LpDialogsModule;
    }());
    LpDialogsModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LpConfirmDialogComponent, LpInfoDialogComponent],
                    imports: [
                        common.CommonModule,
                        i1.MatDialogModule
                    ],
                    providers: [],
                    exports: [LpConfirmDialogComponent, LpInfoDialogComponent]
                },] }
    ];

    var LpDialogsService = /** @class */ (function () {
        function LpDialogsService(dialog) {
            this.dialog = dialog;
        }
        LpDialogsService.prototype.openConfirmDialog = function (title, message) {
            if (title === void 0) { title = 'CONFIRM DELETION'; }
            if (message === void 0) { message = 'Are you sure?'; }
            var dialog = new i1.MatDialogConfig();
            dialog.disableClose = true;
            dialog.autoFocus = true;
            dialog.data = { title: title, message: message };
            var dialogRef = this.dialog.open(LpConfirmDialogComponent, dialog);
            return dialogRef.afterClosed();
        };
        LpDialogsService.prototype.openInfoDialog = function (message, title, item) {
            var dialog = new i1.MatDialogConfig();
            dialog.disableClose = true;
            dialog.autoFocus = true;
            dialog.data = { message: message, title: title, item: item ? item : null };
            var dialogRef = this.dialog.open(LpInfoDialogComponent, dialog);
            return dialogRef.afterClosed();
        };
        return LpDialogsService;
    }());
    LpDialogsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LpDialogsService_Factory() { return new LpDialogsService(i0.ɵɵinject(i1.MatDialog)); }, token: LpDialogsService, providedIn: LpDialogsModule });
    LpDialogsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: LpDialogsModule
                },] }
    ];
    LpDialogsService.ctorParameters = function () { return [
        { type: i1.MatDialog }
    ]; };

    /*
     * Public API Surface of lp-dialogs
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LpConfirmDialogComponent = LpConfirmDialogComponent;
    exports.LpDialogsModule = LpDialogsModule;
    exports.LpDialogsService = LpDialogsService;
    exports.LpInfoDialogComponent = LpInfoDialogComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lp-dialogs.umd.js.map
