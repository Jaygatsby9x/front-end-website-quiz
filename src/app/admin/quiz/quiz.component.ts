import {Component, OnInit} from '@angular/core';
import {environment as env} from '../../../environments/environment';
import {QuizService} from '../../services/quiz.service';
import {IResponse} from '../../interfaces/iresponse';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizs = [];
  constructor(private quizService: QuizService) {
  }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.quizService.getAll().subscribe((response: IResponse) => {
      if (response.data) {
        this.quizs = response.data;
      }
    }, error => {
      console.log(error);
    });
  }

  delete(id: any) {
  }
}
