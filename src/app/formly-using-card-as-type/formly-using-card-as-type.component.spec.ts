import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormlyUsingCardAsTypeComponent} from './formly-using-card-as-type.component';

describe('FormlyUsingCardAsTypeComponent', () => {
  let component: FormlyUsingCardAsTypeComponent;
  let fixture: ComponentFixture<FormlyUsingCardAsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyUsingCardAsTypeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyUsingCardAsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
