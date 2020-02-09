import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AuthGuard} from './auth.guard';
import {RegistrationComponent} from './registration/registration.component';
const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'registration', component: RegistrationComponent}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
