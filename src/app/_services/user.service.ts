import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model';


const API_URL = 'https://27lbapd7bj.execute-api.us-east-1.amazonaws.com/blue/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get<Product[]>(API_URL + 'projects');
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'users');
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'users', { responseType: 'json' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'users', { responseType: 'json' });
  }
}
