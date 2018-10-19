import { Injectable, Inject, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var SEARCH_NAME = 'v';
/** @type {?} */
var SEARCH_PARAMETER = '20150910';
/** @type {?} */
var EXPECTED_RESULT = 'application/json';
/** @type {?} */
var TOKEN = {
    token: 'string'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ NgDialogFlowService.ngInjectableDef = defineInjectable({ factory: function NgDialogFlowService_Factory() { return new NgDialogFlowService(inject("config"), inject(HttpClient)); }, token: NgDialogFlowService, providedIn: "root" });
    return NgDialogFlowService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgDialogFlowComponent = /** @class */ (function () {
    function NgDialogFlowComponent() {
    }
    /**
     * @return {?}
     */
    NgDialogFlowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgDialogFlowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-dialogFlow',
                    template: "\n    <p>\n      ng-dialog-flow works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    NgDialogFlowComponent.ctorParameters = function () { return []; };
    return NgDialogFlowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgDialogFlowModule$$1 = /** @class */ (function () {
    function NgDialogFlowModule$$1() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgDialogFlowModule$$1.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgDialogFlowModule$$1,
            providers: [
                NgDialogFlowService,
                { provide: 'config', useValue: config }
            ]
        };
    };
    NgDialogFlowModule$$1.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        HttpClientModule,
                    ],
                    declarations: [NgDialogFlowComponent],
                    exports: [NgDialogFlowComponent]
                },] },
    ];
    return NgDialogFlowModule$$1;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgDialogFlowService, NgDialogFlowComponent, NgDialogFlowModule$$1 as NgDialogFlowModule, SEARCH_NAME, SEARCH_PARAMETER, EXPECTED_RESULT, TOKEN };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGlhbG9nLWZsb3cuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWRpYWxvZy1mbG93L2xpYi9uZy1kaWFsb2ctZmxvdy5jb25zdGFudC50cyIsIm5nOi8vbmctZGlhbG9nLWZsb3cvbGliL25nLWRpYWxvZy1mbG93LnNlcnZpY2UudHMiLCJuZzovL25nLWRpYWxvZy1mbG93L2xpYi9uZy1kaWFsb2ctZmxvdy5jb21wb25lbnQudHMiLCJuZzovL25nLWRpYWxvZy1mbG93L2xpYi9uZy1kaWFsb2ctZmxvdy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQge1NFQVJDSF9OQU1FLCBTRUFSQ0hfUEFSQU1FVEVSLCBFWFBFQ1RFRF9SRVNVTFQsIFRPS0VOIH07XG5cbmNvbnN0IFNFQVJDSF9OQU1FID0gJ3YnO1xuY29uc3QgU0VBUkNIX1BBUkFNRVRFUiA9ICcyMDE1MDkxMCc7XG5cbmNvbnN0IEVYUEVDVEVEX1JFU1VMVCA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuY29uc3QgVE9LRU4gPSB7XG4gICAgdG9rZW46ICdzdHJpbmcnfTsiLCJpbXBvcnQgeyBJbmplY3RhYmxlICwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4vbmctZGlhbG9nLWZsb3cuaW50ZXJmYWNlJzsgLy8gcmVzdWx0XG4vLyBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7IC8vIHJ4anMgb2JzZXJ2YWJsZVxuaW1wb3J0IHtTRUFSQ0hfTkFNRSwgU0VBUkNIX1BBUkFNRVRFUiwgRVhQRUNURURfUkVTVUxULCBUT0tFTiB9IGZyb20gJy4vbmctZGlhbG9nLWZsb3cuY29uc3RhbnQnO1xuLy8gaW1wb3J0IGNvbnN0YW50IFxuY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLmRpYWxvZ2Zsb3cuY29tL3YxL3F1ZXJ5JyA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgTmdEaWFsb2dGbG93U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWcgLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgKSB7XG5cblxuICB9XG4gIC8vIGFza1F1ZXN0aW9uIGlzIGJhc2ljYWxseSB1c2VkIHRvIHNlbmQgdGV4dCBBUElcbiBwdWJsaWMgIGFza1F1ZXN0aW9uKG1lc3NhZ2U6IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcsIHNlc3Npb25pZD86IHN0cmluZywgbGFuZz86IHN0cmluZyk6IGFueXtcbmNvbnN0IHRpbWVab25lID0gdGltZXpvbmUgPyB0aW1lem9uZSA6ICdBbWVyaWNhL05ld19Zb3JrJzsgLy8gdGltZXpvbmVcbmNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25pZCA/IHNlc3Npb25pZCA6ICcxMjM0NSc7IC8vIHNlc3Npb25JZFxuY29uc3QgbGFuZ3VhZ2UgPSBsYW5nID8gbGFuZyA6ICdlbic7IC8vIHNldCBsYW5ndWFnZVxuICAgIGNvbnN0IHBvc3RQYXJhbXMgPSB7XG4gICAgICAnbGFuZyc6IGxhbmd1YWdlLFxuICAgICAncXVlcnknOiBtZXNzYWdlICxcbiAgICAgJ3Nlc3Npb25JZCc6IHNlc3Npb25JZCxcbiAgICAgJ3RpbWV6b25lJzogdGltZVpvbmVcbiAgICAgfTtcbiAgICAgLy8gcG9zdCBwYXJhbXRlclxuICAgICBjb25zdCBwYXJhbXMgPSAgbmV3IEh0dHBQYXJhbXMoKVxuICAgICAuc2V0KFNFQVJDSF9OQU1FLCBTRUFSQ0hfUEFSQU1FVEVSKTtcbiAgICAgLy8gc2V0IHF1ZXJ5IHBhcmFtZXRlciAyMDE1MDkxMFxuICAgICBjb25zdCBoZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICAuc2V0KCdDb250ZW50LVR5cGUnLCBFWFBFQ1RFRF9SRVNVTFQpXG4gICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHt0aGlzLmNvbmZpZy50b2tlbn1gKTtcbiAgICAvLyBzZXR0aW5nIGhlYWRlciBqc29uLCBhdXRob3JpemF0aW9uXG4gICByZXR1cm4gIHRoaXMuaHR0cC5wb3N0PFJlc3VsdD4odXJsLCBwb3N0UGFyYW1zLCB7XG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgIGhlYWRlcnM6IGhlYWRlclxuICAgIH0pO1xuICAgIC8vIHNlbmRpbmcgYSBwb3N0IHJlcXVlc3Qgd2hpY2ggcmV0dXJuIGFsbCBpbiB0aGUgcmVzdWx0IGludGVyZmFjZSAgdG9vbCB1c2VkIHRvIFxuICAgIC8vIGNvbnZlcnQganNvbiByZXN1bHQgdG8gYW4gaW50ZXJmYWNlIGlzIGNhbGxlZCBqc29uIHRvIFRzICh2c2NvZGUgbGlicmFyeSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZGlhbG9nRmxvdycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZy1kaWFsb2ctZmxvdyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdEaWFsb2dGbG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0RpYWxvZ0Zsb3dDb21wb25lbnQgfSBmcm9tICcuL25nLWRpYWxvZy1mbG93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ0RpYWxvZ0Zsb3dTZXJ2aWNlIH0gZnJvbSAnLi4vcHVibGljX2FwaSc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdEaWFsb2dGbG93Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW05nRGlhbG9nRmxvd0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdEaWFsb2dGbG93TW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xucmV0dXJuIHtcbiAgbmdNb2R1bGUgOiBOZ0RpYWxvZ0Zsb3dNb2R1bGUsXG4gIHByb3ZpZGVyczogW1xuICAgIE5nRGlhbG9nRmxvd1NlcnZpY2UsXG4gICAge3Byb3ZpZGUgOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZ31cbiAgXVxufTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5nRGlhbG9nRmxvd01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBRUEsSUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDOztBQUN4QixJQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQzs7QUFFcEMsSUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUM7O0FBRTNDLElBQU0sS0FBSyxHQUFHO0lBQ1YsS0FBSyxFQUFFLFFBQVE7Q0FBQzs7Ozs7O0FDVHBCO0FBT0EsSUFBTSxHQUFHLEdBQUcscUNBQXFDLENBQUU7O0lBUWpELDZCQUFzQyxNQUFNLEVBQVUsSUFBZ0I7UUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7S0FHckU7Ozs7Ozs7O0lBRU0seUNBQVc7Ozs7Ozs7Y0FBQyxPQUFlLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLElBQWE7O1FBQzFGLElBQU0sUUFBUSxHQUFHLFFBQVEsR0FBRyxRQUFRLEdBQUcsa0JBQWtCLENBQUM7O1FBQzFELElBQU0sU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDOztRQUNsRCxJQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQzs7UUFDaEMsSUFBTSxVQUFVLEdBQUc7WUFDakIsTUFBTSxFQUFFLFFBQVE7WUFDakIsT0FBTyxFQUFFLE9BQU87WUFDaEIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsVUFBVSxFQUFFLFFBQVE7U0FDbkIsQ0FBQzs7UUFFRixJQUFNLE1BQU0sR0FBSSxJQUFJLFVBQVUsRUFBRTthQUMvQixHQUFHLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7O1FBRXBDLElBQU0sTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQzthQUNsRSxHQUFHLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQzthQUNwQyxHQUFHLENBQUMsZUFBZSxFQUFFLFlBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFPLENBQUMsQ0FBQzs7UUFFdEQsT0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUyxHQUFHLEVBQUUsVUFBVSxFQUFFO1lBQzdDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLE1BQU07U0FDaEIsQ0FBQyxDQUFDOzs7OztnQkFoQ04sVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREFJYyxNQUFNLFNBQUMsUUFBUTtnQkFickIsVUFBVTs7OzhCQUZuQjs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsd0NBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLHNEQUlUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O2dDQVZEOzs7Ozs7O0FDQUE7Ozs7Ozs7SUFZZ0JBLDZCQUFPOzs7O2NBQUMsTUFBTTtRQUM5QixPQUFPO1lBQ0wsUUFBUSxFQUFHQSxxQkFBa0I7WUFDN0IsU0FBUyxFQUFFO2dCQUNULG1CQUFtQjtnQkFDbkIsRUFBQyxPQUFPLEVBQUcsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7YUFDdkM7U0FDRixDQUFDOzs7Z0JBZkQsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7cUJBQ2pCO29CQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDakM7O2dDQVZEOzs7Ozs7Ozs7Ozs7Ozs7In0=