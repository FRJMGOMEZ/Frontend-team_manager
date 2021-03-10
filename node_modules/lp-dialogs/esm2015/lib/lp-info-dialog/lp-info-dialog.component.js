import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export class LpInfoDialogComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtaW5mby1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzLzM0Njk1L0Rlc2t0b3AvRFJBRlQvdGVhbS1tYW5hZ2VyLWZyb250ZW5kL3Byb2plY3RzL2xwLWRpYWxvZ3Mvc3JjLyIsInNvdXJjZXMiOlsibGliL2xwLWluZm8tZGlhbG9nL2xwLWluZm8tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT3pFLE1BQU0sT0FBTyxxQkFBcUI7SUFLaEMsWUFBb0IsU0FBOEMsRUFBbUMsSUFBSTtRQUFyRixjQUFTLEdBQVQsU0FBUyxDQUFxQztRQUFtQyxTQUFJLEdBQUosSUFBSSxDQUFBO0lBQUksQ0FBQztJQUM5RyxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRCw4Q0FBOEM7SUFDOUMsV0FBVyxLQUFLLENBQUM7OztZQXJCbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDRVQUE4Qzs7YUFFL0M7OztZQU5RLFlBQVk7NENBWWtELE1BQU0sU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbHAtaW5mby1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vbHAtaW5mby1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9scC1pbmZvLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExwSW5mb0RpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbWVzc2FnZTogc3RyaW5nXG4gIGl0ZW06IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8THBJbmZvRGlhbG9nQ29tcG9uZW50PiwgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YSkgeyB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZGF0YS5tZXNzYWdlO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEudGl0bGU7XG4gICAgdGhpcy5pdGVtID0gdGhpcy5kYXRhLml0ZW07XG4gIH1cbiAgaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKClcbiAgfVxuXG4gIC8vLyBNVVNUIENSRUFURSBBIEJBQ0tFTkQgVE8gUkVQT1JUIEVSUk9SUyAvLy9cbiAgcmVwb3J0RXJyb3IoKSB7IH1cblxufVxuIl19