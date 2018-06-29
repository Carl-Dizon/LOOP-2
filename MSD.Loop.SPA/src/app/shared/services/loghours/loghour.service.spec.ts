import { TestBed, inject } from '@angular/core/testing';

import { LoghourService } from './loghour.service';

describe('LoghourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoghourService]
    });
  });

  it('should be created', inject([LoghourService], (service: LoghourService) => {
    expect(service).toBeTruthy();
  }));
});
