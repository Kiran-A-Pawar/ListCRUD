import { TestBed } from '@angular/core/testing';

import { PatientlistService } from './patientlist.service';

describe('ServiceContactService', () => {
  let service: PatientlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
