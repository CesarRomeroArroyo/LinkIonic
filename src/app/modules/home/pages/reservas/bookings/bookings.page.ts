import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  products: any[] = [
    {
      image: 'assets/images.png'
    },
  ];
  ultimas:any[]=[
    {
      image: 'assets/images2.jpg'
    },
    {
      image: 'assets/images3.png'
    }
  ];
  constructor() {
   }

  ngOnInit() {
  }

}
