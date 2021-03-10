import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export class LpConfirmDialogComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzLzM0Njk1L0Rlc2t0b3AvRFJBRlQvdGVhbS1tYW5hZ2VyLWZyb250ZW5kL3Byb2plY3RzL2xwLWRpYWxvZ3Mvc3JjLyIsInNvdXJjZXMiOlsibGliL2xwLWNvbmZpcm0tZGlhbG9nL2xwLWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT3pFLE1BQU0sT0FBTyx3QkFBd0I7SUFJbkMsWUFBb0IsU0FBa0QsRUFBbUMsSUFBSTtRQUF6RixjQUFTLEdBQVQsU0FBUyxDQUF5QztRQUFtQyxTQUFJLEdBQUosSUFBSSxDQUFBO0lBQUksQ0FBQztJQUVsSCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBaUI7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyx1VkFBaUQ7O2FBRWxEOzs7WUFOUSxZQUFZOzRDQVdzRCxNQUFNLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxwLWNvbmZpcm0tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xwLWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbHAtY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMcENvbmZpcm1EaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG1lc3NhZ2U6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8THBDb25maXJtRGlhbG9nQ29tcG9uZW50ID4sIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGEpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZGF0YS5tZXNzYWdlO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEudGl0bGU7XG4gIH1cblxuICBoaWRlTW9kYWwoYWNjZXB0ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShhY2NlcHRlZClcbiAgfVxuXG59XG4iXX0=