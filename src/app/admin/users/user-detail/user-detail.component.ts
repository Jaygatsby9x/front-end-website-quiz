import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {QuizService} from '../../../services/quiz.service';
import {IUser} from '../../../interfaces/iuser';
import {IResponse} from '../../../interfaces/iresponse';
import {IQuiz} from '../../../interfaces/iquiz';
import {ActivatedRoute} from '@angular/router';
import {Ipoint} from '../../../interfaces/ipoint';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: IUser;
  quizs: IQuiz[];
  points: Ipoint[];
  protected id: string;

  constructor(private quizService: QuizService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.setId();
    this.getQuizByUserID();
  }

  setId() {
    this.quizService.setID(this.id);
  }

  getQuizByUserID() {
    this.quizService.getByUserID(this.id).subscribe((response: IResponse) => {
      this.quizs = response.data.quizs;
      this.points = response.data.points;
      this.user = response.data;
    });
  }


}
