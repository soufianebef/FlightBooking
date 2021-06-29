import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightBookingProjectComponent } from './components/flight-booking-project/flight-booking-project.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

const routes: Routes = [
  {path: "", component: FlightBookingProjectComponent},
  {path: "login", component: LoginPageComponent},
  {path: "form", component: LoginFormComponent},
  {path: "signUp", component: SignUpFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
