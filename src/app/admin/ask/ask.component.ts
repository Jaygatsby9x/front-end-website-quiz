import {Component, OnInit} from '@angular/core';
import {AskService} from '../../services/ask.service';
import {IAsk} from '../../interfaces/iask';
import {IResponse} from '../../interfaces/iresponse';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../services/authorization.service';
import {ILevel} from '../../interfaces/ilevel';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  asks: IAsk[] = [];
  levels: ILevel[] = [];
  page = 1;
  protected keyWord: string;
  protected searchedAsks: IAsk[] = [];

  constructor(protected askService: AskService,
              private levelService: LevelService,
              private router: Router,
              protected authorization: AuthorizationService) {
  }

  ngOnInit() {
    this.getAll();
    this.getAllLevel();
  }

  getAll() {
    this.askService.getAll().subscribe((response: IResponse) => {
      if (response.data) {
        this.asks = response.data;
        this.search();
      }
    }, error => {
      console.log(error);
    });
  }

  getAllLevel() {
    this.levelService.getAll().subscribe((response: IResponse) => {
      this.levels = response.data;
    });
  }
  delete(askId: number) {
    this.askService.delete(askId).subscribe((response: IResponse) => {
      this.getAll();
    }, error => {
      if (error.status === 403) {
        this.router.navigate(['/forbidden']);
      }
    });
  }

  search() {
    if (!this.keyWord) {
      this.searchedAsks = this.asks;
    } else {
      this.searchedAsks = this.asks.filter((ask) => {
        return ask.content.indexOf(this.keyWord) !== -1;
      });
    }
  }
}
