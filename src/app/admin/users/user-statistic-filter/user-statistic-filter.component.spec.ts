import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatisticFilterComponent } from './user-statistic-filter.component';

describe('UserStatisticFilterComponent', () => {
  let component: UserStatisticFilterComponent;
  let fixture: ComponentFixture<UserStatisticFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatisticFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatisticFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
