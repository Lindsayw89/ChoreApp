import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formSubmit: FormGroup;


  constructor(private formBuilder : FormBuilder ) { }
  
  loginForm= new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  ngOnInit() {
  }
onSubmit(){
  console.log(this.loginForm.value)
}
}
