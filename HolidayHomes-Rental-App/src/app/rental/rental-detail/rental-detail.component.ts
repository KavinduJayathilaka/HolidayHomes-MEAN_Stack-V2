import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent {

  @Input('rental') rental: Rental = {} as Rental;

  constructor(
    private rentalService: RentalService,
    private route: ActivatedRoute) {
      this.helloWorld();
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rentalService
        .getRentalById(params['rentalId'])
        .subscribe(rental => {
          this.rental = rental;
        })
    })
  }
  // Default
  helloWorld(message: string = "Hola World!!!!") {
    console.log(message)
  }

  // Optional
  // helloWorld(message?: string) {
  //   if (!message) { alert('Hello Guys!'); return; }
  //   alert(message);
  // }
}