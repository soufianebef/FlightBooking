import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  showLoginForm: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showLoginForm = true;
  }

  toggleLoginSignUp(){
    this.showLoginForm = !this.showLoginForm;
  }

}
