import {Component, OnInit} from '@angular/core';
import {environment as env} from '../../../environments/environment';
import {QuizService} from '../../services/quiz.service';
import {IResponse} from '../../interfaces/iresponse';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizs = [];

  constructor(private quizService: QuizService,
              protected authorization: AuthorizationService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.quizService.getAll().subscribe((response: IResponse) => {
      if (response.data) {
        this.quizs = response.data;
      }
    });
  }

  delete(id) {
    this.quizService.delete(id).subscribe((response: IResponse) => {
      this.getAll();
    });
  }
}
