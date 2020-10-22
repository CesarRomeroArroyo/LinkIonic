import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LandingPage } from './landing.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPage
  }
  ,{
		path: 'register',
		component: RegisterComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
