import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IAsk} from '../../../interfaces/iask';
import {AskService} from '../../../services/ask.service';
import {QuizService} from '../../../services/quiz.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IResponse} from '../../../interfaces/iresponse';
import * as $ from 'jquery';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements OnInit {

  id;
  form: FormGroup;
  asks: IAsk[] = [];
  chooseAsk: IAsk[] = [];
  p = 1;

  constructor(private fb: FormBuilder,
              private routeMap: ActivatedRoute,
              private askService: AskService,
              private quizService: QuizService,
              private router: Router) {
  }

  ngOnInit() {
    this.getId();
    this.form = this.fb.group({
      name: [''],
      asks: [[]],
    });
    this.getAllAsk();
    this.getQuizById();
  }

  getId() {
    this.id = this.routeMap.snapshot.paramMap.get('id');
  }

  getQuizById() {
    this.quizService.getByID(this.id).subscribe((response: IResponse) => {
      this.form.patchValue({
        name: response.data.name
    })
      ;
      const chosenAsk = response.data.asks;
      chosenAsk.forEach((value, i) => {
        for (let j = 0; j < this.asks.length; j++) {
          if (value.id === this.asks[j].id) {
            this.addAskToQuiz(j);
            break;
          }
        }
      });
    });
  }

  getAllAsk() {
    this.askService.getAll().subscribe((response: IResponse) => {
      this.asks = response.data;
    });
  }

  addAskToQuiz(index) {
    const asks = this.asks.splice(index, 1);
    this.chooseAsk.push(asks[0]);
    const askValue = this.form.controls.asks.value;
    askValue.push(asks[0].id);
  }

  removeAskFromQuiz(index) {
    const asks = this.chooseAsk.splice(index, 1);
    const askValue = this.form.controls.asks.value;
    askValue.splice(index, 1);
    this.asks.push(asks[0]);
  }

  onSubmit() {
    this.quizService.update(this.form.value, this.id).subscribe(
      (response: IResponse) => {
          this.router.navigate(['/admin/dashboard/quiz']);
      }, error => {
        console.log(error);
      });
  }

}
