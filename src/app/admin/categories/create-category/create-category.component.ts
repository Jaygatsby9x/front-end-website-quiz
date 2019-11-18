import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as $ from 'jquery';
import {CategoryService} from '../../../services/category.service';
import {IResponse} from '../../../interfaces/iresponse';
import {Router} from '@angular/router';
import {IValidators} from '../../../interfaces/ivalidators';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  form: FormGroup;
  image: any;
  validators: IValidators = {};

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup() {
    this.form = this.fb.group({
      name: [''],
    });
  }

  onSubmit() {
    const formData = this.initFormData();
    this.categoryService.create(formData).subscribe((response: IResponse) => {
      if (response.status === 'success') {
        this.router.navigate(['/dashboard/categories']);
      }
    }, error => {
      this.validators = error.error.errors;
      console.log(error);
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
