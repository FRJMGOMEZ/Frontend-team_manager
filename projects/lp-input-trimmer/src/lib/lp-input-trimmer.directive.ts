import { Directive, forwardRef, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[lpInputTrimmer]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LpInputTrimmerDirective),
    multi: true
  }]
})
export class LpInputTrimmerDirective implements ControlValueAccessor {
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('input', ['$event.target.value']) onChange(value: string) {
    this.propagateChange(value.trim())
  }
  private propagateChange = (_: any) => { };
  public writeValue(val: any) {
    const value = val == null ? '' : val;
    this.renderer.setProperty(this.el.nativeElement, 'value', value);
  }
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  public registerOnTouched() { }

}
