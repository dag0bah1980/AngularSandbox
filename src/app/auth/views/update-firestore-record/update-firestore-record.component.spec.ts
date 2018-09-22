import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFirestoreRecordComponent } from './update-firestore-record.component';

describe('UpdateFirestoreRecordComponent', () => {
  let component: UpdateFirestoreRecordComponent;
  let fixture: ComponentFixture<UpdateFirestoreRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFirestoreRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFirestoreRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
