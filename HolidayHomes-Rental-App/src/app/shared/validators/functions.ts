import { AbstractControl, ValidatorFn ,FormGroup,
  ValidationErrors, 
  NgForm} from '@angular/forms';

  export function validateInputs(form: NgForm) {
    Object.keys(form.controls).forEach(controlName => {
      form.controls[controlName].markAsDirty();
    })
  }

export function forbiddenEmailValidator(email: String): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = control.value === email;
    return forbidden ? {'forbiddenEmail': {value: control.value}} : null
  };
}