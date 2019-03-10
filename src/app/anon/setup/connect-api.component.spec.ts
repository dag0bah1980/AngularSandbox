import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectApiComponent } from './connect-api.component';

describe('ConnectApiComponent', () => {
  let component: ConnectApiComponent;
  let fixture: ComponentFixture<ConnectApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
