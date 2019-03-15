import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardviewsetupComponent } from './standardviewsetup.component';

describe('StandardviewsetupComponent', () => {
  let component: StandardviewsetupComponent;
  let fixture: ComponentFixture<StandardviewsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardviewsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardviewsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
