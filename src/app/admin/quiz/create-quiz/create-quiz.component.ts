import {Component, OnInit} from '@angular/core';
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
  categories: ICategory[] = [];
  form: FormGroup;
  asks: IAsk[];
  chooseAsk: IAsk[] = [];
  p = 1;

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
    this.quizService.create(this.form.value).subscribe(
      (response: IResponse) => {
        this.router.navigate(['/admin/dashboard/quiz']);
      }, error => {
        if (error.status === 403) {
          this.router.navigate(['/']);
        }
      });
  }
}
