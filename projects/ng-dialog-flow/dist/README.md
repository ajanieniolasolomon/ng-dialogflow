# Installation

#### Dialogflow is an enterprise-grade NLU platform that makes it easy for developers to design and integrate conversational user interfaces into mobile apps, web applications, devices, and bots.

####  'ng-dialog-flow' an Angular / Ionic  library for DialogFlow  . Powered by [DialogFlow](www.dialogflow.com) .You will need an  _Access Token_  from  DialogFlow to access the full function of this machine learning/natural language processing library.
___

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://opensource.org/licenses/MIT)[![Build Status](https://travis-ci.com/ajanieniolasolomon/ng-dialogflow.svg?branch=master)](https://travis-ci.com/ajanieniolasolomon/ng-dialogflow)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/ajanieniolasolomon/ng-dialogflow/)[![saythanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)]()


 > npm install ng-dialog-flow
  


> yarn add ng-dialog-flow


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
  providers: [NgDialogFlowService],
  bootstrap: [AppComponent]
  })
   ```
### Add to service
   ```bash

import { Injectable } from '@angular/core';
 import { NgDialogFlowService } from 'ng-dialog-flow';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 constructor(private service: NgDialogFlowService) { }

   ask(mess: string) {
    return  this.service.askQuestion(mess).subscribe(res=>{
  console.log(res);
    });

      }

}




   ```
# More

### askQuestion

#### Request parameters:
  *  message
  * timezone
  * sessionid
  *  lang
###   Response object
```
 export interface Message {
	platform: string;
	textToSpeech: string;
	type: string;
}

export interface Fulfillment {
	messages: Message[];
	speech: string;
}

export interface Metadata {
	intentId: string;
	intentName: string;
	webhookForSlotFillingUsed: string;
	webhookUsed: string;
}

export interface Parameter {
	fruit: string[];
}

export interface Result {
	action: string;
	actionIncomplete: boolean;
	contexts: string[];
	fulfillment: Fulfillment;
	metadata: Metadata;
	parameters: Parameter;
	resolvedQuery: string;
	score: number;
	source: string;
}

export interface Statu {
	code: number;
	errorType: string;
}

export interface RootObject {
	id: string;
	lang: string;
	result: Result;
	sessionId: string;
	status: Statu;
	timestamp: string;
}

```
## Contributing

####  Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.Repo name [ng-dialog-flow](https://github.com/ajanieniolasolomon/ng-dialogflow) .

##  How can I thank you?

#### Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or anywhere? Spread the word!

#### Don't forget to follow me on [twitter](https://twitter.com/ajani_eniola) !

### Thanks! Ajani Eniola Solomon.
