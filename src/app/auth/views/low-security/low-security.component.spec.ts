import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowSecurityComponent } from './low-security.component';

describe('LowSecurityComponent', () => {
  let component: LowSecurityComponent;
  let fixture: ComponentFixture<LowSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
