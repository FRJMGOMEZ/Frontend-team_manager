import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { LpConfirmDialogComponent } from './lp-confirm-dialog/lp-confirm-dialog.component';
import { LpInfoDialogComponent } from './lp-info-dialog/lp-info-dialog.component';
export class LpDialogsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtZGlhbG9ncy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvMzQ2OTUvRGVza3RvcC9EUkFGVC90ZWFtLW1hbmFnZXItZnJvbnRlbmQvcHJvamVjdHMvbHAtZGlhbG9ncy9zcmMvIiwic291cmNlcyI6WyJsaWIvbHAtZGlhbG9ncy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBV2xGLE1BQU0sT0FBTyxlQUFlOzs7WUFUM0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHdCQUF3QixFQUFDLHFCQUFxQixDQUFDO2dCQUM5RCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO2lCQUNoQjtnQkFDRCxTQUFTLEVBQUMsRUFBRTtnQkFDWixPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxxQkFBcUIsQ0FBQzthQUMzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IExwQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vbHAtY29uZmlybS1kaWFsb2cvbHAtY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IExwSW5mb0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vbHAtaW5mby1kaWFsb2cvbHAtaW5mby1kaWFsb2cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHBDb25maXJtRGlhbG9nQ29tcG9uZW50LExwSW5mb0RpYWxvZ0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczpbXSxcbiAgZXhwb3J0czogW0xwQ29uZmlybURpYWxvZ0NvbXBvbmVudCwgTHBJbmZvRGlhbG9nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMcERpYWxvZ3NNb2R1bGUgeyB9XG4iXX0=