import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateReservationPage } from './validate-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateReservationPageRoutingModule {}
