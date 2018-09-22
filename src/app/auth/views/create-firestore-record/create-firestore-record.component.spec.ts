import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFirestoreRecordComponent } from './create-firestore-record.component';

describe('CreateFirestoreRecordComponent', () => {
  let component: CreateFirestoreRecordComponent;
  let fixture: ComponentFixture<CreateFirestoreRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFirestoreRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFirestoreRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
