import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentAreaComponent } from './main-content-area.component';

describe('MainContentAreaComponent', () => {
  let component: MainContentAreaComponent;
  let fixture: ComponentFixture<MainContentAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
