import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedScmComponent } from './connected-scm.component';

describe('ConnectedScmComponent', () => {
  let component: ConnectedScmComponent;
  let fixture: ComponentFixture<ConnectedScmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedScmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedScmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
