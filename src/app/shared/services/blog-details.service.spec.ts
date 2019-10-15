import { TestBed } from '@angular/core/testing';

import { BlogDetailsService } from './blog-details.service';

describe('BlogDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogDetailsService = TestBed.get(BlogDetailsService);
    expect(service).toBeTruthy();
  });
});
