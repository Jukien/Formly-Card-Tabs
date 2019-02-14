import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormlyUsingCardComponent} from './formly-using-card.component';

describe('FormlyUsingCardComponent', () => {
  let component: FormlyUsingCardComponent;
  let fixture: ComponentFixture<FormlyUsingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyUsingCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyUsingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
