import { Component } from '@angular/core';
import { FormGroup , FormControl , AbstractControl} from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl(''),
  });
  
  formDataString = "";

  constructor(){
    
  }
  onSubmit() {
     console.log(this.loginForm)
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
    
  }
 
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  showValidations(f:any){
    let errors = f['email'].errors;
    console.log(Object.entries(errors))
  }
}
