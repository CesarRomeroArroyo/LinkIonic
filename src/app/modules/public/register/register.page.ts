import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MenuComponent } from './../../home/components/menu/menu.component';
import { AccountsService } from './../../../core/services/accounts.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(
    private popoverCtrl: PopoverController,
    private formBuilder: FormBuilder,
    private account: AccountsService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  async showMenuPop(eventPop) {
    const popoverMenu = await this.popoverCtrl.create({
      component: MenuComponent,
      event: eventPop,
      mode: 'ios'
    })
    await popoverMenu.present();
  }

  registerUser(credentials) {
    this.account.saveAccount(credentials).subscribe((response) => {
      console.log(response);
      this.navCtrl.navigateForward('/login');
    });
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      mobilephone: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
