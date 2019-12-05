import {Component, OnInit} from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider} from 'angularx-social-login';
import {AuthService as Socialite} from 'angularx-social-login';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {IResponse} from '../interfaces/iresponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})
export class FacebookLoginComponent implements OnInit {

  constructor(private socialite: Socialite,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  signInWithFB(): void {
    this.socialite.signIn(FacebookLoginProvider.PROVIDER_ID).then((res) => {
      this.loginOrCreate(res);
    });
  }

  loginOrCreate(res) {
    console.log(res);
    this.authService.socialiteAuthenticate(res).subscribe((response: IResponse) => {
      this.authService.setToken(response.token);
      this.authService.setRole(response.role);
      this.router.navigate(['/']);
    });
  }
}
