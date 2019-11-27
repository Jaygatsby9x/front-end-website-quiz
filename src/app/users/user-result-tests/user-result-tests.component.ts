import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {AuthService} from '../../services/auth.service';
import {IUser} from '../../interfaces/iuser';
import {IQuiz} from '../../interfaces/iquiz';
import {Ipoint} from '../../interfaces/ipoint';
import {ActivatedRoute} from '@angular/router';
import {IResponse} from '../../interfaces/iresponse';

@Component({
  selector: 'app-user-result-tests',
  templateUrl: './user-result-tests.component.html',
  styleUrls: ['./user-result-tests.component.css']
})
export class UserResultTestsComponent implements OnInit {
  user: IUser;
  quizs: IQuiz[];
  points: Ipoint[];
  protected id: string;
  constructor(private quizService: QuizService, private routerMap: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.routerMap.snapshot.paramMap.get('id');
    this.getQuizByUserID();
  }
  getQuizByUserID() {
    this.quizService.getByUserID(this.id).subscribe((response: IResponse) => {
      this.quizs = response.data.quizs;
      this.points = response.data.points;
      this.user = response.data;
    });
  }
}
