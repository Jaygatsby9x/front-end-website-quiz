import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgModel} from '@angular/forms';
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
  message;
  email;

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
    const data = this.form.value;
    this.authService.login(data).subscribe((response: IResponse) => {
      this.authService.setToken(response.token);
      this.authService.setRole(response.role);
      this.router.navigate(['/']);
    }, error => {
      if (error.status === 401) {
        this.toastrService.error(
          'Tài khoản của bạn hiện đang chờ xác nhận,' +
          ' vui lòng kiểm tra mail của bạn',
          'Đăng nhập thất bại!');
      }
      this.message = error.error.error;
    });
  }

  sendMailForgotPassword() {
    this.authService.forgotPassword(this.formForgot()).subscribe((response: IResponse) => {
      console.log(response);
      this.toastrService.success('Xin vui lòng kiểm Email của bạn ', 'Gửi yêu cầu thành công');

    }, error => {
      console.log(error);
      if (error.error.messages) {
        this.toastrService.error(error.error.messages, 'Có gì đó sai sai');
      }
      this.toastrService.error(error.error.errors.email[0], 'Có gì đó sai sai');
    });
  }

  formForgot() {
    this.form = this.fb.group({
      email: [this.email]
    });

    return this.form.value;
  }
}
