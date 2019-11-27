import {Component, OnInit, OnChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AskService} from '../../../services/ask.service';
import {IAsk} from '../../../interfaces/iask';
import {IResponse} from '../../../interfaces/iresponse';
import {QuizService} from '../../../services/quiz.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {ICategory} from '../../../interfaces/icategory';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  protected categories: ICategory[] = [];
  protected form: FormGroup;
  protected asks: IAsk[];
  protected searchedAsk: IAsk[];
  protected chooseAsk: IAsk[] = [];
  protected p = 1;
  protected keyWord: string;
  protected page = 1;

  constructor(private fb: FormBuilder,
              private askService: AskService,
              private categoryService: CategoryService,
              private quizService: QuizService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      asks: [[]],
      category_id: [''],
    });
    this.getAllAsk();
    this.getAllCategories();
  }

  public getAllAsk() {
    this.askService.getAll().subscribe((response: IResponse) => {
      this.asks = response.data;
      this.search();
    });
  }

  public getAllCategories() {
    this.categoryService.getAll().subscribe((response: IResponse) => {
      const responseCategories = response.data;
      this.categories = responseCategories;
    });
  }

  public addAskToQuiz(askId) {
    const index = this.findIndexById(askId, this.asks);
    const splicedAsks = this.asks.splice(index, 1);
    const askValue = this.form.controls.asks.value;
    this.chooseAsk.push(splicedAsks[0]);
    askValue.push(askId);
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
    this.quizService.create(this.form.value).subscribe(
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
