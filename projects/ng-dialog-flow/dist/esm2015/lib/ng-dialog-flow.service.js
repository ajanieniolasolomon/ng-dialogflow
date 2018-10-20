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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGlhbG9nLWZsb3cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWRpYWxvZy1mbG93LyIsInNvdXJjZXMiOlsibGliL25nLWRpYWxvZy1mbG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUcsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRzFFLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFTLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFakcsTUFBTSxHQUFHLEdBQUcscUNBQXFDLENBQUU7QUFNbkQsTUFBTTs7Ozs7SUFFSixZQUFzQyxNQUFNLEVBQVUsSUFBZ0I7UUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7S0FHckU7Ozs7Ozs7O0lBRU0sV0FBVyxDQUFDLE9BQWUsRUFBRSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsSUFBYTs7UUFDMUYsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDOztRQUMxRCxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDOztRQUNsRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztRQUNoQyxNQUFNLFVBQVUsR0FBRztZQUNqQixNQUFNLEVBQUUsUUFBUTtZQUNqQixPQUFPLEVBQUUsT0FBTztZQUNoQixXQUFXLEVBQUUsU0FBUztZQUN0QixVQUFVLEVBQUUsUUFBUTtTQUNuQixDQUFDOztRQUVGLE1BQU0sTUFBTSxHQUFJLElBQUksVUFBVSxFQUFFO2FBQy9CLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7UUFFcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDO2FBQ2xFLEdBQUcsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDO2FBQ3BDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7O1FBRXRELE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUyxHQUFHLEVBQUUsVUFBVSxFQUFFO1lBQzdDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLE1BQU07U0FDaEIsQ0FBQyxDQUFDOzs7Ozs7WUFoQ04sVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQUljLE1BQU0sU0FBQyxRQUFRO1lBYnJCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlICwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4vbmctZGlhbG9nLWZsb3cuaW50ZXJmYWNlJzsgLy8gcmVzdWx0XG4vLyBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7IC8vIHJ4anMgb2JzZXJ2YWJsZVxuaW1wb3J0IHtTRUFSQ0hfTkFNRSwgU0VBUkNIX1BBUkFNRVRFUiwgRVhQRUNURURfUkVTVUxULCBUT0tFTiB9IGZyb20gJy4vbmctZGlhbG9nLWZsb3cuY29uc3RhbnQnO1xuLy8gaW1wb3J0IGNvbnN0YW50XG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkuZGlhbG9nZmxvdy5jb20vdjEvcXVlcnknIDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ0RpYWxvZ0Zsb3dTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZyAsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCApIHtcblxuXG4gIH1cbiAgLy8gYXNrUXVlc3Rpb24gaXMgYmFzaWNhbGx5IHVzZWQgdG8gc2VuZCB0ZXh0IEFQSVxuIHB1YmxpYyAgYXNrUXVlc3Rpb24obWVzc2FnZTogc3RyaW5nLCB0aW1lem9uZT86IHN0cmluZywgc2Vzc2lvbmlkPzogc3RyaW5nLCBsYW5nPzogc3RyaW5nKTogYW55e1xuY29uc3QgdGltZVpvbmUgPSB0aW1lem9uZSA/IHRpbWV6b25lIDogJ0FtZXJpY2EvTmV3X1lvcmsnOyAvLyB0aW1lem9uZVxuY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbmlkID8gc2Vzc2lvbmlkIDogJzEyMzQ1JzsgLy8gc2Vzc2lvbklkXG5jb25zdCBsYW5ndWFnZSA9IGxhbmcgPyBsYW5nIDogJ2VuJzsgLy8gc2V0IGxhbmd1YWdlXG4gICAgY29uc3QgcG9zdFBhcmFtcyA9IHtcbiAgICAgICdsYW5nJzogbGFuZ3VhZ2UsXG4gICAgICdxdWVyeSc6IG1lc3NhZ2UgLFxuICAgICAnc2Vzc2lvbklkJzogc2Vzc2lvbklkLFxuICAgICAndGltZXpvbmUnOiB0aW1lWm9uZVxuICAgICB9O1xuICAgICAvLyBwb3N0IHBhcmFtdGVyXG4gICAgIGNvbnN0IHBhcmFtcyA9ICBuZXcgSHR0cFBhcmFtcygpXG4gICAgIC5zZXQoU0VBUkNIX05BTUUsIFNFQVJDSF9QQVJBTUVURVIpO1xuICAgICAvLyBzZXQgcXVlcnkgcGFyYW1ldGVyIDIwMTUwOTEwXG4gICAgIGNvbnN0IGhlYWRlciA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsIEVYUEVDVEVEX1JFU1VMVClcbiAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke3RoaXMuY29uZmlnLnRva2VufWApO1xuICAgIC8vIHNldHRpbmcgaGVhZGVyIGpzb24sIGF1dGhvcml6YXRpb25cbiAgIHJldHVybiAgdGhpcy5odHRwLnBvc3Q8UmVzdWx0Pih1cmwsIHBvc3RQYXJhbXMsIHtcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgaGVhZGVyczogaGVhZGVyXG4gICAgfSk7XG4gICAgLy8gc2VuZGluZyBhIHBvc3QgcmVxdWVzdCB3aGljaCByZXR1cm4gYWxsIGluIHRoZSByZXN1bHQgaW50ZXJmYWNlICB0b29sIHVzZWQgdG8gXG4gICAgLy8gY29udmVydCBqc29uIHJlc3VsdCB0byBhbiBpbnRlcmZhY2UgaXMgY2FsbGVkIGpzb24gdG8gVHMgKHZzY29kZSBsaWJyYXJ5KVxuICB9XG59XG4iXX0=