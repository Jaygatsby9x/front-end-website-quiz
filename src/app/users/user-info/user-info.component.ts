import {Component, OnInit} from '@angular/core';
import {IResponse} from '../../interfaces/iresponse';
import {AuthService} from '../../services/auth.service';
import {IUser} from '../../interfaces/iuser';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: IUser = {};

  constructor(private auService: AuthService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.auService.getUser().subscribe((response: IResponse) => {
      this.user = response.data;
    });
  }

}
