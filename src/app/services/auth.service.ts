import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:8000/api/';
  token;

  constructor(private http: HttpClient) {
  }

  login(data) {
    return this.http.post(this.apiUrl + 'login', data);
  }

  register(data) {
    return this.http.post(this.apiUrl + 'register', data);
  }

  logout() {
    localStorage.removeItem('currentToken');
  }

  getToken(): string {
    return localStorage.getItem('currentToken');
  }

  getUser() {
    this.token = this.getToken();
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token);
    return this.http.get(this.apiUrl + 'auth/user', {headers});
  }
}
