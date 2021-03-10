import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LpFilesUploaderComponent } from './lp-files-uploader.component';
import { LpFilesUploaderDirective } from './lp-files-uploader.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export class LpFilesUploaderModule {
}
LpFilesUploaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    LpFilesUploaderDirective,
                    LpFilesUploaderComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                exports: [
                    LpFilesUploaderDirective,
                    LpFilesUploaderComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtZmlsZXMtdXBsb2FkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzLzM0Njk1L0Rlc2t0b3AvRFJBRlQvdGVhbS1tYW5hZ2VyLWZyb250ZW5kL3Byb2plY3RzL2xwLWZpbGVzLXVwbG9hZGVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9scC1maWxlcy11cGxvYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZ0JsRSxNQUFNLE9BQU8scUJBQXFCOzs7WUFkakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFBQztnQkFDM0IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBQztvQkFDTix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDekI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHBGaWxlc1VwbG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9scC1maWxlcy11cGxvYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTHBGaWxlc1VwbG9hZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9scC1maWxlcy11cGxvYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExwRmlsZXNVcGxvYWRlckRpcmVjdGl2ZSxcbiAgICBMcEZpbGVzVXBsb2FkZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czpbXG4gICAgTHBGaWxlc1VwbG9hZGVyRGlyZWN0aXZlLFxuICAgIExwRmlsZXNVcGxvYWRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExwRmlsZXNVcGxvYWRlck1vZHVsZSB7IH1cbiJdfQ==