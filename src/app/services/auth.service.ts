import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {IResponse} from '../interfaces/iresponse';
import {IUser} from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string;
  user: IUser;

  constructor(private http: HttpClient) {
    this.apiUrl = env.apiUrl;
  }

  login(data) {
    return this.http.post(this.apiUrl + '/login', data);
  }

  register(data) {
    return this.http.post(this.apiUrl + '/register', data);
  }

  logout() {
    localStorage.removeItem('currentToken');
  }
  setToken(token) {
    this.logout();
    localStorage.setItem('currentToken', token);
  }

  getToken(): string | boolean {
    const token = localStorage.getItem('currentToken');
    return (token === 'null' || token === 'undefined' || token === '') ? null : token;
  }

  getHeader() {
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken());
  }

  getUser() {
    const headers = this.getHeader();
    return this.http.get(this.apiUrl + '/auth/user', {headers});
  }

  isLogin() {
    return (this.getToken()) ? this.getToken() : null;
  }
}
