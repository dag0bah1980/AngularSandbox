import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedSecurityOnContentComponent } from './mixed-security-on-content.component';

describe('MixedSecurityOnContentComponent', () => {
  let component: MixedSecurityOnContentComponent;
  let fixture: ComponentFixture<MixedSecurityOnContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedSecurityOnContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedSecurityOnContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
