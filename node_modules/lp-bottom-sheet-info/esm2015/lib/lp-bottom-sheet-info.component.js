import { Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
export class LpBottomSheetInfoComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtYm90dG9tLXNoZWV0LWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzLzM0Njk1L0Rlc2t0b3AvRFJBRlQvdGVhbS1tYW5hZ2VyLWZyb250ZW5kL3Byb2plY3RzL2xwLWJvdHRvbS1zaGVldC1pbmZvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9scC1ib3R0b20tc2hlZXQtaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBT2hFLE1BQU0sT0FBTywwQkFBMEI7SUFHckMsWUFBb0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO0lBQUksQ0FBQztJQUVyRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVE7UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDL0MsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDJHQUFvRDs7YUFFckQ7OztZQU5RLGNBQWM7Ozs4QkFTcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdscC1ib3R0b20tc2hlZXQtaW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9scC1ib3R0b20tc2hlZXQtaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xwLWJvdHRvbS1zaGVldC1pbmZvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTHBCb3R0b21TaGVldEluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbXBvbmVudFRvU2hvdzpDb21wb25lbnRUeXBlPGFueT5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0KSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9wZW5JbmZvKCl7XG4gICAgIHRoaXMuX2JvdHRvbVNoZWV0Lm9wZW4odGhpcy5jb21wb25lbnRUb1Nob3cpXG4gIH1cblxufVxuIl19