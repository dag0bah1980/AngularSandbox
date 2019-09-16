import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeDateComponent } from './badge-date.component';

describe('BadgeDateComponent', () => {
  let component: BadgeDateComponent;
  let fixture: ComponentFixture<BadgeDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
