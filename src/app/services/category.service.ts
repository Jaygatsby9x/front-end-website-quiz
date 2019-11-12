import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'http://localhost:8000/api/';
  token: string;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('currentToken');
  }
  getAll() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get(this.apiUrl + 'categories', {headers});
  }
}
