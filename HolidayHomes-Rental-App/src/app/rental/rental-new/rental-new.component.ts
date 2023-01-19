import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { NgForm } from '@angular/forms';
import { RentalService } from '../shared/rental.service';
import { validateInputs } from 'src/app/shared/validators/functions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-new',
  templateUrl: './rental-new.component.html',
  styleUrls: ['./rental-new.component.scss']
})
export class RentalNewComponent implements OnInit {

  rentalCategories = Rental.CATEGORIES;
  newRental: Rental;
  errors: AppApi.Error[] = [];

  constructor(private rentalService: RentalService,
    private router: Router) {}

  ngOnInit() {
    this.newRental = new Rental();
    this.newRental.shared = false;
    this.newRental.category = this.rentalCategories[0];
  }

  createRental(rentalForm: NgForm) {
    validateInputs(rentalForm);

    if (rentalForm.invalid) { return; }

    this.rentalService.createRental(this.newRental);
    this.errors = [];
    this.rentalService
      .createRental(this.newRental)
      .subscribe(
        _ => this.router.navigate(['/rentals']),
        errors => this.errors = errors
      )
  }
}