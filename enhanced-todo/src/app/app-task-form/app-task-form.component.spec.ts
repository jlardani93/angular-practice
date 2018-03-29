import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTaskFormComponent } from './app-task-form.component';

describe('AppTaskFormComponent', () => {
  let component: AppTaskFormComponent;
  let fixture: ComponentFixture<AppTaskFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTaskFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
