import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment as env } from '../../environments/environment';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = env.apiUrl;
  constructor(private http: HttpClient, private auth: AuthService) {
  }
  getAll() {
    const headers = this.auth.getHeader();
    return this.http.get(this.apiUrl + '/categories', {headers});
  }
  create(data) {
    const headers = this.auth.getHeader();
    return this.http.post(this.apiUrl + '/categories/create', data , {headers});
  }
}
