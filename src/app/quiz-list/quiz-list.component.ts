import { Component, OnInit } from '@angular/core';
import {QuizService} from '../services/quiz.service';
import {IResponse} from '../interfaces/iresponse';
import {IQuiz} from '../interfaces/iquiz';
import {ActivatedRoute} from '@angular/router';
import {ICategory} from '../interfaces/icategory';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  private quiz: IQuiz[];
  private category: ICategory;
  protected id: string;

  constructor(private quizService: QuizService,
              private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.getId();
    this.getQuizById();
  }
  getQuizById() {
    this.quizService.getByCategoryID(this.id).subscribe((
      response: IResponse) => {
       this.quiz = response.data;
       this.category = response.category;
    });
  }
  getId() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
