import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
import { RentalCardComponent } from '../shared/rental-card/rental-card.component';
import { UppercasePipe, FirstUpperLetterPipe } from '../shared/pipes/uppercase.pipe';
import { HighlightDirective } from '../shared/directives/custom.directive';
import { HttpClientModule } from '@angular/common/http';

import { RentalService } from './shared/rental.service';


const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      {path: '', component: RentalListComponent},
      {path: ':rentalId', component: RentalDetailComponent}
    ],
    providers: [
      RentalService
    ],
  }
]

@NgModule({
  declarations: [
    RentalDetailComponent,
    RentalListComponent,
    RentalComponent,
    RentalCardComponent,
    UppercasePipe,
    FirstUpperLetterPipe,
    HighlightDirective
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class RentalModule {}