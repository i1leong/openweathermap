import { TestBed } from '@angular/core/testing';

import { OwmapiService } from './owmapi.service';

describe('OwmapiService', () => {
  let service: OwmapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwmapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
