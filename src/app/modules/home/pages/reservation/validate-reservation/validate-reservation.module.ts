import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidateReservationPageRoutingModule } from './validate-reservation-routing.module';

import { ValidateReservationPage } from './validate-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidateReservationPageRoutingModule
  ],
  declarations: [ValidateReservationPage]
})
export class ValidateReservationPageModule {}
