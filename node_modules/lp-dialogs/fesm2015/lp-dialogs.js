import { Component, Inject, NgModule, ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

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
LpInfoDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-lp-info-dialog',
                template: "<h2 mat-dialog-title> {{title}} </h2>\n<mat-dialog-content>\n    <p >\n        {{item}}\n    </p>\n    <div class=\"div-message\" >\n       <p>{{message}}</p>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button class=\"mat-raised-button\" (click)=\"hideModal()\">Close</button>\n</mat-dialog-actions>\n",
                styles: [".div-message{max-width:35vw}.div-message p{text-align:center;word-break:break-all}"]
            },] }
];
LpInfoDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

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
LpConfirmDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-lp-confirm-dialog',
                template: " <h2 mat-dialog-title> {{title}} </h2>\n<mat-dialog-content>\n    <p>\n        {{message}}\n    </p>\n</mat-dialog-content>\n<mat-dialog-actions>\n<button class=\"mat-raised-button\" (click)=\"hideModal(true)\">Accept</button>\n<button class=\"mat-raised-button\" (click)=\"hideModal(false)\">Cancel</button>\n</mat-dialog-actions>",
                styles: [""]
            },] }
];
LpConfirmDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

class LpDialogsModule {
}
LpDialogsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LpConfirmDialogComponent, LpInfoDialogComponent],
                imports: [
                    CommonModule,
                    MatDialogModule
                ],
                providers: [],
                exports: [LpConfirmDialogComponent, LpInfoDialogComponent]
            },] }
];

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
LpDialogsService.ɵprov = ɵɵdefineInjectable({ factory: function LpDialogsService_Factory() { return new LpDialogsService(ɵɵinject(MatDialog)); }, token: LpDialogsService, providedIn: LpDialogsModule });
LpDialogsService.decorators = [
    { type: Injectable, args: [{
                providedIn: LpDialogsModule
            },] }
];
LpDialogsService.ctorParameters = () => [
    { type: MatDialog }
];

/*
 * Public API Surface of lp-dialogs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpConfirmDialogComponent, LpDialogsModule, LpDialogsService, LpInfoDialogComponent };
//# sourceMappingURL=lp-dialogs.js.map
