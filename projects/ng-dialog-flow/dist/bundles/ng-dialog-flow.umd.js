(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('ng-dialog-flow', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (factory((global['ng-dialog-flow'] = {}),global.ng.core,global.ng.common.http));
}(this, (function (exports,i0,i1) { 'use strict';

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
    var NgDialogFlowService = (function () {
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
                var params = new i1.HttpParams()
                    .set(SEARCH_NAME, SEARCH_PARAMETER);
                /** @type {?} */
                var header = new i1.HttpHeaders().set('Accept', 'application/json')
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NgDialogFlowService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['config',] }] },
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ NgDialogFlowService.ngInjectableDef = i0.defineInjectable({ factory: function NgDialogFlowService_Factory() { return new NgDialogFlowService(i0.inject("config"), i0.inject(i1.HttpClient)); }, token: NgDialogFlowService, providedIn: "root" });
        return NgDialogFlowService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgDialogFlowComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var NgDialogFlowModule$$1 = (function () {
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
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.HttpClientModule,
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

    exports.NgDialogFlowService = NgDialogFlowService;
    exports.NgDialogFlowComponent = NgDialogFlowComponent;
    exports.NgDialogFlowModule = NgDialogFlowModule$$1;
    exports.SEARCH_NAME = SEARCH_NAME;
    exports.SEARCH_PARAMETER = SEARCH_PARAMETER;
    exports.EXPECTED_RESULT = EXPECTED_RESULT;
    exports.TOKEN = TOKEN;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGlhbG9nLWZsb3cudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1kaWFsb2ctZmxvdy9saWIvbmctZGlhbG9nLWZsb3cuY29uc3RhbnQudHMiLCJuZzovL25nLWRpYWxvZy1mbG93L2xpYi9uZy1kaWFsb2ctZmxvdy5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1kaWFsb2ctZmxvdy9saWIvbmctZGlhbG9nLWZsb3cuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1kaWFsb2ctZmxvdy9saWIvbmctZGlhbG9nLWZsb3cubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHtTRUFSQ0hfTkFNRSwgU0VBUkNIX1BBUkFNRVRFUiwgRVhQRUNURURfUkVTVUxULCBUT0tFTiB9O1xuXG5jb25zdCBTRUFSQ0hfTkFNRSA9ICd2JztcbmNvbnN0IFNFQVJDSF9QQVJBTUVURVIgPSAnMjAxNTA5MTAnO1xuXG5jb25zdCBFWFBFQ1RFRF9SRVNVTFQgPSAnYXBwbGljYXRpb24vanNvbic7XG5cbmNvbnN0IFRPS0VOID0ge1xuICAgIHRva2VuOiAnc3RyaW5nJ307IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSAsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuL25nLWRpYWxvZy1mbG93LmludGVyZmFjZSc7IC8vIHJlc3VsdFxuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnOyAvLyByeGpzIG9ic2VydmFibGVcbmltcG9ydCB7U0VBUkNIX05BTUUsIFNFQVJDSF9QQVJBTUVURVIsIEVYUEVDVEVEX1JFU1VMVCwgVE9LRU4gfSBmcm9tICcuL25nLWRpYWxvZy1mbG93LmNvbnN0YW50Jztcbi8vIGltcG9ydCBjb25zdGFudFxuY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLmRpYWxvZ2Zsb3cuY29tL3YxL3F1ZXJ5JyA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgTmdEaWFsb2dGbG93U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWcgLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgKSB7XG5cblxuICB9XG4gIC8vIGFza1F1ZXN0aW9uIGlzIGJhc2ljYWxseSB1c2VkIHRvIHNlbmQgdGV4dCBBUElcbiBwdWJsaWMgIGFza1F1ZXN0aW9uKG1lc3NhZ2U6IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcsIHNlc3Npb25pZD86IHN0cmluZywgbGFuZz86IHN0cmluZyk6IGFueXtcbmNvbnN0IHRpbWVab25lID0gdGltZXpvbmUgPyB0aW1lem9uZSA6ICdBbWVyaWNhL05ld19Zb3JrJzsgLy8gdGltZXpvbmVcbmNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25pZCA/IHNlc3Npb25pZCA6ICcxMjM0NSc7IC8vIHNlc3Npb25JZFxuY29uc3QgbGFuZ3VhZ2UgPSBsYW5nID8gbGFuZyA6ICdlbic7IC8vIHNldCBsYW5ndWFnZVxuICAgIGNvbnN0IHBvc3RQYXJhbXMgPSB7XG4gICAgICAnbGFuZyc6IGxhbmd1YWdlLFxuICAgICAncXVlcnknOiBtZXNzYWdlICxcbiAgICAgJ3Nlc3Npb25JZCc6IHNlc3Npb25JZCxcbiAgICAgJ3RpbWV6b25lJzogdGltZVpvbmVcbiAgICAgfTtcbiAgICAgLy8gcG9zdCBwYXJhbXRlclxuICAgICBjb25zdCBwYXJhbXMgPSAgbmV3IEh0dHBQYXJhbXMoKVxuICAgICAuc2V0KFNFQVJDSF9OQU1FLCBTRUFSQ0hfUEFSQU1FVEVSKTtcbiAgICAgLy8gc2V0IHF1ZXJ5IHBhcmFtZXRlciAyMDE1MDkxMFxuICAgICBjb25zdCBoZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICAuc2V0KCdDb250ZW50LVR5cGUnLCBFWFBFQ1RFRF9SRVNVTFQpXG4gICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHt0aGlzLmNvbmZpZy50b2tlbn1gKTtcbiAgICAvLyBzZXR0aW5nIGhlYWRlciBqc29uLCBhdXRob3JpemF0aW9uXG4gICByZXR1cm4gIHRoaXMuaHR0cC5wb3N0PFJlc3VsdD4odXJsLCBwb3N0UGFyYW1zLCB7XG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgIGhlYWRlcnM6IGhlYWRlclxuICAgIH0pO1xuICAgIC8vIHNlbmRpbmcgYSBwb3N0IHJlcXVlc3Qgd2hpY2ggcmV0dXJuIGFsbCBpbiB0aGUgcmVzdWx0IGludGVyZmFjZSAgdG9vbCB1c2VkIHRvIFxuICAgIC8vIGNvbnZlcnQganNvbiByZXN1bHQgdG8gYW4gaW50ZXJmYWNlIGlzIGNhbGxlZCBqc29uIHRvIFRzICh2c2NvZGUgbGlicmFyeSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZGlhbG9nRmxvdycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZy1kaWFsb2ctZmxvdyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdEaWFsb2dGbG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0RpYWxvZ0Zsb3dDb21wb25lbnQgfSBmcm9tICcuL25nLWRpYWxvZy1mbG93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ0RpYWxvZ0Zsb3dTZXJ2aWNlIH0gZnJvbSAnLi4vcHVibGljX2FwaSc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdEaWFsb2dGbG93Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW05nRGlhbG9nRmxvd0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdEaWFsb2dGbG93TW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xucmV0dXJuIHtcbiAgbmdNb2R1bGUgOiBOZ0RpYWxvZ0Zsb3dNb2R1bGUsXG4gIHByb3ZpZGVyczogW1xuICAgIE5nRGlhbG9nRmxvd1NlcnZpY2UsXG4gICAge3Byb3ZpZGUgOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZ31cbiAgXVxufTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkh0dHBQYXJhbXMiLCJIdHRwSGVhZGVycyIsIkluamVjdGFibGUiLCJJbmplY3QiLCJIdHRwQ2xpZW50IiwiQ29tcG9uZW50IiwiTmdEaWFsb2dGbG93TW9kdWxlIiwiTmdNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFFQSxRQUFNLFdBQVcsR0FBRyxHQUFHLENBQUM7O0FBQ3hCLFFBQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDOztBQUVwQyxRQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQzs7QUFFM0MsUUFBTSxLQUFLLEdBQUc7UUFDVixLQUFLLEVBQUUsUUFBUTtLQUFDOzs7Ozs7QUNUcEI7SUFPQSxJQUFNLEdBQUcsR0FBRyxxQ0FBcUMsQ0FBRTs7UUFRakQsNkJBQXNDLE1BQU0sRUFBVSxJQUFnQjtZQUFoQyxXQUFNLEdBQU4sTUFBTSxDQUFBO1lBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtTQUdyRTs7Ozs7Ozs7UUFFTSx5Q0FBVzs7Ozs7OztzQkFBQyxPQUFlLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLElBQWE7O2dCQUMxRixJQUFNLFFBQVEsR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLGtCQUFrQixDQUFDOztnQkFDMUQsSUFBTSxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxPQUFPLENBQUM7O2dCQUNsRCxJQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQzs7Z0JBQ2hDLElBQU0sVUFBVSxHQUFHO29CQUNqQixNQUFNLEVBQUUsUUFBUTtvQkFDakIsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFdBQVcsRUFBRSxTQUFTO29CQUN0QixVQUFVLEVBQUUsUUFBUTtpQkFDbkIsQ0FBQzs7Z0JBRUYsSUFBTSxNQUFNLEdBQUksSUFBSUEsYUFBVSxFQUFFO3FCQUMvQixHQUFHLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7O2dCQUVwQyxJQUFNLE1BQU0sR0FBRyxJQUFJQyxjQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDO3FCQUNsRSxHQUFHLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQztxQkFDcEMsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBTyxDQUFDLENBQUM7O2dCQUV0RCxPQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFTLEdBQUcsRUFBRSxVQUFVLEVBQUU7b0JBQzdDLE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sRUFBRSxNQUFNO2lCQUNoQixDQUFDLENBQUM7Ozs7O29CQWhDTkMsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7d0RBSWNDLFNBQU0sU0FBQyxRQUFRO3dCQWJyQkMsYUFBVTs7OztrQ0FGbkI7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLHdDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsc0RBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7b0NBVkQ7Ozs7Ozs7QUNBQTs7Ozs7OztRQVlnQkMsNkJBQU87Ozs7c0JBQUMsTUFBTTtnQkFDOUIsT0FBTztvQkFDTCxRQUFRLEVBQUdBLHFCQUFrQjtvQkFDN0IsU0FBUyxFQUFFO3dCQUNULG1CQUFtQjt3QkFDbkIsRUFBQyxPQUFPLEVBQUcsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7cUJBQ3ZDO2lCQUNGLENBQUM7OztvQkFmREMsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQWdCO3lCQUNqQjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7cUJBQ2pDOztvQ0FWRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=