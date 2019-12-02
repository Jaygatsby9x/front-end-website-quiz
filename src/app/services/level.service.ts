import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  apiUrl: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.setApiUrl();
    this.setHeaders();
  }

  getAll() {
    return this.http.get(this.apiUrl + '/levels', {headers: this.headers});
  }

  setApiUrl() {
    this.apiUrl = env.apiUrl;
  }

  setHeaders() {
    this.headers = this.authService.getHeader();
  }
}
