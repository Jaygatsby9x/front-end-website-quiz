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
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.httpClient.get(this.apiUrl + '/quiz-test', {headers});
  }

}
