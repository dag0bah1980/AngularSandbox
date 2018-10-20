import { TestBed, inject } from '@angular/core/testing';

import { FirestoreExtendedService } from './firestore-extended.service';

describe('FirestoreExtendedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreExtendedService]
    });
  });

  it('should be created', inject([FirestoreExtendedService], (service: FirestoreExtendedService) => {
    expect(service).toBeTruthy();
  }));
});
