import { TestBed } from '@angular/core/testing';

import { ApiMarvelService } from './api-marvel.service';

describe('ApiMarvelService', () => {
  let service: ApiMarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
