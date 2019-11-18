import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IResponse} from '../../../interfaces/iresponse';
import {AskService} from '../../../services/ask.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IError} from '../../../interfaces/ierror';

@Component({
  selector: 'app-ask-edit',
  templateUrl: './ask-edit.component.html',
  styleUrls: ['./ask-edit.component.css']
})
export class AskEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  answers = [];
  errors: IError = {};

  constructor(private fb: FormBuilder, private askService: AskService, private routerMap: ActivatedRoute, private route: Router) {
  }


  ngOnInit() {
    this.getId();
    this.getAsk();
    this.form = this.fb.group({
      content: [''],
      answer: this.fb.array([])
    });
  }

  getId() {
    this.id = this.routerMap.snapshot.paramMap.get('id');
  }

  getAsk() {
    this.askService.getByID(this.id).subscribe((response: IResponse) => {
      this.setValueAskForm(response);
    });
  }

  setValueAskForm(response) {
    this.form.patchValue({
      content: response.ask.content,
    });
    const answers = response.ask.answers;
    answers.forEach((answer) => {
      this.addAnswer(answer.content, answer.correct);
    });
  }

  onSubmit() {
    const formData = this.initFormData();
    this.askService.update(formData, this.id).subscribe((response: IResponse) => {
      this.route.navigate(['/admin/dashboard/ask']);
    }, error => {
      const responseErrors = error.error.errors;
      this.errors = responseErrors;
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
    return formData;
  }

  initAnswer(content, correct) {
    return this.fb.group({
      content: [content, Validators.required],
      correct: [correct]
    });
  }

  addAnswer(content, correct) {
    (this.form.get('answer') as FormArray).controls.push(this.initAnswer(content, correct));
  }

  removeAnswer(index) {
    (this.form.get('answer') as FormArray).controls.splice(index, 1);
  }
}
