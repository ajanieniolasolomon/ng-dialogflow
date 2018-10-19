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
    NgDialogFlowModule.forRoot({token: 'ea4e389270ef4a058be1a77970b34d57'})
  ],
  providers: [AppService, NgDialogFlowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
