import { TestBed } from '@angular/core/testing';

import { TodoesServiceService } from './todoes-service.service';

describe('TodoesServiceService', () => {
  let service: TodoesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
