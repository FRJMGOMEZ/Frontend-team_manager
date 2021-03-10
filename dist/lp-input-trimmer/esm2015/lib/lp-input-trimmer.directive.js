import { Directive, forwardRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class LpInputTrimmerDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.propagateChange = (_) => { };
    }
    onChange(value) {
        this.propagateChange(value.trim());
    }
    writeValue(val) {
        const value = val == null ? '' : val;
        this.renderer.setProperty(this.el.nativeElement, 'value', value);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
}
LpInputTrimmerDirective.ɵfac = function LpInputTrimmerDirective_Factory(t) { return new (t || LpInputTrimmerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
LpInputTrimmerDirective.ɵdir = i0.ɵɵdefineDirective({ type: LpInputTrimmerDirective, selectors: [["", "lpInputTrimmer", ""]], hostBindings: function LpInputTrimmerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("input", function LpInputTrimmerDirective_input_HostBindingHandler($event) { return ctx.onChange($event.target.value); });
    } }, features: [i0.ɵɵProvidersFeature([{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => LpInputTrimmerDirective),
                multi: true
            }])] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LpInputTrimmerDirective, [{
        type: Directive,
        args: [{
                selector: '[lpInputTrimmer]',
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => LpInputTrimmerDirective),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { onChange: [{
            type: HostListener,
            args: ['input', ['$event.target.value']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtaW5wdXQtdHJpbW1lci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvMzQ2OTUvRGVza3RvcC9EUkFGVC90ZWFtLW1hbmFnZXItZnJvbnRlbmQvcHJvamVjdHMvbHAtaW5wdXQtdHJpbW1lci9zcmMvIiwic291cmNlcyI6WyJsaWIvbHAtaW5wdXQtdHJpbW1lci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBVXpFLE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSXZELG9CQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUp5QixDQUFDO0lBQ3BCLFFBQVEsQ0FBQyxLQUFhO1FBQ3BFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVNLFVBQVUsQ0FBQyxHQUFRO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ00sZ0JBQWdCLENBQUMsRUFBTztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ00saUJBQWlCLEtBQUssQ0FBQzs7OEZBYm5CLHVCQUF1Qjs0REFBdkIsdUJBQXVCOzBHQUF2QixpQ0FBNkI7MENBTjdCLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDdEQsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDO2tEQUVTLHVCQUF1QjtjQVJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDdEQsS0FBSyxFQUFFLElBQUk7cUJBQ1osQ0FBQzthQUNIOztrQkFHRSxZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHBJbnB1dFRyaW1tZXJdJyxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExwSW5wdXRUcmltbWVyRGlyZWN0aXZlKSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBMcElucHV0VHJpbW1lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSkgb25DaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHZhbHVlLnRyaW0oKSlcbiAgfVxuICBwcml2YXRlIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsOiBhbnkpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHZhbCA9PSBudWxsID8gJycgOiB2YWw7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcbiAgfVxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoKSB7IH1cblxufVxuIl19