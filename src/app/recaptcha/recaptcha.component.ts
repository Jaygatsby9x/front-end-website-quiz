import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {

  @Output() changeRecaptcha: EventEmitter<string> = new EventEmitter<string>();
  protected aFormGroup: FormControl;
  siteKey = '6Lf4h8UUAAAAAFYdM9MIQDE8cG1Y2iEVMlLgirQR';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.aFormGroup = this.formBuilder.control([]);
  }

  handleSuccess($event: string) {
    this.changeRecaptcha.emit($event);
  }

  handleLoad() {

  }
}
