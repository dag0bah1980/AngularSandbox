import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFirestoreRecordComponent } from './read-firestore-record.component';

describe('ReadFirestoreRecordComponent', () => {
  let component: ReadFirestoreRecordComponent;
  let fixture: ComponentFixture<ReadFirestoreRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadFirestoreRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadFirestoreRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
