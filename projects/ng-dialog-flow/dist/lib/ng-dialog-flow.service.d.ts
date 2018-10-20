import { HttpClient } from '@angular/common/http';
export declare class NgDialogFlowService {
    private config;
    http: HttpClient;
    constructor(config: any, http: HttpClient);
    askQuestion(message: string, timezone?: string, sessionid?: string, lang?: string): any;
}
