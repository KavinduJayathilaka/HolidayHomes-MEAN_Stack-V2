import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'app-rental-listing',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit{
  rentals: Rental[] = [];

  constructor(private rentalService: RentalService){}

  ngOnInit() {
  
  this.rentalService.getRentals()
  .subscribe((rentals: Rental[]) => {
    this.rentals = rentals;
});
}
}