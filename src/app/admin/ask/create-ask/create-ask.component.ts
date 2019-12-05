import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AskService} from '../../../services/ask.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IResponse} from '../../../interfaces/iresponse';
import {CategoryService} from '../../../services/category.service';
import {IError} from '../../../interfaces/ierror';
import {IAsk} from '../../../interfaces/iask';
import {ILevel} from '../../../interfaces/ilevel';
import {LevelService} from '../../../services/level.service';

@Component({
  selector: 'app-create-ask',
  templateUrl: './create-ask.component.html',
  styleUrls: ['./create-ask.component.css']
})
export class CreateAskComponent implements OnInit {
  form: FormGroup;
  levels: ILevel[] = [];
  message: string;
  answers = [];
  errors: IError = {};

  constructor(private fb: FormBuilder,
              private askService: AskService,
              private route: Router,
              private levelService: LevelService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      content: [''],
      level: [''],
      answer: this.fb.array([this.initAnswer()])
    });
    this.getAllLevel();
  }
  getAllLevel() {
    this.levelService.getAll().subscribe((response: IResponse) => {
      this.levels = response.data;
    });
  }

  onSubmit() {
    const formData = this.initFormData();
    this.askService.create(formData).subscribe((response: IResponse) => {
      this.route.navigate(['/admin/dashboard/ask']);
    }, error => {
      const responseErrors = error.error.errors;
      this.errors = responseErrors;
      if (error.status === 403) {
        this.route.navigate(['/forbidden']);
      }
    });
  }

  initFormData() {
    const formAnswer = (this.form.get('answer') as FormArray).controls;
    formAnswer.forEach((answer, index) => {
      this.answers[index] = answer.value;
    });
    const formData = new FormData();
    formData.append('content', this.form.get('content').value);
    formData.append('level_id', this.form.get('level').value);
    formData.append('answer', JSON.stringify(this.answers));
    return formData;
  }

  initAnswer() {
    return this.fb.group({
      content: ['', Validators.required],
      correct: [0]
    });
  }

  addAnswer() {
    (this.form.get('answer') as FormArray).controls.push(this.initAnswer());
  }

  removeAnswer() {
    (this.form.get('answer') as FormArray).controls.pop();
  }
}
