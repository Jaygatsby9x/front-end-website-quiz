import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetailStComponent } from './quiz-detail-st.component';

describe('QuizDetailStComponent', () => {
  let component: QuizDetailStComponent;
  let fixture: ComponentFixture<QuizDetailStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizDetailStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDetailStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
