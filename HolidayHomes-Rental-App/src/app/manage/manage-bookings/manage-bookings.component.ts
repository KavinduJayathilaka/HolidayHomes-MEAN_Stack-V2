import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/booking/shared/booking.service';
import { render } from 'creditcardpayments/creditCardPayments';

enum BOOKING_TYPES {
  received = 'received',
  all = 'all'
}

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.scss']
})
export class ManageBookingsComponent implements OnInit {

  bookingType: string;
  bookingTypes = BOOKING_TYPES;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService) { 

   
    }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.bookingType = params['type'] || this.bookingTypes.all;
      render(
        {
            id: "#paypal-button",
            currency: "USD",
            value: "100.00",
            onApprove: (details) => {
        
            }
          }
        );
    })
  }

  getAuthUserBookings = () => this.bookingService.getAuthUserBookings()
  getReceivedBookings = () => this.bookingService.getReceivedBookings()
}