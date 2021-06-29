import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBookingProjectComponent } from './flight-booking-project.component';

describe('FlightBookingProjectComponent', () => {
  let component: FlightBookingProjectComponent;
  let fixture: ComponentFixture<FlightBookingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightBookingProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightBookingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
