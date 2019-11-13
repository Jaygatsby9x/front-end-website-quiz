import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {IResponse} from '../../interfaces/iresponse';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-use-edit',
  templateUrl: './use-edit.component.html',
  styleUrls: ['./use-edit.component.css']
})
export class UseEditComponent implements OnInit {
  infoUser;
  formUser: FormGroup;

  constructor(private auService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getInfoUser();
  }

  getInfoUser() {
    this.auService.getUser().subscribe((response: IResponse) => {
      this.infoUser = response.data;
      console.log(response.data);
    });
  }
}
