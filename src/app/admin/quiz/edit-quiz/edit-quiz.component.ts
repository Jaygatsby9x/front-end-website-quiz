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
  protected categories: ICategory[] = [];
  protected id;
  protected form: FormGroup;
  protected asks: IAsk[] = [];
  protected chooseAsk: IAsk[] = [];
  protected searchedAsk: IAsk[];
  protected p = 1;
  protected keyWord: any;

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
      });
      const chosenAsk = response.data.asks;
      chosenAsk.map((item) => {
        this.addAskToQuiz(this.findIndexById(item, this.asks));
      });
    });
  }

  getAllAsk() {
    this.askService.getAll().subscribe((response: IResponse) => {
      this.asks = response.data;
      this.search();
    });
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe((response: IResponse) => {
      const responseCategories = response.data;
      this.categories = responseCategories;
    });
  }

  addAskToQuiz(askId) {
    const index = this.findIndexById(askId, this.asks);
    const asks = this.asks.splice(index, 1);
    this.chooseAsk.push(asks[0]);
    const askValue = this.form.controls.asks.value;
    askValue.push(asks[0].id);
    this.search();
  }

  removeAskFromQuiz(askId) {
    const index = this.findIndexById(askId, this.chooseAsk);
    const asks = this.chooseAsk.splice(index, 1);
    const askValue = this.form.controls.asks.value;
    askValue.splice(index, 1);
    this.asks.push(asks[0]);
    this.search();
  }
  findIndexById(id, arr) {
    return arr.findIndex((item) => {
      return item.id === id;
    });
  }

  onSubmit() {
    this.quizService.update(this.form.value, this.id).subscribe(
      (response: IResponse) => {
        this.router.navigate(['/admin/dashboard/quiz']);
      }, error => {
        if (error.status === 403) {
          this.router.navigate(['/']);
        }
      });
  }

  search() {
    if (!this.keyWord) {
      this.searchedAsk = this.asks;
    } else {
      this.searchedAsk = this.asks.filter((ask) => {
        return ask.content.indexOf(this.keyWord) !== -1;
      });
    }
  }
}
