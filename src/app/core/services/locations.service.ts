import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) {}

  getLocation(id: any): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.url_api}/locations/${id}`)
  }
}
