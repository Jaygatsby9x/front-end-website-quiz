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
  message;

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

}
