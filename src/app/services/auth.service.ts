import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }
  private token: string;
  async signup(username, password){
    const data={
      username, password};
      let response= await this.apiService.post("auth/signup", data);
      return response;
  }
 
  async login(data){
   const jsondata=JSON.stringify(data);
    await this.apiService.post('auth/login', jsondata);
    const response= await this.apiService.post("auth/login", jsondata );
    this.token= response.token;
    localStorage.setItem('token',this.token)
    console.log(this.token);
  }
  getToken(){
    return this.token;
  }
  isAuthorized(){
    if(this.token!= undefined){
      return true;
    }else{
      return false;
    }
  }



}


