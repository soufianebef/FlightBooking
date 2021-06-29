import { Component, OnInit } from '@angular/core';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-flight-booking-project',
  templateUrl: './flight-booking-project.component.html',
  styleUrls: ['./flight-booking-project.component.css']
})
export class FlightBookingProjectComponent implements OnInit {

  
  faCoffee = faCoffee;
  
  constructor() { }

  ngOnInit(): void {
  }

}
