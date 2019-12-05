import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChangePasswordComponent } from './use-change-password.component';

describe('UseChangePasswordComponent', () => {
  let component: UseChangePasswordComponent;
  let fixture: ComponentFixture<UseChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
