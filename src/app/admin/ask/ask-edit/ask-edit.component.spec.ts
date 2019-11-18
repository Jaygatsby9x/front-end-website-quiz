import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskEditComponent } from './ask-edit.component';

describe('AskEditComponent', () => {
  let component: AskEditComponent;
  let fixture: ComponentFixture<AskEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
