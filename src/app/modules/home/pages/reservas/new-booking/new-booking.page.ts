import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.page.html',
  styleUrls: ['./new-booking.page.scss'],
})
export class NewBookingPage implements OnInit {
  title: any[] = [
    {
      hora: '18:00'
    },
    {
      hora: '5:30'
    },
    {
      hora: '4:00'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
