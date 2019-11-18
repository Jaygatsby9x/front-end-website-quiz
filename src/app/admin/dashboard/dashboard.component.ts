import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
  }

}
