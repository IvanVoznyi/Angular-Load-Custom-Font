import { TestBed } from '@angular/core/testing';

import { LoadfontService } from './loadfont.service';

describe('LoadfontService', () => {
  let service: LoadfontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadfontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
