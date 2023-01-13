import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html'
})
export class RentalDetailComponent {
    public rentalId = '';

    // dependency injection
    constructor(private route: ActivatedRoute) {}
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.rentalId = params['rentalId']
      })
    }
}