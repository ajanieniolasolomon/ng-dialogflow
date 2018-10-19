import { Injectable } from '@angular/core';
 import { NgDialogFlowService } from 'ng-dialog-flow';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 constructor(private service: NgDialogFlowService) { }

   ask(mess: string) {
    return    this.service.askQuestion(mess);

      }

}
