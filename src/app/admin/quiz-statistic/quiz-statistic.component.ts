import { Component, OnInit } from '@angular/core';
import {IQuiz} from '../../interfaces/iquiz';
import {QuizService} from '../../services/quiz.service';
import {IResponse} from '../../interfaces/iresponse';

@Component({
  selector: 'app-quiz-statistic',
  templateUrl: './quiz-statistic.component.html',
  styleUrls: ['./quiz-statistic.component.css']
})
export class QuizStatisticComponent implements OnInit {
  quizs: IQuiz[];
  p = 1;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.quizService.getAll().subscribe((response: IResponse) => {
      this.quizs = response.data;
    });
  }

}
