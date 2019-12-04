import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInterpretationComponent } from './email-interpretation.component';

describe('EmailInterpretationComponent', () => {
  let component: EmailInterpretationComponent;
  let fixture: ComponentFixture<EmailInterpretationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailInterpretationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailInterpretationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
