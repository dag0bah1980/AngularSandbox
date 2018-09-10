import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentTitleComponent } from './main-content-title.component';

describe('MainContentTitleComponent', () => {
  let component: MainContentTitleComponent;
  let fixture: ComponentFixture<MainContentTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
