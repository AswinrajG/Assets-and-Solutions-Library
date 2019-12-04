import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsiDigitizationComponent } from './ssi-digitization.component';

describe('SsiDigitizationComponent', () => {
  let component: SsiDigitizationComponent;
  let fixture: ComponentFixture<SsiDigitizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsiDigitizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsiDigitizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
