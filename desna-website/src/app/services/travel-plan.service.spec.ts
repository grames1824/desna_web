import { TestBed, inject } from '@angular/core/testing';

import { TravelPlanService } from './travel-plan.service';

describe('TravelPlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelPlanService]
    });
  });

  it('should be created', inject([TravelPlanService], (service: TravelPlanService) => {
    expect(service).toBeTruthy();
  }));
});
