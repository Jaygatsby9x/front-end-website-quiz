import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IAsk} from '../../../interfaces/iask';
import {AskService} from '../../../services/ask.service';
import {QuizService} from '../../../services/quiz.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IResponse} from '../../../interfaces/iresponse';
import * as $ from 'jquery';
import {CategoryService} from '../../../services/category.service';
import {ICategory} from '../../../interfaces/icategory';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements OnInit {
  categories: ICategory[] = [];
  id;
  form: FormGroup;
  asks: IAsk[] = [];
  chooseAsk: IAsk[] = [];
  p = 1;

  constructor(private fb: FormBuilder,
              private routeMap: ActivatedRoute,
              private categoryService: CategoryService,
              private askService: AskService,
              private quizService: QuizService,
              private router: Router) {
  }

  ngOnInit() {
    this.getId();
    this.form = this.fb.group({
      name: [''],
      asks: [[]],
      category_id: ['']
    });
    this.getAllAsk();
    this.getQuizById();
    this.getAllCategories();
  }

  getId() {
    this.id = this.routeMap.snapshot.paramMap.get('id');
  }

  getQuizById() {
    this.quizService.getByID(this.id).subscribe((response: IResponse) => {
      const quizName = response.data.name;
      const responseCategory = response.data.category_id;
      this.form.patchValue({
        name: quizName,
        category_id: responseCategory
      })
      ;
      const chosenAsk = response.data.asks;
      chosenAsk.forEach((value, i) => {
        for (let j = 0; j < this.asks.length; j++) {
          if (value.id === this.asks[j].id) {
            this.addAskToQuiz(j);
            break;
          }
        }
      });
    });
  }

  getAllAsk() {
    this.askService.getAll().subscribe((response: IResponse) => {
      this.asks = response.data;
    });
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe((response: IResponse) => {
      const responseCategories = response.data;
      this.categories = responseCategories;
    });
  }

  addAskToQuiz(index) {
    const asks = this.asks.splice(index, 1);
    this.chooseAsk.push(asks[0]);
    const askValue = this.form.controls.asks.value;
    askValue.push(asks[0].id);
  }

  removeAskFromQuiz(index) {
    const asks = this.chooseAsk.splice(index, 1);
    const askValue = this.form.controls.asks.value;
    askValue.splice(index, 1);
    this.asks.push(asks[0]);
  }

  onSubmit() {
    this.quizService.update(this.form.value, this.id).subscribe(
      (response: IResponse) => {
        this.router.navigate(['/admin/dashboard/quiz']);
      }, error => {
        console.log(error);
      });
  }

}
