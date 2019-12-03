import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IResponse} from "../../../interfaces/iresponse";
import {IUser} from "../../../interfaces/iuser";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoleService} from "../../../services/role.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  protected id: string;
  protected form: FormGroup;
  protected roles;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              protected fb: FormBuilder,
              protected roleService: RoleService,
              private router: Router) {
  }

  ngOnInit() {
    this.getId();
    this.getUserById();
    this.getAllRole();
  }

  getId() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  initForm(user: IUser) {
    this.form = this.fb.group({
      name: [user.name],
      email: [user.email],
      role: [user.role.id],
    });
  }

  getUserById() {
    this.userService.getById(this.id).subscribe((response: IResponse) => {
      if (response.status) {
        this.initForm(response.data);
      }
    }, error => {
      console.log(error);
    });
  }

  getAllRole() {
    this.roleService.getAll().subscribe((response: IResponse) => {
      if (response.status) {
        this.roles = response.data;
      }
    });
  }

  initFormData() {
    const formData = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('email', this.form.get('email').value);
    formData.append('role', this.form.get('role').value);
    return formData;
  }

  onSubmit() {
    const formData = this.initFormData();
    this.userService.changeRole(formData, this.id).subscribe((response: IResponse) => {
      if (response.status) {
        this.router.navigate(['/admin/dashboard/users']);
      }
    }, error => {

      if (error.status === 403) {
        this.router.navigate(['/forbidden']);
      }
    });
  }
}
