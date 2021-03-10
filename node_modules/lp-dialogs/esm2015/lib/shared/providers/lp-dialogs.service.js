import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LpInfoDialogComponent } from '../../lp-info-dialog/lp-info-dialog.component';
import { LpConfirmDialogComponent } from '../../lp-confirm-dialog/lp-confirm-dialog.component';
import { LpDialogsModule } from '../../lp-dialogs.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../lp-dialogs.module";
export class LpDialogsService {
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
LpDialogsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LpDialogsService_Factory() { return new LpDialogsService(i0.ɵɵinject(i1.MatDialog)); }, token: LpDialogsService, providedIn: i2.LpDialogsModule });
LpDialogsService.decorators = [
    { type: Injectable, args: [{
                providedIn: LpDialogsModule
            },] }
];
LpDialogsService.ctorParameters = () => [
    { type: MatDialog }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtZGlhbG9ncy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzLzM0Njk1L0Rlc2t0b3AvRFJBRlQvdGVhbS1tYW5hZ2VyLWZyb250ZW5kL3Byb2plY3RzL2xwLWRpYWxvZ3Mvc3JjLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9wcm92aWRlcnMvbHAtZGlhbG9ncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFFcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBSzFELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFJLENBQUM7SUFDMUMsaUJBQWlCLENBQUMsUUFBZ0Isa0JBQWtCLEVBQUUsVUFBa0IsZUFBZTtRQUNyRixNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUE7UUFDaEMsSUFBSSxTQUFTLEdBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ3JGLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFDRCxjQUFjLENBQUMsT0FBZSxFQUFFLEtBQWEsRUFBRSxJQUFhO1FBQzFELE1BQU0sTUFBTSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDckMsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUMxRCxJQUFJLFNBQVMsR0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDbEYsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDaEMsQ0FBQzs7OztZQXBCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLGVBQWU7YUFDNUI7OztZQVJRLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ0NvbmZpZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExwSW5mb0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xwLWluZm8tZGlhbG9nL2xwLWluZm8tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMcENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9scC1jb25maXJtLWRpYWxvZy9scC1jb25maXJtLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTHBEaWFsb2dzTW9kdWxlIH0gZnJvbSAnLi4vLi4vbHAtZGlhbG9ncy5tb2R1bGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IExwRGlhbG9nc01vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBMcERpYWxvZ3NTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG4gIG9wZW5Db25maXJtRGlhbG9nKHRpdGxlOiBzdHJpbmcgPSAnQ09ORklSTSBERUxFVElPTicsIG1lc3NhZ2U6IHN0cmluZyA9ICdBcmUgeW91IHN1cmU/Jyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZGlhbG9nID0gbmV3IE1hdERpYWxvZ0NvbmZpZygpO1xuICAgIGRpYWxvZy5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgIGRpYWxvZy5hdXRvRm9jdXMgPSB0cnVlO1xuICAgIGRpYWxvZy5kYXRhID0geyB0aXRsZSwgbWVzc2FnZSB9XG4gICAgbGV0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT4gPSB0aGlzLmRpYWxvZy5vcGVuKExwQ29uZmlybURpYWxvZ0NvbXBvbmVudCwgZGlhbG9nKVxuICAgIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKVxuICB9XG4gIG9wZW5JbmZvRGlhbG9nKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU6IHN0cmluZywgaXRlbT86IHN0cmluZykge1xuICAgIGNvbnN0IGRpYWxvZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcbiAgICBkaWFsb2cuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBkaWFsb2cuYXV0b0ZvY3VzID0gdHJ1ZTtcbiAgICBkaWFsb2cuZGF0YSA9IHsgbWVzc2FnZSwgdGl0bGUsIGl0ZW06IGl0ZW0gPyBpdGVtIDogbnVsbCB9XG4gICAgbGV0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT4gPSB0aGlzLmRpYWxvZy5vcGVuKExwSW5mb0RpYWxvZ0NvbXBvbmVudCwgZGlhbG9nKVxuICAgIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKVxuICB9XG59XG4iXX0=