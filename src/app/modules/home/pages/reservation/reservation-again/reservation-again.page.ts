import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from './../../../components/menu/menu.component';

@Component({
  selector: 'app-reservation-again',
  templateUrl: './reservation-again.page.html',
  styleUrls: ['./reservation-again.page.scss'],
})
export class ReservationAgainPage implements OnInit {

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
