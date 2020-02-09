import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formSubmit: FormGroup;
user={username:'',
password:''}

  constructor(private formBuilder : FormBuilder, private authService : AuthService ) { }
  
  loginForm= new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  ngOnInit() {
  }
onSubmit(){
  console.log(this.loginForm.value)
}


async authenticate(){
  
  await this.authService.signup(this.user.username, this.user.password)
 
}
async loginAuth(){
  await this.authService.login(this.user);
}
}
