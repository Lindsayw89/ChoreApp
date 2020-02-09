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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [ApiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
