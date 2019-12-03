import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private authService: AuthService) {
  }

  canCreate() {
    return !!this.checkPermission('create');
  }

  canDelete() {
    return !!this.checkPermission('delete');
  }

  canEditor() {
    return !!this.checkPermission('editor');
  }

  isSuperAdmin() {
    return !!this.checkPermission('superadmin');
  }

  checkPermission(ability) {
    const role = this.authService.getRole();
    const permissions = role.permissions;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < permissions.length; i++) {
      if (permissions[i].slug === ability) {
        return true;
      }
    }
    return false;
  }
}
