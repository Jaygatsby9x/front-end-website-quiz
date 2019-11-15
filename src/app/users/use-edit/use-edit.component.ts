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
  formUser: FormGroup;

  constructor(private auService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getInfoUser();
    this.formUser = this.fb.group({
      name: [''],
      email: [''],
      age: [''],
      address: [''],
      phone: [''],
    });
  }

  getInfoUser() {
    this.auService.getUser().subscribe((response: IResponse) => {
      console.log(response.data);
      this.formUser.patchValue({
        name: response.data.name,
        email: response.data.email,
        age: [18],
        address: ['Hà Nội'],
        phone: ['01689554471'],
      });
    });

  }
}
