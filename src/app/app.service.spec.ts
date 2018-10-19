import { TestBed, inject, async } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { AppService } from './app.service';
import { NgDialogFlowService, NgDialogFlowModule } from 'ng-dialog-flow';

describe('AppService', () => {
 
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgDialogFlowModule],
      providers: [{
        provide: AppService
      },{provide: NgDialogFlowService} ]
    });
  });

  it('should be created', async (inject([AppService, HttpTestingController], (httpMock: HttpTestingController,
    service: AppService) => {

   // expect(service).toBeDefined();
   // service.ask('hello');
  })));
  it('should be created3', async (inject([AppService, HttpTestingController], (httpMock: HttpTestingController,
    service: AppService) => {

 expect(service.ask('J')).toBeDefined();
   // service.ask('hello');
  })));
});
