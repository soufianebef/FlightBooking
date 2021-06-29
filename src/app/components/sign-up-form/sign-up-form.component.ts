import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['../login-page/login-page.component.css']
})
export class SignUpFormComponent implements OnInit {

  firstName: string;
  lastName: string;
  phone: number;
  Email:string;

  ConfirmedPassword: string;
  password: string;

  @Output() toggleForms = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleForm() {
    this.toggleForms.next();
  }

  onSubmit(form : NgForm){

  }

}
