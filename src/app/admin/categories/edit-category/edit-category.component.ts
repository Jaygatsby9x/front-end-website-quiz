import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IResponse} from '../../../interfaces/iresponse';
import * as $ from 'jquery';
import {IValidators} from '../../../interfaces/ivalidators';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  id;
  form: FormGroup;
  image: any;
  validators: IValidators = {};
  category;

  constructor(private routeMap: ActivatedRoute, private categoryService: CategoryService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.id = this.routeMap.snapshot.paramMap.get('id');
    this.initFormGroup();
    this.getByID();
  }

  getByID() {
    this.categoryService.getById(this.id).subscribe((response: IResponse) => {
      console.log(response.category);
      this.category = response.category;
      this.form.patchValue({
        name: [response.category.name]
      });
    });
  }

  onSubmit() {
    const formData = this.initFormData();
    this.categoryService.update(formData, this.id).subscribe((response: IResponse) => {
      if (response.status === 'success') {
        this.router.navigate(['/admin/dashboard/categories']);
      }
    }, error => {
      this.validators = error.error.errors;
      if (error.status === 403) {
        this.router.navigate(['/forbidden']);
      }
    });
  }

  initFormGroup() {
    this.form = this.fb.group({
      name: [''],
    });
  }


  initFormData() {
    const formData = new FormData();
    formData.append('name', this.form.get('name').value);
    if (this.image) {
      formData.append('image', this.image);
    }
    return formData;
  }

  changeImage(images) {
    if (images && images[0]) {
      this.image = images[0];
      const reader = new FileReader();
      reader.readAsDataURL(images[0]);
      reader.onload = (e) => {
        // @ts-ignore
        $('#image').attr('src', reader.result);
      };
    }
  }
}
