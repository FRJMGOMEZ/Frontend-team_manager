import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPassword]',
  providers:[
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordDirective), multi: true }
  ]
})
export class PasswordDirective implements Validator {

  @Input() regExps:{error:string,regExp:string}[]=[];

  validate(c:AbstractControl){
   return  this.checkRegExp(c.value);
  }
  checkRegExp(passwordValue:string){
    let passError = null;
    this.regExps.forEach(( { error, regExp })=>{
      let regularExpression = new RegExp(regExp);
      if(!regularExpression.test(passwordValue)){
        passError = {[error]:true};
      }
    })
    return passError;
  }

}
