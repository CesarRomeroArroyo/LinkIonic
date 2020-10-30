import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './../models/account.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  saveAccount(accountData: Account): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${environment.url_api}/accounts`, accountData);
  }
}
