import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formSubmit: FormGroup;
 newUser={firstname: '', lastname: '', username:'',
password:''}

  constructor(private authService: AuthService ) { }
  registerForm= new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.registerForm.value)
  }
  
  
  async authenticate(){
    
    await this.authService.signup(this.newUser.username, this.newUser.password)
   
  }
  async loginAuth(){
    await this.authService.login(this.newUser);
  }


}
