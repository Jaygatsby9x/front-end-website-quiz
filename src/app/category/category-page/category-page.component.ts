import { Component, OnInit } from '@angular/core';
import {ICategory} from '../../interfaces/icategory';
import {CategoryService} from '../../services/category.service';
import {IResponse} from '../../interfaces/iresponse';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  categories: ICategory[];

  constructor(private categoryService: CategoryService, private router: Router) { }
  private id: string;

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.categoryService.getAll().subscribe((response: IResponse) => {
      this.categories = response.data;
      console.log(response);
    });
  }
}
