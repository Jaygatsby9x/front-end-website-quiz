import {Component, OnInit} from '@angular/core';
import {AskService} from '../../../services/ask.service';
import {ActivatedRoute} from '@angular/router';
import {IAsk} from '../../../interfaces/iask';
import {IAnswer} from '../../../interfaces/ianswer';
import {IResponse} from '../../../interfaces/iresponse';

@Component({
  selector: 'app-ask-details',
  templateUrl: './ask-details.component.html',
  styleUrls: ['./ask-details.component.css']
})
export class AskDetailsComponent implements OnInit {
  id;
  ask: IAsk;

  constructor(private askService: AskService, private routeMap: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.routeMap.snapshot.paramMap.get('id');
    this.getAsk();
  }

  getAsk() {
    this.askService.getByID(this.id).subscribe((response: IResponse) => {
      this.ask = response.ask;
      console.log(response.ask)
    });
  }
}
