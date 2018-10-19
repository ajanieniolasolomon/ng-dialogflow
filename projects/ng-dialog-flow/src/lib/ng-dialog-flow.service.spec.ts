import { TestBed, inject } from '@angular/core/testing';

import { NgDialogFlowService } from './ng-dialog-flow.service';

describe('NgDialogFlowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgDialogFlowService]
    });
  });

  it('should be created', inject([NgDialogFlowService], (service: NgDialogFlowService) => {
    expect(service).toBeTruthy();
  }));
});
