import {Injectable} from '@angular/core';
import {environment as env} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected apiUrl: string;
  protected headers: HttpHeaders;

  constructor(private client: HttpClient,
              private authService: AuthService) {
    this.getApiUrl();
  }

  getApiUrl() {
    this.apiUrl = env.apiUrl;
    this.setHeaders();
  }

  setHeaders() {
    this.headers = this.authService.getHeader();
  }

  getById(id) {
    return this.client.get(this.apiUrl + '/users/' + id, {headers: this.headers});
  }

  changeRole(formData: FormData, id: string) {
    return this.client.post(this.apiUrl + '/users/' + id + '/change-role', formData, {headers: this.headers});
  }

  editInfo(data: any, id) {
    return this.client.put(this.apiUrl + '/users/' + id + '/edit-info', data, {headers: this.headers});
  }
}
