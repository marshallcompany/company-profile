import { FormControl, FormGroup } from '@angular/forms';

export class FormValidators {

    static emailValidator(control: FormControl) {
        if (!control.value.match(/^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i)) {
            return { invalidEmailAddress: true };
        }
        return null;
    }

    static numberValidation(control: FormControl) {
        if (control && control.value !== null && (/\D/g).test(control.value)) {
            return { onlyNumbers: true };
        }
        return null;
    }

    static maxValueValidation(control: FormControl) {
        if (!control.value.match(/^([0-6]|[0-5](\,[0-9]{1}|.[0-9]{2}))$|^$/)) {
            return { maxValue: true };
        }
        return null;
    }

    static matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup) => {
            const password = group.controls[passwordKey];
            const confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
            return null;
        };

    }

    static dateCheck(from: string, to: string) {
        return (group: FormGroup) => {
            const fromDate = group.controls[from].value;
            const toDate = group.controls[to].value;
            const fromDateArray = fromDate.split('.');
            const toDateArray = toDate.split('.');
            if (fromDate.match(/^[0-9]{2}.[0-9]{4}/) && toDate.match(/^[0-9]{2}.[0-9]{4}/)) {
                if (+fromDateArray[1] > +toDateArray[1]) {
                    return { valueDateError: true };
                } else if (+fromDateArray[1] === +toDateArray[1]) {
                    if (+fromDateArray[0] > +toDateArray[0]) {
                        return { valueDateError: true };
                    }
                }
            }
            return null;
        };
    }

    static checkFullDate(control: FormControl) {
        if (control && control.value && !control.value.match(/^[0-9]{2}.[0-9]{2}.[0-9]{4}/)) {
            return { dateInvalid: true };
        }
        return null;
    }
}
