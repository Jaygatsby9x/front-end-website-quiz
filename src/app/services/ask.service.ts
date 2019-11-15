import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  apiUrl = 'http://localhost:8000/api/';
  token;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('currentToken');
  }

  getAll() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get(this.apiUrl + 'asks', {headers});
  }

  getOneAsk(id) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get(this.apiUrl + 'asks/' + id, {headers});
  }

  create(data) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.post(this.apiUrl + 'asks/create', data, {headers});
  }
}
