import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { MenuComponent } from './../../home/components/menu/menu.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private popoverCtrl: PopoverController,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage
  ) { 
    this.buildForm();
  }

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

  loginUser(credentials) {
    this.auth.Authentication(credentials).subscribe((response) => {
      this.storage.set('DATA_USER', response.body);
      this.storage.set('IS_LOGGED_IN', true);
      this.navCtrl.navigateForward('/home');
    }, (error: Error) => {
        console.log(error);
    })
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}