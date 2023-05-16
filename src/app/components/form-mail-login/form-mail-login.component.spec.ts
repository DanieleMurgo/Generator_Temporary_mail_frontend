import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMailLoginComponent } from './form-mail-login.component';

describe('FormMailLoginComponent', () => {
  let component: FormMailLoginComponent;
  let fixture: ComponentFixture<FormMailLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMailLoginComponent]
    });
    fixture = TestBed.createComponent(FormMailLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
