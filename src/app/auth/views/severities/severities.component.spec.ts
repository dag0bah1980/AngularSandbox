import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeveritiesComponent } from './severities.component';

describe('SeveritiesComponent', () => {
  let component: SeveritiesComponent;
  let fixture: ComponentFixture<SeveritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeveritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeveritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
