import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycDigitisationComponent } from './kyc-digitisation.component';

describe('KycDigitisationComponent', () => {
  let component: KycDigitisationComponent;
  let fixture: ComponentFixture<KycDigitisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycDigitisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycDigitisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
