import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLogicalFirestoreRecordComponent } from './delete-logical-firestore-record.component';

describe('DeleteLogicalFirestoreRecordComponent', () => {
  let component: DeleteLogicalFirestoreRecordComponent;
  let fixture: ComponentFixture<DeleteLogicalFirestoreRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLogicalFirestoreRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLogicalFirestoreRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
