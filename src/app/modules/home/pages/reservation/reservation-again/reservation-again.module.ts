import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationAgainPageRoutingModule } from './reservation-again-routing.module';

import { ReservationAgainPage } from './reservation-again.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationAgainPageRoutingModule
  ],
  declarations: [ReservationAgainPage]
})
export class ReservationAgainPageModule {}
