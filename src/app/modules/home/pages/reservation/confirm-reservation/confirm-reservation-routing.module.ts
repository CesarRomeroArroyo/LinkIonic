import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmReservationPage } from './confirm-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmReservationPageRoutingModule {}
