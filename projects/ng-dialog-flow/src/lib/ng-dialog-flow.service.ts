import { Injectable , Inject} from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Result } from './ng-dialog-flow.interface'; // result
// import { Observable } from 'rxjs'; // rxjs observable
import {SEARCH_NAME, SEARCH_PARAMETER, EXPECTED_RESULT, TOKEN } from './ng-dialog-flow.constant';
// import constant
const url = 'https://api.dialogflow.com/v1/query' ;

@Injectable({
  providedIn: 'root'
})

export class NgDialogFlowService {

  constructor(@Inject('config') private config , public http: HttpClient, ) {


  }
  // askQuestion is basically used to send text API
 public  askQuestion(message: string, timezone?: string, sessionid?: string, lang?: string): any{
const timeZone = timezone ? timezone : 'America/New_York'; // timezone
const sessionId = sessionid ? sessionid : '12345'; // sessionId
const language = lang ? lang : 'en'; // set language
    const postParams = {
      'lang': language,
     'query': message ,
     'sessionId': sessionId,
     'timezone': timeZone
     };
     // post paramter
     const params =  new HttpParams()
     .set(SEARCH_NAME, SEARCH_PARAMETER);
     // set query parameter 20150910
     const header = new HttpHeaders().set('Accept', 'application/json')
    .set('Content-Type', EXPECTED_RESULT)
    .set('Authorization', `Bearer ${this.config.token}`);
    // setting header json, authorization
   return  this.http.post<Result>(url, postParams, {
      params: params,
      headers: header
    });
    // sending a post request which return all in the result interface  tool used to 
    // convert json result to an interface is called json to Ts (vscode library)
  }
}
