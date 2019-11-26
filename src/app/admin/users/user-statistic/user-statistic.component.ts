import {Component, OnInit} from '@angular/core';
import {IUser} from '../../../interfaces/iuser';
import {IQuiz} from '../../../interfaces/iquiz';
import {Ipoint} from '../../../interfaces/ipoint';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {IResponse} from '../../../interfaces/iresponse';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.css']
})
export class UserStatisticComponent implements OnInit {
  user: IUser;
  quizs: IQuiz[];
  points: Ipoint[];
  protected id: string;

  constructor(private routerMap: ActivatedRoute, private quizService: QuizService) {
  }

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
