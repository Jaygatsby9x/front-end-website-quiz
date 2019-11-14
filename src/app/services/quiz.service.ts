import {Injectable} from '@angular/core';
import {environment as env} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  apiUrl;
  token;

  constructor(private httpClient: HttpClient, private auth: AuthService) {
    this.setApiUrl();
    this.setToken();
    this.getAll();
  }

  setApiUrl() {
    this.apiUrl = env.apiUrl;
  }

  setToken() {
    this.token = this.auth.getToken();
  }

  getAll() {
    const headers =  this.setHeader();
    return this.httpClient.get(this.apiUrl + '/quiz-test', {headers});
  }
  setHeader() {
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
  }
  create(data) {
    const headers = this.setHeader();
    return this.httpClient.post(this.apiUrl + '/quiz-test/create', data, {headers});
  }

}
