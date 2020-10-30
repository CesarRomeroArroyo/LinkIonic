import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from '../../../components/menu/menu.component';
import { ContextService } from 'src/app/core/services/context.service';
import { ReservationsService } from 'src/app/core/services/reservations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-reservation',
  templateUrl: './confirm-reservation.page.html',
  styleUrls: ['./confirm-reservation.page.scss'],
})
export class ConfirmReservationPage implements OnInit {
  userName;
  dataReservation;
  reservationDetails;
  constructor(
    private popoverCtrl: PopoverController,
    private context: ContextService,
    private reservation: ReservationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataReservation = this.context.dateInfo;
    this.reservationDetails = {
      available_service_id: this.dataReservation.id.toString(),
      date: this.dataReservation.date,
      time: this.dataReservation.reserveHour
    }
    if(!this.dataReservation) {
      this.router.navigateByUrl('/home/new-reservation');
    }
    this.userName = JSON.parse(localStorage.getItem('TOKEN')).info;
  }

  async showMenuPop(eventPop) {
    const popoverMenu = await this.popoverCtrl.create({
      component: MenuComponent,
      event: eventPop,
      mode: 'ios'
    })
    await popoverMenu.present();
  }

  reserve() {
    this.reservation.saveReservation(this.reservationDetails).subscribe(response => {

    });
    this.router.navigateByUrl('/home/reservations');
  }
}
