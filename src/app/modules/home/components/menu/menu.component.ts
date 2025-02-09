import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    public popoverCtrl: PopoverController
    ) { }

  ngOnInit() {}

  logout() {
    localStorage.removeItem('TOKEN');
    this.popoverCtrl.dismiss();
    this.router.navigateByUrl('/login');
  }

}
