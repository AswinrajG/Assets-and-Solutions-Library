import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyOpschainComponent } from './ey-opschain.component';

describe('EyOpschainComponent', () => {
  let component: EyOpschainComponent;
  let fixture: ComponentFixture<EyOpschainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyOpschainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyOpschainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
