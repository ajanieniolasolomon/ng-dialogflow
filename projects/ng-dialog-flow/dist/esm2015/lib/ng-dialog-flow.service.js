/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SEARCH_NAME, SEARCH_PARAMETER, EXPECTED_RESULT } from './ng-dialog-flow.constant';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/** @type {?} */
const url = 'https://api.dialogflow.com/v1/query';
export class NgDialogFlowService {
    /**
     * @param {?} config
     * @param {?} http
     */
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    /**
     * @param {?} message
     * @param {?=} timezone
     * @param {?=} sessionid
     * @param {?=} lang
     * @return {?}
     */
    askQuestion(message, timezone, sessionid, lang) {
        /** @type {?} */
        const timeZone = timezone ? timezone : 'America/New_York';
        /** @type {?} */
        const sessionId = sessionid ? sessionid : '12345';
        /** @type {?} */
        const language = lang ? lang : 'en';
        /** @type {?} */
        const postParams = {
            'lang': language,
            'query': message,
            'sessionId': sessionId,
            'timezone': timeZone
        };
        /** @type {?} */
        const params = new HttpParams()
            .set(SEARCH_NAME, SEARCH_PARAMETER);
        /** @type {?} */
        const header = new HttpHeaders().set('Accept', 'application/json')
            .set('Content-Type', EXPECTED_RESULT)
            .set('Authorization', `Bearer ${this.config.token}`);
        // setting header json, authorization
        return this.http.post(url, postParams, {
            params: params,
            headers: header
        });
        // sending a post request which return all in the result interface  tool used to
        // convert json result to an interface is called json to Ts (vscode library)
    }
}
NgDialogFlowService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NgDialogFlowService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: HttpClient }
];
/** @nocollapse */ NgDialogFlowService.ngInjectableDef = i0.defineInjectable({ factory: function NgDialogFlowService_Factory() { return new NgDialogFlowService(i0.inject("config"), i0.inject(i1.HttpClient)); }, token: NgDialogFlowService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgDialogFlowService.prototype.config;
    /** @type {?} */
    NgDialogFlowService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGlhbG9nLWZsb3cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWRpYWxvZy1mbG93LyIsInNvdXJjZXMiOlsibGliL25nLWRpYWxvZy1mbG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUcsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRzFFLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFTLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFakcsTUFBTSxHQUFHLEdBQUcscUNBQXFDLENBQUU7QUFNbkQsTUFBTTs7Ozs7SUFFSixZQUFzQyxNQUFNLEVBQVUsSUFBZ0I7UUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7S0FHckU7Ozs7Ozs7O0lBRU0sV0FBVyxDQUFDLE9BQWUsRUFBRSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsSUFBYTs7UUFDMUYsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDOztRQUMxRCxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDOztRQUNsRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztRQUNoQyxNQUFNLFVBQVUsR0FBRztZQUNqQixNQUFNLEVBQUUsUUFBUTtZQUNqQixPQUFPLEVBQUUsT0FBTztZQUNoQixXQUFXLEVBQUUsU0FBUztZQUN0QixVQUFVLEVBQUUsUUFBUTtTQUNuQixDQUFDOztRQUVGLE1BQU0sTUFBTSxHQUFJLElBQUksVUFBVSxFQUFFO2FBQy9CLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7UUFFcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDO2FBQ2xFLEdBQUcsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDO2FBQ3BDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7O1FBRXRELE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUyxHQUFHLEVBQUUsVUFBVSxFQUFFO1lBQzdDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLE1BQU07U0FDaEIsQ0FBQyxDQUFDOzs7Ozs7WUFoQ04sVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQUljLE1BQU0sU0FBQyxRQUFRO1lBYnJCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlICwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4vbmctZGlhbG9nLWZsb3cuaW50ZXJmYWNlJzsgLy8gcmVzdWx0XG4vLyBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7IC8vIHJ4anMgb2JzZXJ2YWJsZVxuaW1wb3J0IHtTRUFSQ0hfTkFNRSwgU0VBUkNIX1BBUkFNRVRFUiwgRVhQRUNURURfUkVTVUxULCBUT0tFTiB9IGZyb20gJy4vbmctZGlhbG9nLWZsb3cuY29uc3RhbnQnO1xuLy8gaW1wb3J0IGNvbnN0YW50IFxuY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLmRpYWxvZ2Zsb3cuY29tL3YxL3F1ZXJ5JyA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgTmdEaWFsb2dGbG93U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWcgLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgKSB7XG5cblxuICB9XG4gIC8vIGFza1F1ZXN0aW9uIGlzIGJhc2ljYWxseSB1c2VkIHRvIHNlbmQgdGV4dCBBUElcbiBwdWJsaWMgIGFza1F1ZXN0aW9uKG1lc3NhZ2U6IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcsIHNlc3Npb25pZD86IHN0cmluZywgbGFuZz86IHN0cmluZyk6IGFueXtcbmNvbnN0IHRpbWVab25lID0gdGltZXpvbmUgPyB0aW1lem9uZSA6ICdBbWVyaWNhL05ld19Zb3JrJzsgLy8gdGltZXpvbmVcbmNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25pZCA/IHNlc3Npb25pZCA6ICcxMjM0NSc7IC8vIHNlc3Npb25JZFxuY29uc3QgbGFuZ3VhZ2UgPSBsYW5nID8gbGFuZyA6ICdlbic7IC8vIHNldCBsYW5ndWFnZVxuICAgIGNvbnN0IHBvc3RQYXJhbXMgPSB7XG4gICAgICAnbGFuZyc6IGxhbmd1YWdlLFxuICAgICAncXVlcnknOiBtZXNzYWdlICxcbiAgICAgJ3Nlc3Npb25JZCc6IHNlc3Npb25JZCxcbiAgICAgJ3RpbWV6b25lJzogdGltZVpvbmVcbiAgICAgfTtcbiAgICAgLy8gcG9zdCBwYXJhbXRlclxuICAgICBjb25zdCBwYXJhbXMgPSAgbmV3IEh0dHBQYXJhbXMoKVxuICAgICAuc2V0KFNFQVJDSF9OQU1FLCBTRUFSQ0hfUEFSQU1FVEVSKTtcbiAgICAgLy8gc2V0IHF1ZXJ5IHBhcmFtZXRlciAyMDE1MDkxMFxuICAgICBjb25zdCBoZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICAuc2V0KCdDb250ZW50LVR5cGUnLCBFWFBFQ1RFRF9SRVNVTFQpXG4gICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHt0aGlzLmNvbmZpZy50b2tlbn1gKTtcbiAgICAvLyBzZXR0aW5nIGhlYWRlciBqc29uLCBhdXRob3JpemF0aW9uXG4gICByZXR1cm4gIHRoaXMuaHR0cC5wb3N0PFJlc3VsdD4odXJsLCBwb3N0UGFyYW1zLCB7XG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgIGhlYWRlcnM6IGhlYWRlclxuICAgIH0pO1xuICAgIC8vIHNlbmRpbmcgYSBwb3N0IHJlcXVlc3Qgd2hpY2ggcmV0dXJuIGFsbCBpbiB0aGUgcmVzdWx0IGludGVyZmFjZSAgdG9vbCB1c2VkIHRvIFxuICAgIC8vIGNvbnZlcnQganNvbiByZXN1bHQgdG8gYW4gaW50ZXJmYWNlIGlzIGNhbGxlZCBqc29uIHRvIFRzICh2c2NvZGUgbGlicmFyeSlcbiAgfVxufVxuIl19