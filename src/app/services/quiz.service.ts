import {Injectable} from '@angular/core';
import {environment as env} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  apiUrl: string;
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient, private auth: AuthService) {
    this.setApiUrl();
    this.setHeaders();
    this.getAll();
  }

  setApiUrl() {
    this.apiUrl = env.apiUrl;
  }

  setHeaders() {
    this.headers = this.auth.getHeader();
  }

  getAll() {
    return this.httpClient.get(this.apiUrl + '/quiz-test', {headers: this.headers});
  }

  create(data) {
    return this.httpClient.post(this.apiUrl + '/quiz-test/create', data, {headers: this.headers});
  }

  getByID(id) {
    return this.httpClient.get(this.apiUrl + '/quiz-test/' + id, {headers: this.headers});
  }

  update(data, id) {
    return this.httpClient.post(this.apiUrl + '/quiz-test/' + id + '/update', data, {headers: this.headers});
  }
}
