import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDigitizationComponent } from './contract-digitization.component';

describe('ContractDigitizationComponent', () => {
  let component: ContractDigitizationComponent;
  let fixture: ComponentFixture<ContractDigitizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractDigitizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractDigitizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
