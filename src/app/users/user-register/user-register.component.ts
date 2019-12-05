import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {IResponse} from '../../interfaces/iresponse';
import {IValidators} from '../../interfaces/ivalidators';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  form: FormGroup;
  validators: IValidators = {};

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toast: ToastrService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      passwordConfirm: [''],
    });
  }

  onSubmit() {
    const data = this.form.value;
    this.authService.register(data).subscribe((response: IResponse) => {
      this.router.navigate(['/']);
      this.toast.warning('Tài khoản của bạn hiện đang chờ xác nhận , vui lòng kiểm tra mail của bạn', 'Đăng ký tài khoản thành công');
    }, error => {
      this.validators = error.error.errors;
      console.log(error);
    });
  }
}
