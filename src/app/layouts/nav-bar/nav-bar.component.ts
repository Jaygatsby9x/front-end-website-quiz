import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {IResponse} from '../../interfaces/iresponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentUser;

  constructor(protected auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.auth.getUser().subscribe((response: IResponse) => {
      this.currentUser = response.data;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  authLogout() {
    this.auth.logout();
    this.getCurrentUser();
    this.router.navigate(['']);
  }


}
