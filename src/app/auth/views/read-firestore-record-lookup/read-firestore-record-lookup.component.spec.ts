import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFirestoreRecordLookupComponent } from './read-firestore-record-lookup.component';

describe('ReadFirestoreRecordLookupComponent', () => {
  let component: ReadFirestoreRecordLookupComponent;
  let fixture: ComponentFixture<ReadFirestoreRecordLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadFirestoreRecordLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadFirestoreRecordLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
