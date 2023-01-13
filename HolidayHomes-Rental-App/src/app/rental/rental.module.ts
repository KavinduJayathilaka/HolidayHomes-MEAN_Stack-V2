import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      {path: '', component: RentalListComponent},
      {path: ':rentalId', component: RentalDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    RentalDetailComponent,
    RentalListComponent,
    RentalComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RentalModule {}