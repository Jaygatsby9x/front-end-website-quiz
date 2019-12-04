import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {IResponse} from '../../interfaces/iresponse';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  form: FormGroup;
  failedAuthor = 0;
  badAuthorized: boolean;
  tokenRecaptcha: string;

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    if (this.badAuthorized) {
      if (this.tokenRecaptcha) {
        this.sendRequest();
      } else {
        this.toastrService.error('Bạn chưa xác thực mã captcha', 'Đăng nhập thất bại!');
      }
    } else {
      this.sendRequest();
    }
  }

  sendRequest() {
    const data = this.form.value;
    this.authService.login(data).subscribe((response: IResponse) => {
      this.authService.setToken(response.token);
      this.authService.setRole(response.role);
      this.router.navigate(['/']);
    }, error => {
      if (error.status === 401) {
        this.failedAuthor++;
        if (this.failedAuthor >= 3) {
          this.badAuthorized = true;
        }
      }
      this.toastrService.error(error.error.message,
        'Đăng nhập thất bại!');
    });
  }

  handleRecaptcha(token) {
    this.tokenRecaptcha = token;
  }
}
