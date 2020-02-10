import { TestBed } from '@angular/core/testing';

import { TaskInMemoryDataService } from './task-in-memory-data.service';

describe('TaskInMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskInMemoryDataService = TestBed.get(TaskInMemoryDataService);
    expect(service).toBeTruthy();
  });
});
