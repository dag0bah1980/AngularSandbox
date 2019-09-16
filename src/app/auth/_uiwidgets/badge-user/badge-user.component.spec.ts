import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeUserComponent } from './badge-user.component';

describe('BadgeUserComponent', () => {
  let component: BadgeUserComponent;
  let fixture: ComponentFixture<BadgeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
