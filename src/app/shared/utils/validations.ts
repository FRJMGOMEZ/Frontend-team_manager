import { FormGroup, FormControl } from '@angular/forms';

export const areTheyEqual = (field1: string, field2: string)=> {
    return (group: FormGroup) => {
        let pass1 = group.controls[field1].value;
        let pass2 = group.controls[field2].value;
        if (pass1 === pass2) {
            return null;
        }
        return { areTheyEqual: true };
    }
}

export const checkRegExp = ( regExps:{error:string,regExp:string}[])=>{
    return (control:FormControl)=>{
        let passwordValue = control.value;
        let passError = null;
        regExps.forEach(({ error, regExp }) => {
            let regularExpression = new RegExp(regExp);
            if (!regularExpression.test(passwordValue)) {
                passError = { [error]: true };
            }
        })
        return passError;
    }   
}