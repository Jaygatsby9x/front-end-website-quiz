import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {IResponse} from '../../../interfaces/iresponse';

@Component({
  selector: 'app-user-statistic-filter',
  templateUrl: './user-statistic-filter.component.html',
  styleUrls: ['./user-statistic-filter.component.css']
})
export class UserStatisticFilterComponent implements OnInit {
  id;
  p = 1;
  points;

  constructor(private routerMap: ActivatedRoute, private quizService: QuizService) {
  }

  ngOnInit() {
    this.id = this.quizService.getID();
    this.getPointsMax();
  }

  getPointsMax() {
    this.quizService.getPointsMax(this.id).subscribe((response: IResponse) => {
      this.points = response.data;
    });
  }


}
