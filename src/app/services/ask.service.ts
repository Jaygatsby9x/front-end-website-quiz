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

  getByID(id) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get(this.apiUrl + 'asks/' + id, {headers});
  }

  create(data) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.post(this.apiUrl + 'asks/create', data, {headers});
  }

  delete(askId: number) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.delete(this.apiUrl + 'asks/delete/' + askId, {headers});
  }

  update(data, id) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.post(this.apiUrl + 'asks/update/' + id, data, {headers});
  }
}
