import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {IResponse} from '../../interfaces/iresponse';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user;

  constructor(private auService: AuthService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.auService.getUser().subscribe((response: IResponse) => {
      this.user = response.data;
      console.log(response.data);
    });
    console.log(this.user);
  }
}
