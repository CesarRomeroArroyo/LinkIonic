import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';
import { environment } from '../../../environments/environment';
import { SuccessResponse } from '../models/success.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient) { }

  Authentication(userData: Auth): Observable<HttpResponse<SuccessResponse>>{
    return this.http.post<SuccessResponse>(`${environment.url_api}/auth`, userData, {observe: 'response'});
  }
}

