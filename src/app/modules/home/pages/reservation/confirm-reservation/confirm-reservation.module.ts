import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmReservationPageRoutingModule } from './confirm-reservation-routing.module';

import { ConfirmReservationPage } from './confirm-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmReservationPageRoutingModule
  ],
  declarations: [ConfirmReservationPage]
})
export class ConfirmReservationPageModule {}
