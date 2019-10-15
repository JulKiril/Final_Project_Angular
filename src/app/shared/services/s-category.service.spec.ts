import { TestBed } from '@angular/core/testing';

import { SCategoryService } from './s-category.service';

describe('SCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SCategoryService = TestBed.get(SCategoryService);
    expect(service).toBeTruthy();
  });
});
