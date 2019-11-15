import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseEditComponent } from './use-edit.component';

describe('UseEditComponent', () => {
  let component: UseEditComponent;
  let fixture: ComponentFixture<UseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
