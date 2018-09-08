import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSecurityComponent } from './high-security.component';

describe('HighSecurityComponent', () => {
  let component: HighSecurityComponent;
  let fixture: ComponentFixture<HighSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
