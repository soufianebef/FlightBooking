import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FlightBookingProjectComponent } from './components/flight-booking-project/flight-booking-project.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    HomePageComponent,
    FlightBookingProjectComponent,
    LoginPageComponent,
    LoginFormComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
