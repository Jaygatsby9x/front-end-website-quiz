import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatisticFilterByTimeComponent } from './user-statistic-filter-by-time.component';

describe('UserStatisticFilterByTimeComponent', () => {
  let component: UserStatisticFilterByTimeComponent;
  let fixture: ComponentFixture<UserStatisticFilterByTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatisticFilterByTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatisticFilterByTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
