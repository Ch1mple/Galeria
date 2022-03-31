import { TestBed } from '@angular/core/testing';

import { ApifotosService } from './apifotos.service';

describe('ApifotosService', () => {
  let service: ApifotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
