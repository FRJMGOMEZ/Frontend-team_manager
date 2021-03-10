import { Component, Inject, NgModule, ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/dialog';
class LpInfoDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.message = this.data.message;
        this.title = this.data.title;
        this.item = this.data.item;
    }
    hideModal() {
        this.dialogRef.close();
    }
    /// MUST CREATE A BACKEND TO REPORT ERRORS ///
    reportError() { }
}
LpInfoDialogComponent.ɵfac = function LpInfoDialogComponent_Factory(t) { return new (t || LpInfoDialogComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MatDialogRef), ɵngcc0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
LpInfoDialogComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LpInfoDialogComponent, selectors: [["app-lp-info-dialog"]], decls: 11, vars: 3, consts: [["mat-dialog-title", ""], [1, "div-message"], [1, "mat-raised-button", 3, "click"]], template: function LpInfoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h2", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "mat-dialog-content");
        ɵngcc0.ɵɵelementStart(3, "p");
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 1);
        ɵngcc0.ɵɵelementStart(6, "p");
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "mat-dialog-actions");
        ɵngcc0.ɵɵelementStart(9, "button", 2);
        ɵngcc0.ɵɵlistener("click", function LpInfoDialogComponent_Template_button_click_9_listener() { return ctx.hideModal(); });
        ɵngcc0.ɵɵtext(10, "Close");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.title, " ");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.item, " ");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.message);
    } }, directives: [ɵngcc1.MatDialogTitle, ɵngcc1.MatDialogContent, ɵngcc1.MatDialogActions], styles: [".div-message[_ngcontent-%COMP%]{max-width:35vw}.div-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;word-break:break-all}"] });
LpInfoDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpInfoDialogComponent, [{
        type: Component,
        args: [{
                selector: 'app-lp-info-dialog',
                template: "<h2 mat-dialog-title> {{title}} </h2>\n<mat-dialog-content>\n    <p >\n        {{item}}\n    </p>\n    <div class=\"div-message\" >\n       <p>{{message}}</p>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button class=\"mat-raised-button\" (click)=\"hideModal()\">Close</button>\n</mat-dialog-actions>\n",
                styles: [".div-message{max-width:35vw}.div-message p{text-align:center;word-break:break-all}"]
            }]
    }], function () { return [{ type: ɵngcc1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

class LpConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.message = this.data.message;
        this.title = this.data.title;
    }
    hideModal(accepted) {
        this.dialogRef.close(accepted);
    }
}
LpConfirmDialogComponent.ɵfac = function LpConfirmDialogComponent_Factory(t) { return new (t || LpConfirmDialogComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MatDialogRef), ɵngcc0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
LpConfirmDialogComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LpConfirmDialogComponent, selectors: [["app-lp-confirm-dialog"]], decls: 10, vars: 2, consts: [["mat-dialog-title", ""], [1, "mat-raised-button", 3, "click"]], template: function LpConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h2", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "mat-dialog-content");
        ɵngcc0.ɵɵelementStart(3, "p");
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "mat-dialog-actions");
        ɵngcc0.ɵɵelementStart(6, "button", 1);
        ɵngcc0.ɵɵlistener("click", function LpConfirmDialogComponent_Template_button_click_6_listener() { return ctx.hideModal(true); });
        ɵngcc0.ɵɵtext(7, "Accept");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "button", 1);
        ɵngcc0.ɵɵlistener("click", function LpConfirmDialogComponent_Template_button_click_8_listener() { return ctx.hideModal(false); });
        ɵngcc0.ɵɵtext(9, "Cancel");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.title, " ");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.message, " ");
    } }, directives: [ɵngcc1.MatDialogTitle, ɵngcc1.MatDialogContent, ɵngcc1.MatDialogActions], styles: [""] });
LpConfirmDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpConfirmDialogComponent, [{
        type: Component,
        args: [{
                selector: 'app-lp-confirm-dialog',
                template: " <h2 mat-dialog-title> {{title}} </h2>\n<mat-dialog-content>\n    <p>\n        {{message}}\n    </p>\n</mat-dialog-content>\n<mat-dialog-actions>\n<button class=\"mat-raised-button\" (click)=\"hideModal(true)\">Accept</button>\n<button class=\"mat-raised-button\" (click)=\"hideModal(false)\">Cancel</button>\n</mat-dialog-actions>",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

class LpDialogsModule {
}
LpDialogsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LpDialogsModule });
LpDialogsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LpDialogsModule_Factory(t) { return new (t || LpDialogsModule)(); }, providers: [], imports: [[
            CommonModule,
            MatDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LpDialogsModule, { declarations: function () { return [LpConfirmDialogComponent, LpInfoDialogComponent]; }, imports: function () { return [CommonModule,
        MatDialogModule]; }, exports: function () { return [LpConfirmDialogComponent, LpInfoDialogComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpDialogsModule, [{
        type: NgModule,
        args: [{
                declarations: [LpConfirmDialogComponent, LpInfoDialogComponent],
                imports: [
                    CommonModule,
                    MatDialogModule
                ],
                providers: [],
                exports: [LpConfirmDialogComponent, LpInfoDialogComponent]
            }]
    }], null, null); })();

class LpDialogsService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openConfirmDialog(title = 'CONFIRM DELETION', message = 'Are you sure?') {
        const dialog = new MatDialogConfig();
        dialog.disableClose = true;
        dialog.autoFocus = true;
        dialog.data = { title, message };
        let dialogRef = this.dialog.open(LpConfirmDialogComponent, dialog);
        return dialogRef.afterClosed();
    }
    openInfoDialog(message, title, item) {
        const dialog = new MatDialogConfig();
        dialog.disableClose = true;
        dialog.autoFocus = true;
        dialog.data = { message, title, item: item ? item : null };
        let dialogRef = this.dialog.open(LpInfoDialogComponent, dialog);
        return dialogRef.afterClosed();
    }
}
LpDialogsService.ɵfac = function LpDialogsService_Factory(t) { return new (t || LpDialogsService)(ɵngcc0.ɵɵinject(ɵngcc1.MatDialog)); };
LpDialogsService.ɵprov = ɵɵdefineInjectable({ factory: function LpDialogsService_Factory() { return new LpDialogsService(ɵɵinject(MatDialog)); }, token: LpDialogsService, providedIn: LpDialogsModule });
LpDialogsService.ctorParameters = () => [
    { type: MatDialog }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LpDialogsService, [{
        type: Injectable,
        args: [{
                providedIn: LpDialogsModule
            }]
    }], function () { return [{ type: ɵngcc1.MatDialog }]; }, null); })();

/*
 * Public API Surface of lp-dialogs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpConfirmDialogComponent, LpDialogsModule, LpDialogsService, LpInfoDialogComponent };

//# sourceMappingURL=lp-dialogs.js.map