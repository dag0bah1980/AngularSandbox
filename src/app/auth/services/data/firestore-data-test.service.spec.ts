import { TestBed, inject } from '@angular/core/testing';

import { FirestoreDataTestService } from './firestore-data-test.service';

describe('FirestoreDataTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreDataTestService]
    });
  });

  it('should be created', inject([FirestoreDataTestService], (service: FirestoreDataTestService) => {
    expect(service).toBeTruthy();
  }));
});
