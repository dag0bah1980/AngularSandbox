import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePermFirestoreRecordComponent } from './delete-perm-firestore-record.component';

describe('DeletePermFirestoreRecordComponent', () => {
  let component: DeletePermFirestoreRecordComponent;
  let fixture: ComponentFixture<DeletePermFirestoreRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePermFirestoreRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePermFirestoreRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
