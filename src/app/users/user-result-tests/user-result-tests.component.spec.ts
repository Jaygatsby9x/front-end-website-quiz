import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResultTestsComponent } from './user-result-tests.component';

describe('UserResultTestsComponent', () => {
  let component: UserResultTestsComponent;
  let fixture: ComponentFixture<UserResultTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResultTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResultTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
