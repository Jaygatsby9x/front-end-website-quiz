import {Component, OnInit} from '@angular/core';
import {AskService} from '../../services/ask.service';
import {IAsk} from '../../interfaces/iask';
import {IResponse} from '../../interfaces/iresponse';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  asks: IAsk[] = [];

  constructor(private askService: AskService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.askService.getAll().subscribe((response: IResponse) => {
      console.log(response);
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
    });
  }
}
