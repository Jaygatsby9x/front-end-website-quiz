import {Injectable} from '@angular/core';
import {environment as env} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected apiUrl: string;

  constructor(private client: HttpClient, private authService: AuthService) {
    this.getApiUrl();
  }

  getApiUrl() {
    this.apiUrl = env.apiUrl;
  }

  getById(id) {
    const headers = this.authService.getHeader();
    return this.client.get(this.apiUrl + '/users/' + id, {headers});
  }

  update(formData: FormData, id: string) {
    const headers = this.authService.getHeader();
    return this.client.post(this.apiUrl + '/users/' + id, formData, {headers});
  }
}
