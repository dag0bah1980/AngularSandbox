import { TestBed, inject } from '@angular/core/testing';

import { TitleFromRoutingService } from './title-from-routing.service';

describe('TitleFromRoutingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitleFromRoutingService]
    });
  });

  it('should be created', inject([TitleFromRoutingService], (service: TitleFromRoutingService) => {
    expect(service).toBeTruthy();
  }));
});
