import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
import { RentalCardComponent } from '../shared/rental-card/rental-card.component';
import { UppercasePipe, FirstUpperLetterPipe } from '../shared/pipes/uppercase.pipe';
import { HighlightDirective } from '../shared/directives/custom.directive';
import { MapModule } from '../shared/modules/map/map.module';
import { FormsModule } from '@angular/forms';

import { RentalService } from './shared/rental.service';
import { RentalSecretComponent } from './rental-secret/rental-secret.component';
import { AuthGuard } from '../auth/shared/auth.guard';
import { RentalNewComponent } from './rental-new/rental-new.component';
import { RentalBookingComponent } from './components/rental-booking/rental-booking.component'



const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      {path: '', component: RentalListComponent},
      {path: 'new', component: RentalNewComponent, canActivate: [AuthGuard]},
      {path: 'secret', component: RentalSecretComponent, canActivate: [AuthGuard]},
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
    HighlightDirective,
    RentalSecretComponent,
    RentalNewComponent,
    RentalBookingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MapModule,
    FormsModule
  ]
})
export class RentalModule {}