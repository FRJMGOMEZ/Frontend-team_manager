import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
export class LpEmailValidatorDirective {
    constructor() { }
    validate(c) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(c.value) ? null : { email: true };
    }
}
LpEmailValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lpEmailValidator]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => LpEmailValidatorDirective), multi: true }
                ]
            },] }
];
LpEmailValidatorDirective.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtZW1haWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy8zNDY5NS9EZXNrdG9wL0RSQUZUL3RlYW0tbWFuYWdlci1mcm9udGVuZC9wcm9qZWN0cy9scC12YWxpZGF0aW9uLWRpcmVjdGl2ZXMvc3JjLyIsInNvdXJjZXMiOlsibGliL2xwLWVtYWlsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQVMzRSxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLGdCQUFnQixDQUFDO0lBQ2pCLFFBQVEsQ0FBQyxDQUFrQjtRQUN6QixPQUFPLHNFQUFzRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLENBQUE7SUFDbkgsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQ2hHO2FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHBFbWFpbFZhbGlkYXRvcl0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExwRW1haWxWYWxpZGF0b3JEaXJlY3RpdmUpLCBtdWx0aTogdHJ1ZSB9XG4gICAgXVxuICBcbn0pXG5leHBvcnQgY2xhc3MgTHBFbWFpbFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH17XG4gICAgcmV0dXJuIC9eW2EtekEtWjAtOS4hIyQlJicqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvLnRlc3QoYy52YWx1ZSkgPyBudWxsIDoge2VtYWlsOnRydWV9XG4gIH1cblxufVxuIl19