import {Component, OnInit} from '@angular/core';
import {AskService} from '../../services/ask.service';
import {IAsk} from '../../interfaces/iask';
import {IResponse} from '../../interfaces/iresponse';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  asks: IAsk[] = [];
  page = 1;

  constructor(protected askService: AskService,
              private router: Router,
              protected authorization: AuthorizationService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.askService.getAll().subscribe((response: IResponse) => {
      if (response.data) {
        this.asks = response.data;
      }
    }, error => {
      console.log(error);
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
}
