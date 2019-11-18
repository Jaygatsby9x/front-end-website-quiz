import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  apiUrl: string;
  header: any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.setApiUrl();
    this.setHeader();
  }
  setApiUrl() {
    this.apiUrl = env.apiUrl;
  }

  setHeader() {
    this.header = this.authService.getHeader();
  }

  getAll() {
    return this.http.get(this.apiUrl + '/asks', {headers: this.header});
  }

  getByID(id) {
    return this.http.get(this.apiUrl + '/asks/' + id, {headers: this.header});
  }

  create(data) {
    return this.http.post(this.apiUrl + '/asks/create', data, {headers: this.header});
  }

  delete(askId: number) {
    return this.http.delete(this.apiUrl + '/asks/delete/' + askId, {headers: this.header});
  }

  update(data, id) {
    return this.http.post(this.apiUrl + '/asks/update/' + id, data, {headers: this.header});
  }
}
