import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTaskUpdateComponent } from './app-task-update.component';

describe('AppTaskUpdateComponent', () => {
  let component: AppTaskUpdateComponent;
  let fixture: ComponentFixture<AppTaskUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTaskUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTaskUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
