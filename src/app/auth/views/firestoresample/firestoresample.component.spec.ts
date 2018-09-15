import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoresampleComponent } from './firestoresample.component';

describe('FirestoresampleComponent', () => {
  let component: FirestoresampleComponent;
  let fixture: ComponentFixture<FirestoresampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirestoresampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestoresampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
