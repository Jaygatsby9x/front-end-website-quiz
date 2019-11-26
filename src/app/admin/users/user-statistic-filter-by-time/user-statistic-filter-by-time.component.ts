import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../../services/quiz.service';
import {IResponse} from '../../../interfaces/iresponse';

@Component({
  selector: 'app-user-statistic-filter-by-time',
  templateUrl: './user-statistic-filter-by-time.component.html',
  styleUrls: ['./user-statistic-filter-by-time.component.css']
})
export class UserStatisticFilterByTimeComponent implements OnInit {
  id;
  points;

  constructor(private quizService: QuizService) {
  }

  ngOnInit() {
    this.getID();
    this.getPointsByTime();
  }

  getID() {
    this.id = this.quizService.getID();
  }

  getPointsByTime() {
    this.quizService.getPointsByTime(this.id).subscribe((response: IResponse) => {
      this.points = response.data;
    });
  }
}
