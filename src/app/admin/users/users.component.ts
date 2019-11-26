import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/iuser';
import {AuthService} from '../../services/auth.service';
import {IResponse} from '../../interfaces/iresponse';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private userService: AuthService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.userService.getAll().subscribe((response: IResponse) => {
      this.users = response.data;
    }, error => {
      console.log(error);
    });
  }
}
