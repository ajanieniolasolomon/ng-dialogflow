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
var url = 'https://api.dialogflow.com/v1/query';
var NgDialogFlowService = /** @class */ (function () {
    function NgDialogFlowService(config, http) {
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
    NgDialogFlowService.prototype.askQuestion = /**
     * @param {?} message
     * @param {?=} timezone
     * @param {?=} sessionid
     * @param {?=} lang
     * @return {?}
     */
    function (message, timezone, sessionid, lang) {
        /** @type {?} */
        var timeZone = timezone ? timezone : 'America/New_York';
        /** @type {?} */
        var sessionId = sessionid ? sessionid : '12345';
        /** @type {?} */
        var language = lang ? lang : 'en';
        /** @type {?} */
        var postParams = {
            'lang': language,
            'query': message,
            'sessionId': sessionId,
            'timezone': timeZone
        };
        /** @type {?} */
        var params = new HttpParams()
            .set(SEARCH_NAME, SEARCH_PARAMETER);
        /** @type {?} */
        var header = new HttpHeaders().set('Accept', 'application/json')
            .set('Content-Type', EXPECTED_RESULT)
            .set('Authorization', "Bearer " + this.config.token);
        // setting header json, authorization
        return this.http.post(url, postParams, {
            params: params,
            headers: header
        });
        // sending a post request which return all in the result interface  tool used to
        // convert json result to an interface is called json to Ts (vscode library)
    };
    NgDialogFlowService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgDialogFlowService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ NgDialogFlowService.ngInjectableDef = i0.defineInjectable({ factory: function NgDialogFlowService_Factory() { return new NgDialogFlowService(i0.inject("config"), i0.inject(i1.HttpClient)); }, token: NgDialogFlowService, providedIn: "root" });
    return NgDialogFlowService;
}());
export { NgDialogFlowService };
if (false) {
    /** @type {?} */
    NgDialogFlowService.prototype.config;
    /** @type {?} */
    NgDialogFlowService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGlhbG9nLWZsb3cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWRpYWxvZy1mbG93LyIsInNvdXJjZXMiOlsibGliL25nLWRpYWxvZy1mbG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUcsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRzFFLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFTLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFakcsSUFBTSxHQUFHLEdBQUcscUNBQXFDLENBQUU7O0lBUWpELDZCQUFzQyxNQUFNLEVBQVUsSUFBZ0I7UUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7S0FHckU7Ozs7Ozs7O0lBRU0seUNBQVc7Ozs7Ozs7Y0FBQyxPQUFlLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLElBQWE7O1FBQzFGLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQzs7UUFDMUQsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzs7UUFDbEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7UUFDaEMsSUFBTSxVQUFVLEdBQUc7WUFDakIsTUFBTSxFQUFFLFFBQVE7WUFDakIsT0FBTyxFQUFFLE9BQU87WUFDaEIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsVUFBVSxFQUFFLFFBQVE7U0FDbkIsQ0FBQzs7UUFFRixJQUFNLE1BQU0sR0FBSSxJQUFJLFVBQVUsRUFBRTthQUMvQixHQUFHLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7O1FBRXBDLElBQU0sTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQzthQUNsRSxHQUFHLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQzthQUNwQyxHQUFHLENBQUMsZUFBZSxFQUFFLFlBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFPLENBQUMsQ0FBQzs7UUFFdEQsTUFBTSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFTLEdBQUcsRUFBRSxVQUFVLEVBQUU7WUFDN0MsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFDLENBQUM7Ozs7O2dCQWhDTixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQUljLE1BQU0sU0FBQyxRQUFRO2dCQWJyQixVQUFVOzs7OEJBRm5COztTQWFhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnLi9uZy1kaWFsb2ctZmxvdy5pbnRlcmZhY2UnOyAvLyByZXN1bHRcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJzsgLy8gcnhqcyBvYnNlcnZhYmxlXG5pbXBvcnQge1NFQVJDSF9OQU1FLCBTRUFSQ0hfUEFSQU1FVEVSLCBFWFBFQ1RFRF9SRVNVTFQsIFRPS0VOIH0gZnJvbSAnLi9uZy1kaWFsb2ctZmxvdy5jb25zdGFudCc7XG4vLyBpbXBvcnQgY29uc3RhbnQgXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkuZGlhbG9nZmxvdy5jb20vdjEvcXVlcnknIDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ0RpYWxvZ0Zsb3dTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZyAsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCApIHtcblxuXG4gIH1cbiAgLy8gYXNrUXVlc3Rpb24gaXMgYmFzaWNhbGx5IHVzZWQgdG8gc2VuZCB0ZXh0IEFQSVxuIHB1YmxpYyAgYXNrUXVlc3Rpb24obWVzc2FnZTogc3RyaW5nLCB0aW1lem9uZT86IHN0cmluZywgc2Vzc2lvbmlkPzogc3RyaW5nLCBsYW5nPzogc3RyaW5nKTogYW55e1xuY29uc3QgdGltZVpvbmUgPSB0aW1lem9uZSA/IHRpbWV6b25lIDogJ0FtZXJpY2EvTmV3X1lvcmsnOyAvLyB0aW1lem9uZVxuY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbmlkID8gc2Vzc2lvbmlkIDogJzEyMzQ1JzsgLy8gc2Vzc2lvbklkXG5jb25zdCBsYW5ndWFnZSA9IGxhbmcgPyBsYW5nIDogJ2VuJzsgLy8gc2V0IGxhbmd1YWdlXG4gICAgY29uc3QgcG9zdFBhcmFtcyA9IHtcbiAgICAgICdsYW5nJzogbGFuZ3VhZ2UsXG4gICAgICdxdWVyeSc6IG1lc3NhZ2UgLFxuICAgICAnc2Vzc2lvbklkJzogc2Vzc2lvbklkLFxuICAgICAndGltZXpvbmUnOiB0aW1lWm9uZVxuICAgICB9O1xuICAgICAvLyBwb3N0IHBhcmFtdGVyXG4gICAgIGNvbnN0IHBhcmFtcyA9ICBuZXcgSHR0cFBhcmFtcygpXG4gICAgIC5zZXQoU0VBUkNIX05BTUUsIFNFQVJDSF9QQVJBTUVURVIpO1xuICAgICAvLyBzZXQgcXVlcnkgcGFyYW1ldGVyIDIwMTUwOTEwXG4gICAgIGNvbnN0IGhlYWRlciA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsIEVYUEVDVEVEX1JFU1VMVClcbiAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke3RoaXMuY29uZmlnLnRva2VufWApO1xuICAgIC8vIHNldHRpbmcgaGVhZGVyIGpzb24sIGF1dGhvcml6YXRpb25cbiAgIHJldHVybiAgdGhpcy5odHRwLnBvc3Q8UmVzdWx0Pih1cmwsIHBvc3RQYXJhbXMsIHtcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgaGVhZGVyczogaGVhZGVyXG4gICAgfSk7XG4gICAgLy8gc2VuZGluZyBhIHBvc3QgcmVxdWVzdCB3aGljaCByZXR1cm4gYWxsIGluIHRoZSByZXN1bHQgaW50ZXJmYWNlICB0b29sIHVzZWQgdG8gXG4gICAgLy8gY29udmVydCBqc29uIHJlc3VsdCB0byBhbiBpbnRlcmZhY2UgaXMgY2FsbGVkIGpzb24gdG8gVHMgKHZzY29kZSBsaWJyYXJ5KVxuICB9XG59XG4iXX0=