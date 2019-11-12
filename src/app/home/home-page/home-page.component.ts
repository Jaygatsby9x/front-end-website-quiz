import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {IResponse} from '../../interfaces/iresponse';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentUser;

  constructor(private auth: AuthService) {
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
  }

}
