import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewReservationPageRoutingModule } from './new-reservation-routing.module';

import { NewReservationPage } from './new-reservation.page';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewReservationPageRoutingModule,
    AutocompleteLibModule
  ],
  declarations: [NewReservationPage]
})
export class NewReservationPageModule {}
