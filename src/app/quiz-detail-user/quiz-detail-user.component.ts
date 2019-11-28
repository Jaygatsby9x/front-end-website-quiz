import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AskService} from '../services/ask.service';
import {IResponse} from '../interfaces/iresponse';
import * as $ from 'jquery';
import {Option, Question} from './models';
import {QuizService} from '../services/quiz.service';
import {IUser} from '../interfaces/iuser';
import {AuthService} from '../services/auth.service';
import {IQuiz} from '../interfaces/iquiz';

@Component({
  selector: 'app-quiz-detail-user',
  templateUrl: './quiz-detail-user.component.html',
  styleUrls: ['./quiz-detail-user.component.css']
})
export class QuizDetailUserComponent implements OnInit {
  private id: string;
  private questions = [];
  protected page = 1;
  protected currentUser: IUser;
  seconds = 300;
  protected quiz: IQuiz = {};
  private alphabet = 'ABCDEFGHI';
  timer;

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
    this.startTimer();
  }

  getId() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getQuestions() {
    this.askService.getByQuizId(this.id).subscribe((response: IResponse) => {
      const questions = response.data;
      this.quiz = response.quiz;
      $.each(questions, (i, question) => {
        this.questions.push(new Question(question.ask));
      });
    });
  }

  onSelect(question: any, option: any) {
    option.selected = (option.selected) ? 0 : 1;
  }

  initFormData() {
    const formData = new FormData();
    formData.append('data', JSON.stringify(this.questions));
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
    this.quizService.submitResult(this.initFormData()).subscribe((response: IResponse) => {
      this.router.navigate(['/quiz', response.data.id, 'result']);
    }, error => {
      console.log(error);
    });
  }

  goBack() {
    window.history.back();
  }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 60) + 'm: ' + Math.floor(this.seconds % 60) + 's';
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.minusSecond();
      localStorage.setItem('seconds', this.seconds.toString());
    }, 1000);
  }

  minusSecond() {
    if (this.seconds <= 0) {
      clearInterval(this.timer);
      this.onSubmit();
    } else {
      this.seconds--;
    }
  }
}
