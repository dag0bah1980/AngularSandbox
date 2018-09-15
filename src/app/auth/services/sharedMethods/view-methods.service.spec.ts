import { TestBed, inject } from '@angular/core/testing';

import { ViewMethodsService } from './view-methods.service';

describe('ViewMethodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewMethodsService]
    });
  });

  it('should be created', inject([ViewMethodsService], (service: ViewMethodsService) => {
    expect(service).toBeTruthy();
  }));
});
