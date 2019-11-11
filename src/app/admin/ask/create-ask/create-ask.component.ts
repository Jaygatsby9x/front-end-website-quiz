import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AskService} from '../../../services/ask.service';
import * as $ from 'jquery';
import {IForm} from "../../../interfaces/iform";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-ask',
  templateUrl: './create-ask.component.html',
  styleUrls: ['./create-ask.component.css']
})
export class CreateAskComponent implements OnInit {
  form: FormGroup;
  count = 0;
  answer = [];
  data: IForm = {};

  constructor(private fb: FormBuilder, private askService: AskService, private route: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      content: [''],
    });
    this.addAnswer();
  }

  onSubmit() {
    for (let i = 0; i < this.count; i++) {
      this.answer.push([$('#content' + i).val(), $('#correct' + i).val()]);
    }
    this.data.content = this.form.get('content').value;
    this.data.answer = this.answer;
    this.askService.create(this.data).subscribe(response => {
      console.log(response);
      this.route.navigate(['/dashboard/ask']);
    });
  }

  addAnswer() {
    this.form.get('answer');
    const tr = '<tr>' +
      '<td><input type="text" class="form-control" id="content' + this.count + '"></td><td>' +
      '<select name="" class="form-control" id="correct' + this.count + '">' +
      '<option value="1" >True</option><option value="0">False</option></select></td>' +
      '</tr>';
    $('#answer').append(tr);
    this.count++;
  }

}
