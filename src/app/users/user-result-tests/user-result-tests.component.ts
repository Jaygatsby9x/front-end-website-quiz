import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {IResponse} from '../../interfaces/iresponse';

@Component({
  selector: 'app-user-result-tests',
  templateUrl: './user-result-tests.component.html',
  styleUrls: ['./user-result-tests.component.css']
})
export class UserResultTestsComponent implements OnInit {
  data;
  protected id: string;
  p = 1;

  constructor(private quizService: QuizService, private routerMap: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.authService.getUser().subscribe((response: IResponse) => {
      this.id = response.data.id;
      this.getQuizByUserID();
    });
  }

  getQuizByUserID() {
    this.quizService.getPointsByTime(this.id).subscribe((response: IResponse) => {
      this.data = response.data;
      console.log(response.data);
    });
  }

  getQuizAndPointSort() {
    this.quizService.getPointsMax(this.id).subscribe((response: IResponse) => {
      this.data = response.data;
      console.log(response.data);
    });
  }
}
