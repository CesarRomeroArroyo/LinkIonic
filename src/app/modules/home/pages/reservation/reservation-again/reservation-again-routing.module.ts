import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationAgainPage } from './reservation-again.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationAgainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationAgainPageRoutingModule {}
