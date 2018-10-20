import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDialogFlowModule, NgDialogFlowService } from 'ng-dialog-flow';


import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgDialogFlowModule.forRoot({token: 'your token'})
  ],
  providers: [AppService, NgDialogFlowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
