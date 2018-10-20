import { Component } from '@angular/core';
import { NgDialogFlowService } from 'ng-dialog-flow';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public service: NgDialogFlowService) {
    this.service.askQuestion('hello').subscribe(res=>{
  console.log(res);
    })

  }

public ask(mess: string) {
 return "helo";

   }


}
