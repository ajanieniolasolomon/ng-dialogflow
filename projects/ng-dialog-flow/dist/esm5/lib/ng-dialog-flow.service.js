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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGlhbG9nLWZsb3cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWRpYWxvZy1mbG93LyIsInNvdXJjZXMiOlsibGliL25nLWRpYWxvZy1mbG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUcsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRzFFLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFTLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFakcsSUFBTSxHQUFHLEdBQUcscUNBQXFDLENBQUU7O0lBUWpELDZCQUFzQyxNQUFNLEVBQVUsSUFBZ0I7UUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7S0FHckU7Ozs7Ozs7O0lBRU0seUNBQVc7Ozs7Ozs7Y0FBQyxPQUFlLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLElBQWE7O1FBQzFGLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQzs7UUFDMUQsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzs7UUFDbEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7UUFDaEMsSUFBTSxVQUFVLEdBQUc7WUFDakIsTUFBTSxFQUFFLFFBQVE7WUFDakIsT0FBTyxFQUFFLE9BQU87WUFDaEIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsVUFBVSxFQUFFLFFBQVE7U0FDbkIsQ0FBQzs7UUFFRixJQUFNLE1BQU0sR0FBSSxJQUFJLFVBQVUsRUFBRTthQUMvQixHQUFHLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7O1FBRXBDLElBQU0sTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQzthQUNsRSxHQUFHLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQzthQUNwQyxHQUFHLENBQUMsZUFBZSxFQUFFLFlBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFPLENBQUMsQ0FBQzs7UUFFdEQsTUFBTSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFTLEdBQUcsRUFBRSxVQUFVLEVBQUU7WUFDN0MsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFDLENBQUM7Ozs7O2dCQWhDTixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQUljLE1BQU0sU0FBQyxRQUFRO2dCQWJyQixVQUFVOzs7OEJBRm5COztTQWFhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnLi9uZy1kaWFsb2ctZmxvdy5pbnRlcmZhY2UnOyAvLyByZXN1bHRcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJzsgLy8gcnhqcyBvYnNlcnZhYmxlXG5pbXBvcnQge1NFQVJDSF9OQU1FLCBTRUFSQ0hfUEFSQU1FVEVSLCBFWFBFQ1RFRF9SRVNVTFQsIFRPS0VOIH0gZnJvbSAnLi9uZy1kaWFsb2ctZmxvdy5jb25zdGFudCc7XG4vLyBpbXBvcnQgY29uc3RhbnRcbmNvbnN0IHVybCA9ICdodHRwczovL2FwaS5kaWFsb2dmbG93LmNvbS92MS9xdWVyeScgO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIE5nRGlhbG9nRmxvd1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnICwgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsICkge1xuXG5cbiAgfVxuICAvLyBhc2tRdWVzdGlvbiBpcyBiYXNpY2FsbHkgdXNlZCB0byBzZW5kIHRleHQgQVBJXG4gcHVibGljICBhc2tRdWVzdGlvbihtZXNzYWdlOiBzdHJpbmcsIHRpbWV6b25lPzogc3RyaW5nLCBzZXNzaW9uaWQ/OiBzdHJpbmcsIGxhbmc/OiBzdHJpbmcpOiBhbnl7XG5jb25zdCB0aW1lWm9uZSA9IHRpbWV6b25lID8gdGltZXpvbmUgOiAnQW1lcmljYS9OZXdfWW9yayc7IC8vIHRpbWV6b25lXG5jb25zdCBzZXNzaW9uSWQgPSBzZXNzaW9uaWQgPyBzZXNzaW9uaWQgOiAnMTIzNDUnOyAvLyBzZXNzaW9uSWRcbmNvbnN0IGxhbmd1YWdlID0gbGFuZyA/IGxhbmcgOiAnZW4nOyAvLyBzZXQgbGFuZ3VhZ2VcbiAgICBjb25zdCBwb3N0UGFyYW1zID0ge1xuICAgICAgJ2xhbmcnOiBsYW5ndWFnZSxcbiAgICAgJ3F1ZXJ5JzogbWVzc2FnZSAsXG4gICAgICdzZXNzaW9uSWQnOiBzZXNzaW9uSWQsXG4gICAgICd0aW1lem9uZSc6IHRpbWVab25lXG4gICAgIH07XG4gICAgIC8vIHBvc3QgcGFyYW10ZXJcbiAgICAgY29uc3QgcGFyYW1zID0gIG5ldyBIdHRwUGFyYW1zKClcbiAgICAgLnNldChTRUFSQ0hfTkFNRSwgU0VBUkNIX1BBUkFNRVRFUik7XG4gICAgIC8vIHNldCBxdWVyeSBwYXJhbWV0ZXIgMjAxNTA5MTBcbiAgICAgY29uc3QgaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgLnNldCgnQ29udGVudC1UeXBlJywgRVhQRUNURURfUkVTVUxUKVxuICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7dGhpcy5jb25maWcudG9rZW59YCk7XG4gICAgLy8gc2V0dGluZyBoZWFkZXIganNvbiwgYXV0aG9yaXphdGlvblxuICAgcmV0dXJuICB0aGlzLmh0dHAucG9zdDxSZXN1bHQ+KHVybCwgcG9zdFBhcmFtcywge1xuICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICBoZWFkZXJzOiBoZWFkZXJcbiAgICB9KTtcbiAgICAvLyBzZW5kaW5nIGEgcG9zdCByZXF1ZXN0IHdoaWNoIHJldHVybiBhbGwgaW4gdGhlIHJlc3VsdCBpbnRlcmZhY2UgIHRvb2wgdXNlZCB0byBcbiAgICAvLyBjb252ZXJ0IGpzb24gcmVzdWx0IHRvIGFuIGludGVyZmFjZSBpcyBjYWxsZWQganNvbiB0byBUcyAodnNjb2RlIGxpYnJhcnkpXG4gIH1cbn1cbiJdfQ==