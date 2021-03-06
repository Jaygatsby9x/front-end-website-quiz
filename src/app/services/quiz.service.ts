import {Injectable} from '@angular/core';
import {environment as env} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  userId;
  apiUrl: string;
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient, private auth: AuthService) {
    this.setApiUrl();
    this.setHeaders();
    this.getAll();
  }

  setID(id) {
    this.userId = id;
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

  delete(id: any) {
    return this.httpClient.delete(this.apiUrl + '/quiz-test/' + id + '/delete', {headers: this.headers});
  }

  getByCategoryID(id: string) {
    return this.httpClient.get(this.apiUrl + '/categories/' + id, {headers: this.headers});
  }

  submitResult(data: any) {
    return this.httpClient.post(this.apiUrl + '/quiz-test/point/create', data, {headers: this.headers});
  }

  getResult(id) {
    return this.httpClient.get(this.apiUrl + '/quiz-test/point/' + id, {headers: this.headers});
  }

  getByUserID(id: string) {
    return this.httpClient.get(this.apiUrl + '/users/' + id, {headers: this.headers});
  }

  getUserByQuizId(id: string) {
    return this.httpClient.get(this.apiUrl + '/quiz-test/' + id + '/point', {headers: this.headers});
  }

  getPointsMax(id) {
    return this.httpClient.get(this.apiUrl + '/points/' + id + '/user', {headers: this.headers});
  }

  getPointsByQuizSort(id) {
    return this.httpClient.get(this.apiUrl + '/points/' + id + '/quiz-sort', {headers: this.headers});
  }

  getPointsByQuizTime(id) {
    return this.httpClient.get(this.apiUrl + '/points/' + id + '/quiz-time', {headers: this.headers});
  }

  getPointsByTime(id) {
    return this.httpClient.get(this.apiUrl + '/points/' + id + '/time', {headers: this.headers});
  }

  getID() {
    return this.userId;
  }
}
