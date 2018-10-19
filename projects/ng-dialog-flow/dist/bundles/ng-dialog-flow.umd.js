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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGlhbG9nLWZsb3cudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1kaWFsb2ctZmxvdy9saWIvbmctZGlhbG9nLWZsb3cuY29uc3RhbnQudHMiLCJuZzovL25nLWRpYWxvZy1mbG93L2xpYi9uZy1kaWFsb2ctZmxvdy5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1kaWFsb2ctZmxvdy9saWIvbmctZGlhbG9nLWZsb3cuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1kaWFsb2ctZmxvdy9saWIvbmctZGlhbG9nLWZsb3cubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHtTRUFSQ0hfTkFNRSwgU0VBUkNIX1BBUkFNRVRFUiwgRVhQRUNURURfUkVTVUxULCBUT0tFTiB9O1xuXG5jb25zdCBTRUFSQ0hfTkFNRSA9ICd2JztcbmNvbnN0IFNFQVJDSF9QQVJBTUVURVIgPSAnMjAxNTA5MTAnO1xuXG5jb25zdCBFWFBFQ1RFRF9SRVNVTFQgPSAnYXBwbGljYXRpb24vanNvbic7XG5cbmNvbnN0IFRPS0VOID0ge1xuICAgIHRva2VuOiAnc3RyaW5nJ307IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSAsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuL25nLWRpYWxvZy1mbG93LmludGVyZmFjZSc7IC8vIHJlc3VsdFxuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnOyAvLyByeGpzIG9ic2VydmFibGVcbmltcG9ydCB7U0VBUkNIX05BTUUsIFNFQVJDSF9QQVJBTUVURVIsIEVYUEVDVEVEX1JFU1VMVCwgVE9LRU4gfSBmcm9tICcuL25nLWRpYWxvZy1mbG93LmNvbnN0YW50Jztcbi8vIGltcG9ydCBjb25zdGFudCBcbmNvbnN0IHVybCA9ICdodHRwczovL2FwaS5kaWFsb2dmbG93LmNvbS92MS9xdWVyeScgO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIE5nRGlhbG9nRmxvd1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnICwgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsICkge1xuXG5cbiAgfVxuICAvLyBhc2tRdWVzdGlvbiBpcyBiYXNpY2FsbHkgdXNlZCB0byBzZW5kIHRleHQgQVBJXG4gcHVibGljICBhc2tRdWVzdGlvbihtZXNzYWdlOiBzdHJpbmcsIHRpbWV6b25lPzogc3RyaW5nLCBzZXNzaW9uaWQ/OiBzdHJpbmcsIGxhbmc/OiBzdHJpbmcpOiBhbnl7XG5jb25zdCB0aW1lWm9uZSA9IHRpbWV6b25lID8gdGltZXpvbmUgOiAnQW1lcmljYS9OZXdfWW9yayc7IC8vIHRpbWV6b25lXG5jb25zdCBzZXNzaW9uSWQgPSBzZXNzaW9uaWQgPyBzZXNzaW9uaWQgOiAnMTIzNDUnOyAvLyBzZXNzaW9uSWRcbmNvbnN0IGxhbmd1YWdlID0gbGFuZyA/IGxhbmcgOiAnZW4nOyAvLyBzZXQgbGFuZ3VhZ2VcbiAgICBjb25zdCBwb3N0UGFyYW1zID0ge1xuICAgICAgJ2xhbmcnOiBsYW5ndWFnZSxcbiAgICAgJ3F1ZXJ5JzogbWVzc2FnZSAsXG4gICAgICdzZXNzaW9uSWQnOiBzZXNzaW9uSWQsXG4gICAgICd0aW1lem9uZSc6IHRpbWVab25lXG4gICAgIH07XG4gICAgIC8vIHBvc3QgcGFyYW10ZXJcbiAgICAgY29uc3QgcGFyYW1zID0gIG5ldyBIdHRwUGFyYW1zKClcbiAgICAgLnNldChTRUFSQ0hfTkFNRSwgU0VBUkNIX1BBUkFNRVRFUik7XG4gICAgIC8vIHNldCBxdWVyeSBwYXJhbWV0ZXIgMjAxNTA5MTBcbiAgICAgY29uc3QgaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgLnNldCgnQ29udGVudC1UeXBlJywgRVhQRUNURURfUkVTVUxUKVxuICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7dGhpcy5jb25maWcudG9rZW59YCk7XG4gICAgLy8gc2V0dGluZyBoZWFkZXIganNvbiwgYXV0aG9yaXphdGlvblxuICAgcmV0dXJuICB0aGlzLmh0dHAucG9zdDxSZXN1bHQ+KHVybCwgcG9zdFBhcmFtcywge1xuICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICBoZWFkZXJzOiBoZWFkZXJcbiAgICB9KTtcbiAgICAvLyBzZW5kaW5nIGEgcG9zdCByZXF1ZXN0IHdoaWNoIHJldHVybiBhbGwgaW4gdGhlIHJlc3VsdCBpbnRlcmZhY2UgIHRvb2wgdXNlZCB0byBcbiAgICAvLyBjb252ZXJ0IGpzb24gcmVzdWx0IHRvIGFuIGludGVyZmFjZSBpcyBjYWxsZWQganNvbiB0byBUcyAodnNjb2RlIGxpYnJhcnkpXG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWRpYWxvZ0Zsb3cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbmctZGlhbG9nLWZsb3cgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5nRGlhbG9nRmxvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdEaWFsb2dGbG93Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1kaWFsb2ctZmxvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdEaWFsb2dGbG93U2VydmljZSB9IGZyb20gJy4uL3B1YmxpY19hcGknO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05nRGlhbG9nRmxvd0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ0RpYWxvZ0Zsb3dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5nRGlhbG9nRmxvd01vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbnJldHVybiB7XG4gIG5nTW9kdWxlIDogTmdEaWFsb2dGbG93TW9kdWxlLFxuICBwcm92aWRlcnM6IFtcbiAgICBOZ0RpYWxvZ0Zsb3dTZXJ2aWNlLFxuICAgIHtwcm92aWRlIDogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWd9XG4gIF1cbn07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIdHRwUGFyYW1zIiwiSHR0cEhlYWRlcnMiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiSHR0cENsaWVudCIsIkNvbXBvbmVudCIsIk5nRGlhbG9nRmxvd01vZHVsZSIsIk5nTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBRUEsUUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDOztBQUN4QixRQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQzs7QUFFcEMsUUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUM7O0FBRTNDLFFBQU0sS0FBSyxHQUFHO1FBQ1YsS0FBSyxFQUFFLFFBQVE7S0FBQzs7Ozs7O0FDVHBCO0lBT0EsSUFBTSxHQUFHLEdBQUcscUNBQXFDLENBQUU7O1FBUWpELDZCQUFzQyxNQUFNLEVBQVUsSUFBZ0I7WUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBQTtZQUFVLFNBQUksR0FBSixJQUFJLENBQVk7U0FHckU7Ozs7Ozs7O1FBRU0seUNBQVc7Ozs7Ozs7c0JBQUMsT0FBZSxFQUFFLFFBQWlCLEVBQUUsU0FBa0IsRUFBRSxJQUFhOztnQkFDMUYsSUFBTSxRQUFRLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQzs7Z0JBQzFELElBQU0sU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDOztnQkFDbEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7O2dCQUNoQyxJQUFNLFVBQVUsR0FBRztvQkFDakIsTUFBTSxFQUFFLFFBQVE7b0JBQ2pCLE9BQU8sRUFBRSxPQUFPO29CQUNoQixXQUFXLEVBQUUsU0FBUztvQkFDdEIsVUFBVSxFQUFFLFFBQVE7aUJBQ25CLENBQUM7O2dCQUVGLElBQU0sTUFBTSxHQUFJLElBQUlBLGFBQVUsRUFBRTtxQkFDL0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDOztnQkFFcEMsSUFBTSxNQUFNLEdBQUcsSUFBSUMsY0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQztxQkFDbEUsR0FBRyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUM7cUJBQ3BDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsWUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQU8sQ0FBQyxDQUFDOztnQkFFdEQsT0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUyxHQUFHLEVBQUUsVUFBVSxFQUFFO29CQUM3QyxNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLEVBQUUsTUFBTTtpQkFDaEIsQ0FBQyxDQUFDOzs7OztvQkFoQ05DLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3dEQUljQyxTQUFNLFNBQUMsUUFBUTt3QkFickJDLGFBQVU7Ozs7a0NBRm5COzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQix3Q0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLHNEQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O29DQVZEOzs7Ozs7O0FDQUE7Ozs7Ozs7UUFZZ0JDLDZCQUFPOzs7O3NCQUFDLE1BQU07Z0JBQzlCLE9BQU87b0JBQ0wsUUFBUSxFQUFHQSxxQkFBa0I7b0JBQzdCLFNBQVMsRUFBRTt3QkFDVCxtQkFBbUI7d0JBQ25CLEVBQUMsT0FBTyxFQUFHLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO3FCQUN2QztpQkFDRixDQUFDOzs7b0JBZkRDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFnQjt5QkFDakI7d0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNqQzs7b0NBVkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9