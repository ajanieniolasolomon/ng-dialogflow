import { Injectable, Inject, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const SEARCH_NAME = 'v';
/** @type {?} */
const SEARCH_PARAMETER = '20150910';
/** @type {?} */
const EXPECTED_RESULT = 'application/json';
/** @type {?} */
const TOKEN = {
    token: 'string'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const url = 'https://api.dialogflow.com/v1/query';
class NgDialogFlowService {
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
/** @nocollapse */ NgDialogFlowService.ngInjectableDef = defineInjectable({ factory: function NgDialogFlowService_Factory() { return new NgDialogFlowService(inject("config"), inject(HttpClient)); }, token: NgDialogFlowService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgDialogFlowComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgDialogFlowComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-dialogFlow',
                template: `
    <p>
      ng-dialog-flow works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
NgDialogFlowComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgDialogFlowModule$$1 {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgDialogFlowModule$$1,
            providers: [
                NgDialogFlowService,
                { provide: 'config', useValue: config }
            ]
        };
    }
}
NgDialogFlowModule$$1.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpClientModule,
                ],
                declarations: [NgDialogFlowComponent],
                exports: [NgDialogFlowComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgDialogFlowService, NgDialogFlowComponent, NgDialogFlowModule$$1 as NgDialogFlowModule, SEARCH_NAME, SEARCH_PARAMETER, EXPECTED_RESULT, TOKEN };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGlhbG9nLWZsb3cuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWRpYWxvZy1mbG93L2xpYi9uZy1kaWFsb2ctZmxvdy5jb25zdGFudC50cyIsIm5nOi8vbmctZGlhbG9nLWZsb3cvbGliL25nLWRpYWxvZy1mbG93LnNlcnZpY2UudHMiLCJuZzovL25nLWRpYWxvZy1mbG93L2xpYi9uZy1kaWFsb2ctZmxvdy5jb21wb25lbnQudHMiLCJuZzovL25nLWRpYWxvZy1mbG93L2xpYi9uZy1kaWFsb2ctZmxvdy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQge1NFQVJDSF9OQU1FLCBTRUFSQ0hfUEFSQU1FVEVSLCBFWFBFQ1RFRF9SRVNVTFQsIFRPS0VOIH07XG5cbmNvbnN0IFNFQVJDSF9OQU1FID0gJ3YnO1xuY29uc3QgU0VBUkNIX1BBUkFNRVRFUiA9ICcyMDE1MDkxMCc7XG5cbmNvbnN0IEVYUEVDVEVEX1JFU1VMVCA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuY29uc3QgVE9LRU4gPSB7XG4gICAgdG9rZW46ICdzdHJpbmcnfTsiLCJpbXBvcnQgeyBJbmplY3RhYmxlICwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4vbmctZGlhbG9nLWZsb3cuaW50ZXJmYWNlJzsgLy8gcmVzdWx0XG4vLyBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7IC8vIHJ4anMgb2JzZXJ2YWJsZVxuaW1wb3J0IHtTRUFSQ0hfTkFNRSwgU0VBUkNIX1BBUkFNRVRFUiwgRVhQRUNURURfUkVTVUxULCBUT0tFTiB9IGZyb20gJy4vbmctZGlhbG9nLWZsb3cuY29uc3RhbnQnO1xuLy8gaW1wb3J0IGNvbnN0YW50XG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkuZGlhbG9nZmxvdy5jb20vdjEvcXVlcnknIDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ0RpYWxvZ0Zsb3dTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZyAsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCApIHtcblxuXG4gIH1cbiAgLy8gYXNrUXVlc3Rpb24gaXMgYmFzaWNhbGx5IHVzZWQgdG8gc2VuZCB0ZXh0IEFQSVxuIHB1YmxpYyAgYXNrUXVlc3Rpb24obWVzc2FnZTogc3RyaW5nLCB0aW1lem9uZT86IHN0cmluZywgc2Vzc2lvbmlkPzogc3RyaW5nLCBsYW5nPzogc3RyaW5nKTogYW55e1xuY29uc3QgdGltZVpvbmUgPSB0aW1lem9uZSA/IHRpbWV6b25lIDogJ0FtZXJpY2EvTmV3X1lvcmsnOyAvLyB0aW1lem9uZVxuY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbmlkID8gc2Vzc2lvbmlkIDogJzEyMzQ1JzsgLy8gc2Vzc2lvbklkXG5jb25zdCBsYW5ndWFnZSA9IGxhbmcgPyBsYW5nIDogJ2VuJzsgLy8gc2V0IGxhbmd1YWdlXG4gICAgY29uc3QgcG9zdFBhcmFtcyA9IHtcbiAgICAgICdsYW5nJzogbGFuZ3VhZ2UsXG4gICAgICdxdWVyeSc6IG1lc3NhZ2UgLFxuICAgICAnc2Vzc2lvbklkJzogc2Vzc2lvbklkLFxuICAgICAndGltZXpvbmUnOiB0aW1lWm9uZVxuICAgICB9O1xuICAgICAvLyBwb3N0IHBhcmFtdGVyXG4gICAgIGNvbnN0IHBhcmFtcyA9ICBuZXcgSHR0cFBhcmFtcygpXG4gICAgIC5zZXQoU0VBUkNIX05BTUUsIFNFQVJDSF9QQVJBTUVURVIpO1xuICAgICAvLyBzZXQgcXVlcnkgcGFyYW1ldGVyIDIwMTUwOTEwXG4gICAgIGNvbnN0IGhlYWRlciA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsIEVYUEVDVEVEX1JFU1VMVClcbiAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke3RoaXMuY29uZmlnLnRva2VufWApO1xuICAgIC8vIHNldHRpbmcgaGVhZGVyIGpzb24sIGF1dGhvcml6YXRpb25cbiAgIHJldHVybiAgdGhpcy5odHRwLnBvc3Q8UmVzdWx0Pih1cmwsIHBvc3RQYXJhbXMsIHtcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgaGVhZGVyczogaGVhZGVyXG4gICAgfSk7XG4gICAgLy8gc2VuZGluZyBhIHBvc3QgcmVxdWVzdCB3aGljaCByZXR1cm4gYWxsIGluIHRoZSByZXN1bHQgaW50ZXJmYWNlICB0b29sIHVzZWQgdG8gXG4gICAgLy8gY29udmVydCBqc29uIHJlc3VsdCB0byBhbiBpbnRlcmZhY2UgaXMgY2FsbGVkIGpzb24gdG8gVHMgKHZzY29kZSBsaWJyYXJ5KVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1kaWFsb2dGbG93JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG5nLWRpYWxvZy1mbG93IHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0RpYWxvZ0Zsb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRGlhbG9nRmxvd0NvbXBvbmVudCB9IGZyb20gJy4vbmctZGlhbG9nLWZsb3cuY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nRGlhbG9nRmxvd1NlcnZpY2UgfSBmcm9tICcuLi9wdWJsaWNfYXBpJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ0RpYWxvZ0Zsb3dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmdEaWFsb2dGbG93Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ0RpYWxvZ0Zsb3dNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5yZXR1cm4ge1xuICBuZ01vZHVsZSA6IE5nRGlhbG9nRmxvd01vZHVsZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTmdEaWFsb2dGbG93U2VydmljZSxcbiAgICB7cHJvdmlkZSA6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnfVxuICBdXG59O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmdEaWFsb2dGbG93TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFFQSxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUM7O0FBQ3hCLE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDOztBQUVwQyxNQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQzs7QUFFM0MsTUFBTSxLQUFLLEdBQUc7SUFDVixLQUFLLEVBQUUsUUFBUTtDQUFDOzs7Ozs7QUNUcEI7QUFPQSxNQUFNLEdBQUcsR0FBRyxxQ0FBcUMsQ0FBRTtBQU1uRDs7Ozs7SUFFRSxZQUFzQyxNQUFNLEVBQVUsSUFBZ0I7UUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7S0FHckU7Ozs7Ozs7O0lBRU0sV0FBVyxDQUFDLE9BQWUsRUFBRSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsSUFBYTs7UUFDMUYsTUFBTSxRQUFRLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQzs7UUFDMUQsTUFBTSxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxPQUFPLENBQUM7O1FBQ2xELE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOztRQUNoQyxNQUFNLFVBQVUsR0FBRztZQUNqQixNQUFNLEVBQUUsUUFBUTtZQUNqQixPQUFPLEVBQUUsT0FBTztZQUNoQixXQUFXLEVBQUUsU0FBUztZQUN0QixVQUFVLEVBQUUsUUFBUTtTQUNuQixDQUFDOztRQUVGLE1BQU0sTUFBTSxHQUFJLElBQUksVUFBVSxFQUFFO2FBQy9CLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7UUFFcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDO2FBQ2xFLEdBQUcsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDO2FBQ3BDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7O1FBRXRELE9BQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVMsR0FBRyxFQUFFLFVBQVUsRUFBRTtZQUM3QyxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxNQUFNO1NBQ2hCLENBQUMsQ0FBQzs7Ozs7O1lBaENOLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs0Q0FJYyxNQUFNLFNBQUMsUUFBUTtZQWJyQixVQUFVOzs7Ozs7OztBQ0ZuQjtJQWFFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7YUFDWDs7Ozs7Ozs7O0FDVkQ7Ozs7O0lBWVMsT0FBTyxPQUFPLENBQUMsTUFBTTtRQUM5QixPQUFPO1lBQ0wsUUFBUSxFQUFHQSxxQkFBa0I7WUFDN0IsU0FBUyxFQUFFO2dCQUNULG1CQUFtQjtnQkFDbkIsRUFBQyxPQUFPLEVBQUcsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7YUFDdkM7U0FDRixDQUFDOzs7O1lBZkQsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7aUJBQ2pCO2dCQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNqQzs7Ozs7Ozs7Ozs7Ozs7OyJ9