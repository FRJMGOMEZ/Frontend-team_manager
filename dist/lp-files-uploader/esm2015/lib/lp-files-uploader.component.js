import { Component, forwardRef, ViewChild, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { skip } from 'rxjs/operators';
export class LpFilesUploaderComponent {
    constructor() {
        /* VALIDATION CRITERIA */
        this.config = {};
        this.propagateChange = (_) => { };
    }
    validate() {
        return this.errors;
    }
    ngAfterViewInit() {
        if (this.trigger) {
            this.trigger.nativeElement.addEventListener('click', () => {
                this.fileInput.nativeElement.click();
            });
        }
        else {
            throw new Error('Component needs a trigger');
        }
        this.fileInputController.valueChanges.pipe(skip(1)).subscribe(() => {
            let errors = this.fileInputController.control.errors;
            if (errors) {
                this.errors = errors;
                this.propagateChange(null);
            }
            else {
                this.errors = null;
                this.propagateChange(this.fileInput.nativeElement.files);
            }
            this.fileInput.nativeElement.files = null;
            this.fileInput.nativeElement.value = null;
        });
    }
    writeValue(obj) { }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
}
LpFilesUploaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lp-files-uploader',
                template: "\n\n<form #form=\"ngForm\">\n    <input \n    hidden\n    style=\"display:none\" \n    #fileInput  \n    #fileInputCtrl=\"ngModel\"\n    ngModel\n    name=\"files-input\"\n    type=\"file\"\n    [multiple]=\"config.multiple\"\n    lpFilesUploader\n    [allowedMimeTypes]=\"config.allowedMimeTypes \"\n    [notAllowedMimeTypes]=\"config.notAllowedMimeTypes\"\n    [maxSizeKb]=\"config.maxSizeKb\" \n    [maxNameLength]=\"config.maxNameLength\"\n    >\n</form>\n\n\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => LpFilesUploaderComponent),
                        multi: true,
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => LpFilesUploaderComponent),
                        multi: true,
                    }
                ]
            },] }
];
LpFilesUploaderComponent.propDecorators = {
    trigger: [{ type: Input }],
    fileInput: [{ type: ViewChild, args: ['fileInput', { static: true },] }],
    fileInputController: [{ type: ViewChild, args: ['fileInputCtrl', { static: true },] }],
    config: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtZmlsZXMtdXBsb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzLzM0Njk1L0Rlc2t0b3AvRFJBRlQvdGVhbS1tYW5hZ2VyLWZyb250ZW5kL3Byb2plY3RzL2xwLWZpbGVzLXVwbG9hZGVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9scC1maWxlcy11cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWEsU0FBUyxFQUFFLEtBQUssRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLGlCQUFpQixFQUFpQyxhQUFhLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFtQnRDLE1BQU0sT0FBTyx3QkFBd0I7SUFqQnJDO1FBcUJHLHlCQUF5QjtRQUNqQixXQUFNLEdBQTJCLEVBQUUsQ0FBQTtRQTRCcEMsb0JBQWUsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBTzNDLENBQUM7SUFqQ0MsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNwQixDQUFDO0lBQ0QsZUFBZTtRQUVmLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQTtTQUNKO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUE7U0FDN0M7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2hFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3BELElBQUcsTUFBTSxFQUFDO2dCQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCO2lCQUFJO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdNLFVBQVUsQ0FBQyxHQUFRLElBQUcsQ0FBQztJQUN2QixnQkFBZ0IsQ0FBQyxFQUFPO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDTSxpQkFBaUIsS0FBSyxDQUFDOzs7WUF2RC9CLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qiw0ZEFBaUQ7Z0JBRWpELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixDQUFDO3dCQUN2RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzt3QkFDdkQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7O3NCQUVFLEtBQUs7d0JBQ0wsU0FBUyxTQUFDLFdBQVcsRUFBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUM7a0NBQ25DLFNBQVMsU0FBQyxlQUFlLEVBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDO3FCQUV2QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBFbGVtZW50UmVmLFZpZXdDaGlsZCwgSW5wdXQsICBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nTW9kZWwsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xwLWZpbGVzLXVwbG9hZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xwLWZpbGVzLXVwbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOltdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExwRmlsZXNVcGxvYWRlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMcEZpbGVzVXBsb2FkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExwRmlsZXNVcGxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzICBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgVmFsaWRhdG9ye1xuICBASW5wdXQoKSB0cmlnZ2VyOkVsZW1lbnRSZWZcbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0Jyx7c3RhdGljOnRydWV9KSBmaWxlSW5wdXQ6RWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0Q3RybCcse3N0YXRpYzp0cnVlfSkgZmlsZUlucHV0Q29udHJvbGxlcjpOZ01vZGVsO1xuICAgLyogVkFMSURBVElPTiBDUklURVJJQSAqL1xuICBASW5wdXQoKSBjb25maWc6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fVxuICBlcnJvcnM6IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgdmFsaWRhdGUoKXtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnNcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICBpZiAodGhpcy50cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfSlcbiB9IGVsc2Uge1xuICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgbmVlZHMgYSB0cmlnZ2VyJylcbiB9XG4gICAgdGhpcy5maWxlSW5wdXRDb250cm9sbGVyLnZhbHVlQ2hhbmdlcy5waXBlKHNraXAoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgbGV0IGVycm9ycyA9IHRoaXMuZmlsZUlucHV0Q29udHJvbGxlci5jb250cm9sLmVycm9ycztcbiAgICAgICAgaWYoZXJyb3JzKXtcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZShudWxsKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBudWxsO1xuICAgICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZmlsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZmlsZXMgPSBudWxsO1xuICAgICAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbnVsbDtcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHVibGljIHdyaXRlVmFsdWUob2JqOiBhbnkpIHt9XG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZCgpIHsgfVxuXG59XG5cblxuXG4gXG5cbiAgXG5cblxuXG4iXX0=