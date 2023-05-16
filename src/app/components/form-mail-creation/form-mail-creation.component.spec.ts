import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMailCreationComponent } from './form-mail-creation.component';

describe('FormMailCreationComponent', () => {
  let component: FormMailCreationComponent;
  let fixture: ComponentFixture<FormMailCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMailCreationComponent]
    });
    fixture = TestBed.createComponent(FormMailCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
