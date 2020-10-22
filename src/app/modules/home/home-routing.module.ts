import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'bookings',
    loadChildren: () => import('./pages/reservas/bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'new-booking',
    loadChildren: () => import('./pages/reservas/new-booking/new-booking.module').then( m => m.NewBookingPageModule)
  },  {
    path: 'liberar',
    loadChildren: () => import('./pages/reservas/liberar/liberar.module').then( m => m.LiberarPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
