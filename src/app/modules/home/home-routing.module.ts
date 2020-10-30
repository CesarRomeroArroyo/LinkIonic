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
    path: '',
    component: HomePage,
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
  {
    path: 'confirm-reservation',
    loadChildren: () => import('./pages/reservation/confirm-reservation/confirm-reservation.module').then( m => m.ConfirmReservationPageModule)
  },
  {
    path: 'new-reservation',
    loadChildren: () => import('./pages/reservation/new-reservation/new-reservation.module').then( m => m.NewReservationPageModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('./pages/reservation/reservations/reservations.module').then( m => m.ReservationsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
