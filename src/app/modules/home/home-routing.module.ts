import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'validate-reservation',
    loadChildren: () => import('./pages/reservation/validate-reservation/validate-reservation.module').then( m => m.ValidateReservationPageModule)
  },
  {
    path: 'reservation-again',
    loadChildren: () => import('./pages/reservation/reservation-again/reservation-again.module').then( m => m.ReservationAgainPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
