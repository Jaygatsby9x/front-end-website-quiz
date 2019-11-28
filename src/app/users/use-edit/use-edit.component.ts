import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {IResponse} from '../../interfaces/iresponse';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-use-edit',
  templateUrl: './use-edit.component.html',
  styleUrls: ['./use-edit.component.css']
})
export class UseEditComponent implements OnInit {
  formUser: FormGroup;
  protected id;
  protected message: string;

  constructor(private auService: AuthService,
              private fb: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getInfoUser();
    this.formUser = this.fb.group({
      name: [''],
      email: [''],
      old: [''],
      gender: [''],
      address: [''],
      phone: [''],
    });
  }

  getInfoUser() {
    this.auService.getUser().subscribe((response: IResponse) => {
      this.formUser.patchValue({
        name: response.data.name,
        email: response.data.email,
        old: response.data.old,
        gender: response.data.gender,
        address: response.data.address,
        phone: response.data.phone,
      });
      this.id = response.data.id;
    });

  }

  onSubmit() {
    this.userService.editInfo(this.formUser.value, this.id).subscribe((response: IResponse) => {
      if (response.status) {
        this.message = response.message;
      }
    }, error => {
      console.log(error);
    });
  }
}
