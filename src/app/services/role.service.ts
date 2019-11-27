import {Injectable} from '@angular/core';
import {environment as env} from '../../environments/environment';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  protected apiUrl: string;

  constructor(protected authService: AuthService, private client: HttpClient) {
    this.getApiUrl();
  }

  getApiUrl() {
    this.apiUrl = env.apiUrl;
  }

  getAll() {
    const headers = this.authService.getHeader();
    return  this.client.get(this.apiUrl + '/roles', {headers});
  }
}
