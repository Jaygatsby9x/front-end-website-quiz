import { Component, OnInit } from '@angular/core';
import {QuizService} from '../services/quiz.service';
import {IResponse} from '../interfaces/iresponse';
import {IQuiz} from '../interfaces/iquiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  private quizs: IQuiz[];

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
