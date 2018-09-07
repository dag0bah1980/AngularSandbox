import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideControlBarHiddenComponent } from './side-control-bar-hidden.component';

describe('SideControlBarHiddenComponent', () => {
  let component: SideControlBarHiddenComponent;
  let fixture: ComponentFixture<SideControlBarHiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideControlBarHiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideControlBarHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
