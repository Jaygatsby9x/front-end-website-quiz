import {Component, OnInit} from '@angular/core';
import {IUser} from '../../../interfaces/iuser';
import {IQuiz} from '../../../interfaces/iquiz';
import {Ipoint} from '../../../interfaces/ipoint';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {IResponse} from '../../../interfaces/iresponse';
import {AuthService} from '../../../services/auth.service';
import {log} from 'util';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.css']
})
export class UserStatisticComponent implements OnInit {
  user: IUser;
  quizs: IQuiz[];
  points: Ipoint[];
  id;
  p = 1;

  constructor(private authService: AuthService, private quizService: QuizService) {
  }

  ngOnInit() {
    this.getID();
    this.getQuizByUserID();

  }

  getID() {
    this.id = this.quizService.getID();
  }

  getQuizByUserID() {
    this.quizService.getByUserID(this.id).subscribe((response: IResponse) => {
      console.log(response);
      this.quizs = response.data.quizs;
      this.points = response.data.points;
      this.user = response.data;
    });
  }
}
