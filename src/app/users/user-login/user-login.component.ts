import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {IResponse} from "../../interfaces/iresponse";
import {templateJitUrl} from "@angular/compiler";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  form: FormGroup;
  message;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService ) {
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
      localStorage.setItem('currentToken', response.token);
    }, error => {
      this.message = error.error.error;
    });
  }

}
