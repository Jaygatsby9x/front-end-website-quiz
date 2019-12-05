import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetailUserComponent } from './quiz-detail-user.component';

describe('QuizDetailUserComponent', () => {
  let component: QuizDetailUserComponent;
  let fixture: ComponentFixture<QuizDetailUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizDetailUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
