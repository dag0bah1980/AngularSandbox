import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentFooterComponent } from './main-content-footer.component';

describe('MainContentFooterComponent', () => {
  let component: MainContentFooterComponent;
  let fixture: ComponentFixture<MainContentFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
