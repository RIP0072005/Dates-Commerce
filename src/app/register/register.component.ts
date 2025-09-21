import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(){}
  registerForm: FormGroup = new FormGroup({
		name: new FormControl(null, [Validators.minLength(3), Validators.required, Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.minLength(8), Validators.pattern(/^\w{8,}$/), Validators.required]),
    repassword: new FormControl(null, [Validators.minLength(8), Validators.pattern(/^\w{8,}$/), Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  }, this.confirmPassword)

  confirmPassword(g: AbstractControl){
    if (g.get('password')?.value == g.get('repassword')?.value)
      return null;
    return {missmatch: true};
  }

  onSubmit(){
    if(this.registerForm.invalid)
      return;
    console.log(this.registerForm);
  }
}
