import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from '../../components/menu/menu.component';
import { LocationFormComponent } from '../../components/location-form/location-form.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  slideOps = { initialSlide: 1, slidesPerView: 4, centeredSlides: true, speed: 400 };

  constructor(
    private popoverCtrl: PopoverController,
  ) { }

  ngOnInit() {
  }

  async showMenuPop(eventPop) {
    const popoverMenu = await this.popoverCtrl.create({
      component: MenuComponent,
      event: eventPop,
      mode: 'ios'
    })
    await popoverMenu.present();
  }

  async showLocationPop() {
    const popoverLocation = await this.popoverCtrl.create({
      component: LocationFormComponent
    })
    await popoverLocation.present();
  }



}
