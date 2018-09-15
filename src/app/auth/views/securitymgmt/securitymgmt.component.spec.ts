import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritymgmtComponent } from './securitymgmt.component';

describe('SecuritymgmtComponent', () => {
  let component: SecuritymgmtComponent;
  let fixture: ComponentFixture<SecuritymgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritymgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritymgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
