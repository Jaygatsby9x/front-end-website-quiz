import {Component, OnInit} from '@angular/core';
import {ICategory} from '../../interfaces/icategory';
import {CategoryService} from '../../services/category.service';
import {IResponse} from '../../interfaces/iresponse';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [];
  page = 1;

  constructor(private categoryService: CategoryService,
              protected authorization: AuthorizationService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll().subscribe((response: IResponse) => {
      this.categories = response.data;
    });
  }

  delete(id: string) {
    this.categoryService.delete(id).subscribe((response: IResponse) => {
      if (response.status === 'success') {
        this.getAll();
      }
    });
  }
}
