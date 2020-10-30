import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private services: any[] = [];

  private schedule = new BehaviorSubject<any[]>([])

  schedule$ = this.schedule.asObservable();

  constructor() { }

  addSchedule(services: any) {
    this.services = services;
    this.schedule.next(this.services);
  }
}
