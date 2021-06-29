import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../login-page/login-page.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() toggleForms = new EventEmitter<void>();
  @Output() newLogin = new EventEmitter<any>();

  Email: string;
  password: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.Email = "";
    this.password = "";
  }

  toggleForm() {
    this.toggleForms.next();
  }

  onSubmit(form: NgForm){
    
  }

}
