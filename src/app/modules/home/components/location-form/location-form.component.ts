import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss'],
})
export class LocationFormComponent implements OnInit {

  constructor(private viewCtrl: PopoverController
  ) { }

  ngOnInit() { }

  close() {
    this.viewCtrl.dismiss();
  }

}
