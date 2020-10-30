import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LocationFormComponent } from '../../../components/location-form/location-form.component';
import { MenuComponent } from '../../../components/menu/menu.component';
import { MerchantService } from 'src/app/core/services/merchant.service';

import { forkJoin } from 'rxjs';
import { ContextService } from 'src/app/core/services/context.service';
import { Router } from '@angular/router';
import { ScheduleService } from 'src/app/core/services/schedule.service';
import { LocationsService } from 'src/app/core/services/locations.service';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.page.html',
  styleUrls: ['./new-reservation.page.scss'],
})
export class NewReservationPage implements OnInit {

  slideOps = { initialSlide: 1, slidesPerView: 5, centeredSlides: true, speed: 400 };

  merchantList;
  merchantActiveList;
  LocationList = [];
  availableServices = [];
  autoCompleteData = this.availableServices;
  keyword = 'name';
  dataSchedule;
  dateFormat;

  constructor(
    private popoverCtrl: PopoverController,
    private merchant: MerchantService,
    private location: LocationsService,
    private context: ContextService,
    private router: Router,
    private schedule: ScheduleService
  ) {
    this.schedule.schedule$.subscribe(services => {
    })
  }

  ngOnInit() {
    this.merchant.getAllMerchants()
      .subscribe(response => {
        this.merchantList = response;
        this.isMerchantActive();
      });
  }

  async showMenuPop(eventPop) {
    const popoverMenu = await this.popoverCtrl.create({
      component: MenuComponent,
      event: eventPop,
      mode: 'ios'
    })
    await popoverMenu.present();
  }

  async showLocationPop() {
    const popoverLocation = await this.popoverCtrl.create({
      component: LocationFormComponent
    })
    await popoverLocation.present();
  }

  selectEvent(item) {
    let dataConfirm = [{
      date: this.dateFormat?.substr(0, 10),
      serviceInfo: item
    }];
    this.dataSchedule = dataConfirm;
    this.schedule.addSchedule(dataConfirm);
  }

  reserveService(dataReserve, service, hour) {
    let reservation = {
      date: dataReserve.date,
      merchanName: dataReserve.serviceInfo.name,
      serviceName: service.name,
      locationName: dataReserve.serviceInfo.locationName,
      reserveHour: hour,
      serviceLogo: dataReserve.serviceInfo.logo,
      id: service.id
    }
    this.context.dateInfo = reservation;
    this.router.navigateByUrl('/home/confirm-reservation');
  }

  isMerchantActive() {
    const merchantActiveList = this.merchantList.filter(merchant => {
      if (merchant.locations.length > 0 && merchant.status === 'ACTIVE')
        return true;
    });
    this.merchantList = merchantActiveList;
    this.getLocations(merchantActiveList);
  }

  getLocations(activeMerchants) {
    activeMerchants.forEach(merchant => {
      merchant.locations.forEach(location => {
        this.LocationList.push(this.location.getLocation(location.location_id.toString()));
      });
    });
    forkJoin(this.LocationList).subscribe(response => {
      this.getActiveServices(response);
    });
  }

  getActiveServices(dataServices) {
    const isServiceAmount = dataServices.filter(service => service.message.services.length > 0);
    isServiceAmount.forEach(service => {
      this.availableServices.push({
        merchant_id: service.message.merchant_id,
        location_id: service.message.id,
        serviceData: service.message.services,
      });
    })
    dataServices.forEach(location => {
      if (location.message.services.length > 0) {
      }
    });
    this.getServiceDetails(dataServices);
  }

  getServiceDetails(locations) {
    this.availableServices.forEach(service => {
      this.merchantList.forEach(merchant => {
        if (merchant.id === service.merchant_id) {
          service.name = merchant.commercial_name;
          service.logo = merchant.logo_url;
        }
      });
      locations.forEach(location => {
        if (location.message.id === service.location_id) {
          service.locationName = location.message.name;
        }
      });
    });
  }

}
