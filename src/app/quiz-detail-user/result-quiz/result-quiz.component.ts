import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Quiz, Question, Option} from '../models';
import {IResponse} from '../../interfaces/iresponse';
import * as $ from 'jquery';
import {AskService} from '../../services/ask.service';
import {QuizService} from '../../services/quiz.service';

@Component({
  selector: 'app-result-quiz',
  templateUrl: './result-quiz.component.html',
  styleUrls: ['./result-quiz.component.css']
})
export class ResultQuizComponent implements OnInit {

  private id: string;
  private point;
  private quiz;
  private questions: any = [];
  private alphabet = 'ABCDEFGHI';

  constructor(private route: ActivatedRoute,
              private askService: AskService,
              private quizService: QuizService) {
  }

  ngOnInit() {
    this.getId();
    this.getResult();
  }

  getId() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getResult() {
    this.quizService.getResult(this.id).subscribe((res: IResponse) => {
      this.questions = res.data;
      this.point = res.point;
      this.quiz = res.quiz;
    });
  }

  isCorrect(answer) {
    if (answer.selected) {
      return (answer.isAnswer) ? 'alert-success' : 'alert-danger';
    }
  }

  goBack() {
    window.history.go(-1);
  }
}
