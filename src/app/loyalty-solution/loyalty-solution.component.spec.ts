import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltySolutionComponent } from './loyalty-solution.component';

describe('LoyaltySolutionComponent', () => {
  let component: LoyaltySolutionComponent;
  let fixture: ComponentFixture<LoyaltySolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltySolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltySolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
