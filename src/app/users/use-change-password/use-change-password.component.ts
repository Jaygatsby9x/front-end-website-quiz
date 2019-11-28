import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {IResponse} from '../../interfaces/iresponse';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {IValidators} from '../../interfaces/ivalidators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-use-change-password',
  templateUrl: './use-change-password.component.html',
  styleUrls: ['./use-change-password.component.css']
})
export class UseChangePasswordComponent implements OnInit {
  password: FormGroup;
  validators: IValidators = {};
  protected message: string;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router, private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.password = this.fb.group({
      oldPassword: [''],
      newPassword: [''],
      passwordConfirm: ['']
    });
    this.toastrService.success('success', 'oke');
  }

  changePassword() {
      this.authService.changePassWord(this.password.value).subscribe((response: IResponse) => {
      this.message = response.message;
      console.log(response);
      if (response.status) {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    }, error => {
      this.validators = error.error.errors;
      console.log(error);
    });
  }
}
