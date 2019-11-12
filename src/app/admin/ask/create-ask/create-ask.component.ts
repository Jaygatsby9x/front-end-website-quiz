import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AskService} from '../../../services/ask.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IResponse} from '../../../interfaces/iresponse';
import {CategoryService} from '../../../services/category.service';
import {ICategory} from '../../../interfaces/icategory';

@Component({
  selector: 'app-create-ask',
  templateUrl: './create-ask.component.html',
  styleUrls: ['./create-ask.component.css']
})
export class CreateAskComponent implements OnInit {
  form: FormGroup;
  formAnswer;
  categories: ICategory[];
  message: string;
  answers = [];

  constructor(private fb: FormBuilder, private askService: AskService, private route: Router, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      content: [''],
      category: [],
      answer: this.fb.array([this.initAnswer()])
    });
    this.formAnswer = (this.form.get('answer') as FormArray).controls;
    this.getAllCategory();
  }

  onSubmit() {
    const formData = this.initFormData();
    this.askService.create(formData).subscribe((response: IResponse) => {
      this.route.navigate(['/dashboard/ask']);
    }, error => {
      console.log(error);
    });
  }
  initFormData() {
    const formAnswer = (this.form.get('answer') as FormArray).controls;
    formAnswer.forEach(((answer, index) => {
      this.answers[index] = answer.value;
    }));
    const formData = new FormData();
    formData.append('content', this.form.get('content').value);
    formData.append('answer', JSON.stringify(this.answers));
    formData.append('category_id', this.form.get('category').value);
    return formData;
  }

  initAnswer() {
    return this.fb.group({
      content: [''],
      correct: [0]
    });
  }

  addAnswer() {
    (this.form.get('answer') as FormArray).controls.push(this.initAnswer());
  }
  getAllCategory() {
     this.categoryService.getAll().subscribe((response: IResponse) => {
       this.categories = response.data;
     }, error => {
       console.log(error);
     });
  }

}
