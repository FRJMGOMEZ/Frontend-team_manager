import { Component, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';
export class LpThinkingTimeProgressComponent {
    constructor() {
        this.progress = 0;
        this.show = false;
        this.velocity = 5;
        this.diameter = 60;
        this.end = new EventEmitter();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.show && this.show) {
            this.timeSubscription = interval(this.velocity * 30).subscribe(() => {
                if (this.progress <= 100) {
                    this.progress++;
                }
                else {
                    this.timeSubscription.unsubscribe();
                    this.progress = 0;
                    this.end.emit(true);
                }
            });
        }
        else {
            this.timeSubscription ? this.timeSubscription.unsubscribe() : null;
            this.progress = 0;
        }
    }
    stopProgress() {
        this.timeSubscription.unsubscribe();
        this.progress = 0;
        this.end.emit(false);
    }
    ngOnDestroy() {
        this.timeSubscription ? this.timeSubscription.unsubscribe() : null;
    }
}
LpThinkingTimeProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'lp-thinking-time-progress',
                template: "\r\n  <div class=\"div-thinking-time\" [style.position]=\"'relative'\" *ngIf=\"show\">\r\n    <mat-progress-spinner\r\n         diameter=\"60\"\r\n         color=\"primary\"\r\n         mode=\"determinate\"\r\n         [value]=\"progress\">\r\n    </mat-progress-spinner>\r\n    <mat-icon (click)=\"stopProgress()\" class=\"mat-icon-progress-cancel\">cancel</mat-icon>\r\n  </div>",
                styles: [".div-thinking-time{height:60px;width:60px}.mat-icon-progress-cancel{position:absolute!important;right:30%;top:30%;z-index:88888}"]
            },] }
];
LpThinkingTimeProgressComponent.ctorParameters = () => [];
LpThinkingTimeProgressComponent.propDecorators = {
    progress: [{ type: Input }],
    show: [{ type: Input }],
    velocity: [{ type: Input }],
    diameter: [{ type: Input }],
    end: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtdGhpbmtpbmctdGltZS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvMzQ2OTUvRGVza3RvcC9EUkFGVC90ZWFtLW1hbmFnZXItZnJvbnRlbmQvcHJvamVjdHMvbHAtdGhpbmtpbmctdGltZS1wcm9ncmVzcy9zcmMvIiwic291cmNlcyI6WyJsaWIvbHAtdGhpbmtpbmctdGltZS1wcm9ncmVzcy9scC10aGlua2luZy10aW1lLXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQWdCLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU85QyxNQUFNLE9BQU8sK0JBQStCO0lBVTFDO1FBUFMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixTQUFJLEdBQVcsS0FBSyxDQUFDO1FBQ3JCLGFBQVEsR0FBVSxDQUFDLENBQUM7UUFDcEIsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUNwQixRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQTtJQUczQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXFCO1FBQy9CLElBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNsRSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7aUJBQ2hCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQjtZQUNILENBQUMsQ0FBQyxDQUFBO1NBQ0g7YUFBSTtZQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBQ0QsWUFBWTtRQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbkUsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyx3WUFBeUQ7O2FBRTFEOzs7O3VCQUlFLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7a0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdscC10aGlua2luZy10aW1lLXByb2dyZXNzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbHAtdGhpbmtpbmctdGltZS1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbHAtdGhpbmtpbmctdGltZS1wcm9ncmVzcy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExwVGhpbmtpbmdUaW1lUHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgQElucHV0KCkgcHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgc2hvdzpib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdmVsb2NpdHk6bnVtYmVyID0gNTtcclxuICBASW5wdXQoKSBkaWFtZXRlcjpudW1iZXIgPSA2MDtcclxuICBAT3V0cHV0KCkgZW5kID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpXHJcbiAgdGltZVN1YnNjcmlwdGlvbjpTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczpTaW1wbGVDaGFuZ2VzKXtcclxuICAgIGlmKGNoYW5nZXMuc2hvdyAmJiB0aGlzLnNob3cpe1xyXG4gICAgICAgIHRoaXMudGltZVN1YnNjcmlwdGlvbiA9IGludGVydmFsKHRoaXMudmVsb2NpdHkgKiAzMCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzIDw9IDEwMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzKytcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5lbmQuZW1pdCh0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnRpbWVTdWJzY3JpcHRpb24gPyB0aGlzLnRpbWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTogbnVsbDtcclxuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcclxuICAgICAgfVxyXG4gIH1cclxuICBzdG9wUHJvZ3Jlc3MoKSB7XHJcbiAgICB0aGlzLnRpbWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgdGhpcy5lbmQuZW1pdChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMudGltZVN1YnNjcmlwdGlvbj8gdGhpcy50aW1lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk6IG51bGw7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=