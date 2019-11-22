import { Component, OnInit } from '@angular/core';
import {IQuiz} from '../../../interfaces/iquiz';
import {IUser} from '../../../interfaces/iuser';
import {QuizService} from '../../../services/quiz.service';
import {AuthService} from '../../../services/auth.service';
import {Ipoint} from '../../../interfaces/ipoint';
import {ActivatedRoute} from '@angular/router';
import {IResponse} from '../../../interfaces/iresponse';

@Component({
  selector: 'app-quiz-detail-st',
  templateUrl: './quiz-detail-st.component.html',
  styleUrls: ['./quiz-detail-st.component.css']
})
export class QuizDetailStComponent implements OnInit {
  quiz: IQuiz;
  users: IUser[];
  points: Ipoint[];
  protected id: string;

  constructor(private quizService: QuizService, private userService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUserByQuizId();
  }
  getUserByQuizId() {
    this.quizService.getUserByQuizId(this.id).subscribe((response: IResponse) => {
      this.users = response.data.users;
      this.quiz = response.data;
      this.points = response.data.points;
    });
  }

}
