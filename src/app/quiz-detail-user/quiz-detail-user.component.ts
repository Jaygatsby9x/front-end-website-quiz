import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AskService} from '../services/ask.service';
import {IResponse} from '../interfaces/iresponse';
import * as $ from 'jquery';
import {Option, Question} from './models';
import {QuizService} from '../services/quiz.service';
import {IUser} from '../interfaces/iuser';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-quiz-detail-user',
  templateUrl: './quiz-detail-user.component.html',
  styleUrls: ['./quiz-detail-user.component.css']
})
export class QuizDetailUserComponent implements OnInit {

  private id: string;
  private questions = [];
  protected data;
  protected page = 1;
  protected currentUser: IUser;
  protected quiz;

  constructor(private route: ActivatedRoute,
              private askService: AskService,
              private quizService: QuizService,
              private authService: AuthService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.getId();
    this.getQuestions();
    this.getCurrentUser();
  }

  getId() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getQuestions() {
    this.askService.getByQuizId(this.id).subscribe((response: IResponse) => {
      const questions = response.data;
      console.log('oke');
      this.quiz = response.quiz;
      $.each(questions, (i, question) => {
        this.questions.push(new Question(question.ask));
      });
    });
  }

  onSelect(question: any, option: any) {
    option.selected = !(option.selected);
  }

  initFormData() {
    const formData = new FormData();
    formData.append('data', JSON.stringify(this.data));
    formData.append('quiz_id', this.id);
    formData.append('currentUser', this.currentUser.id);
    return formData;
  }

  getCurrentUser() {
    this.authService.getUser().subscribe((response: IResponse) => {
      this.currentUser = response.data;
    });
  }

  onSubmit() {
    this.data = [];
    this.questions.map(question => {
      const data = [];
      question.options.map(answer => {
        if (answer.selected) {
          data.push(answer);
        }
      });
      this.data.push(data);
    });
    this.quizService.submitResult(this.initFormData()).subscribe((response: IResponse) => {
      this.router.navigate(['/quiz', this.id , 'result', response.data.id ]);
    }, error => {
      console.log(error);
    });
  }
}
