import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ReservationsService } from 'src/app/core/services/reservations.service';
import { MenuComponent } from '../../../components/menu/menu.component';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {
  slideOps = { initialSlide: 1, slidesPerView: 4, centeredSlides: true, speed: 400 };
  reservations;
  products: any[] = [
    {
      image: 'assets/images.png'
    },
  ];
  last:any[]=[
    {
      image: 'assets/images2.jpg'
    },
    {
      image: 'assets/images3.png'
    }
  ];
  constructor(
    private popoverCtrl: PopoverController,
    private reservation: ReservationsService
    ) { }

  ngOnInit() {
    this.reservation.getAllReservations().subscribe(response => {
      
    })
    
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
