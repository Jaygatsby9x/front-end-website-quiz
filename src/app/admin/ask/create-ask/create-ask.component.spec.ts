import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAskComponent } from './create-ask.component';

describe('CreateAskComponent', () => {
  let component: CreateAskComponent;
  let fixture: ComponentFixture<CreateAskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
