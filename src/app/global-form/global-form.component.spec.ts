import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFormComponent } from './global-form.component';

describe('GlobalFormComponent', () => {
  let component: GlobalFormComponent;
  let fixture: ComponentFixture<GlobalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
