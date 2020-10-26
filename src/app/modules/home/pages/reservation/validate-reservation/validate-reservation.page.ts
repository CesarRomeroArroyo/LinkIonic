import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from './../../../components/menu/menu.component';

@Component({
  selector: 'app-validate-reservation',
  templateUrl: './validate-reservation.page.html',
  styleUrls: ['./validate-reservation.page.scss'],
})
export class ValidateReservationPage implements OnInit {

  constructor(
    private popoverCtrl: PopoverController
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

}
