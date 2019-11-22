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
  private pointId: string;
  private quiz: any;
  private questions: any = [];
  private point;
  private alphabet = 'ABCDEFGHI';

  constructor(private route: ActivatedRoute,
              private askService: AskService,
              private quizService: QuizService) {
  }

  ngOnInit() {
    this.getId();
    this.getPointById();
    this.getQuestions();
  }

  getId() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pointId = this.route.snapshot.paramMap.get('point-id');
  }

  getQuestions() {
    this.askService.getByQuizId(this.id).subscribe((response: IResponse) => {
      const questions = response.data;
      this.quiz = response.quiz;
      $.each(questions, (i, question) => {
        this.questions.push(new Question(question.ask));
      });
    });
  }

  getPointById() {
    this.quizService.getPointById(this.pointId).subscribe((response: IResponse) => {
      this.point = response.data;
    });
  }
}
