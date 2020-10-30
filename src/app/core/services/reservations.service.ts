import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Reservation } from '../models/reservations.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(
    private http: HttpClient
  ) { }

  saveReservation(reservationData: Reservation): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${environment.url_api}/reservations`, reservationData);
  }

  getAllReservations(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.url_api}/reservations`);
  }
}
