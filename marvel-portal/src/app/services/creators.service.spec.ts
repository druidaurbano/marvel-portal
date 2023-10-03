import { TestBed } from '@angular/core/testing';

import { CreatorsService } from './creators.service';

describe('CreatorsService', () => {
  let service: CreatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
