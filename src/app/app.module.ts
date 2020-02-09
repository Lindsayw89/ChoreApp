import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {ReactiveFormsModule} from '@angular/forms/';
import {ApiService} from '../app/services/api.service';
import {AuthService} from '../app/services/auth.service';
import {HttpClientModule, HTTP_INTERCEPTORS } from'@angular/common/http';
import { AuthInterceptor } from './auth-Inceptor';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule, FormsModule
  ],
  providers: [ApiService,AuthService,  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
