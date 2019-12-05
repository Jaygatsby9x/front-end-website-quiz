import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPeopleComponent } from './famous-people.component';

describe('FamousPeopleComponent', () => {
  let component: FamousPeopleComponent;
  let fixture: ComponentFixture<FamousPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamousPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
