
# Installation

#### An Angular / Ionic  library for DialogFlow . Powered by [DialogFlow](www.dialogflow.com) .You will need an  _Access Token_  from  DialogFlow to access the full function of this machine learning/natural language processing library.
___

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/ajanieniolasolomon/ng-dialogflow)
 > npm install ng-dialogflow 
  


> yarn install ng-dialogflow   


 # Usage

 ### Import  Main Module

```bash

import { NgDialogFlowModule,NgDialogFlowService} from 'ng-dialog-flow';


@NgModule({
 declarations: [
   //....
   ],
  imports: [
   //...
    NgDialogFlowModule.forRoot({token:'xxxxxxxxxxx'})
  ],
  })
   ```