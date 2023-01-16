import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { forbiddenEmailValidator } from 'src/app/shared/validators/functions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required, 
        Validators.pattern(this.emailPattern),
        forbiddenEmailValidator('kavindu@gmail.com')
      ]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
    // initForm() {
  //   this.loginForm = this.fb.group({
  //     email: ['', [
  //       Validators.required, 
  //       Validators.pattern(this.emailPattern),
  //       forbiddenEmailValidator('jerga99@gmail.com')
  //     ]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //   }, {validators: [sameAsValidator(['password', 'email'])]});
  // }

  login() {
    if (this.loginForm.invalid) { return; }

    
    alert(this.diagnostic);
  }

  get email(): AbstractControl | null {
    return this.loginForm.get('email');
}
  get password(): AbstractControl |null { return this.loginForm.get('password')}

  get diagnostic(): string {
    return JSON.stringify(this.loginForm.value);
  }

}