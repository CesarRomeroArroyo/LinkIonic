import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiberarPageRoutingModule } from './liberar-routing.module';

import { LiberarPage } from './liberar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiberarPageRoutingModule
  ],
  declarations: [LiberarPage]
})
export class LiberarPageModule {}
