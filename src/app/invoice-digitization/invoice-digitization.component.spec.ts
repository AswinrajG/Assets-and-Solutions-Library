import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDigitizationComponent } from './invoice-digitization.component';

describe('InvoiceDigitizationComponent', () => {
  let component: InvoiceDigitizationComponent;
  let fixture: ComponentFixture<InvoiceDigitizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceDigitizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDigitizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
