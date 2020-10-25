import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

import { IonicModule } from '@ionic/angular';
import { LocationFormComponent } from './location-form/location-form.component';



@NgModule({
  declarations: [
    MenuComponent,
    LocationFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MenuComponent,
    LocationFormComponent
  ]
})
export class ComponentsModule { }
