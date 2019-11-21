import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizStatisticComponent } from './quiz-statistic.component';

describe('QuizStatisticComponent', () => {
  let component: QuizStatisticComponent;
  let fixture: ComponentFixture<QuizStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
