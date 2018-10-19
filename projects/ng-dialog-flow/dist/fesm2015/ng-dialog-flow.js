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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGlhbG9nLWZsb3cuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWRpYWxvZy1mbG93L2xpYi9uZy1kaWFsb2ctZmxvdy5jb25zdGFudC50cyIsIm5nOi8vbmctZGlhbG9nLWZsb3cvbGliL25nLWRpYWxvZy1mbG93LnNlcnZpY2UudHMiLCJuZzovL25nLWRpYWxvZy1mbG93L2xpYi9uZy1kaWFsb2ctZmxvdy5jb21wb25lbnQudHMiLCJuZzovL25nLWRpYWxvZy1mbG93L2xpYi9uZy1kaWFsb2ctZmxvdy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQge1NFQVJDSF9OQU1FLCBTRUFSQ0hfUEFSQU1FVEVSLCBFWFBFQ1RFRF9SRVNVTFQsIFRPS0VOIH07XG5cbmNvbnN0IFNFQVJDSF9OQU1FID0gJ3YnO1xuY29uc3QgU0VBUkNIX1BBUkFNRVRFUiA9ICcyMDE1MDkxMCc7XG5cbmNvbnN0IEVYUEVDVEVEX1JFU1VMVCA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuY29uc3QgVE9LRU4gPSB7XG4gICAgdG9rZW46ICdzdHJpbmcnfTsiLCJpbXBvcnQgeyBJbmplY3RhYmxlICwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4vbmctZGlhbG9nLWZsb3cuaW50ZXJmYWNlJzsgLy8gcmVzdWx0XG4vLyBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7IC8vIHJ4anMgb2JzZXJ2YWJsZVxuaW1wb3J0IHtTRUFSQ0hfTkFNRSwgU0VBUkNIX1BBUkFNRVRFUiwgRVhQRUNURURfUkVTVUxULCBUT0tFTiB9IGZyb20gJy4vbmctZGlhbG9nLWZsb3cuY29uc3RhbnQnO1xuLy8gaW1wb3J0IGNvbnN0YW50IFxuY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLmRpYWxvZ2Zsb3cuY29tL3YxL3F1ZXJ5JyA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgTmdEaWFsb2dGbG93U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWcgLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgKSB7XG5cblxuICB9XG4gIC8vIGFza1F1ZXN0aW9uIGlzIGJhc2ljYWxseSB1c2VkIHRvIHNlbmQgdGV4dCBBUElcbiBwdWJsaWMgIGFza1F1ZXN0aW9uKG1lc3NhZ2U6IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcsIHNlc3Npb25pZD86IHN0cmluZywgbGFuZz86IHN0cmluZyk6IGFueXtcbmNvbnN0IHRpbWVab25lID0gdGltZXpvbmUgPyB0aW1lem9uZSA6ICdBbWVyaWNhL05ld19Zb3JrJzsgLy8gdGltZXpvbmVcbmNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25pZCA/IHNlc3Npb25pZCA6ICcxMjM0NSc7IC8vIHNlc3Npb25JZFxuY29uc3QgbGFuZ3VhZ2UgPSBsYW5nID8gbGFuZyA6ICdlbic7IC8vIHNldCBsYW5ndWFnZVxuICAgIGNvbnN0IHBvc3RQYXJhbXMgPSB7XG4gICAgICAnbGFuZyc6IGxhbmd1YWdlLFxuICAgICAncXVlcnknOiBtZXNzYWdlICxcbiAgICAgJ3Nlc3Npb25JZCc6IHNlc3Npb25JZCxcbiAgICAgJ3RpbWV6b25lJzogdGltZVpvbmVcbiAgICAgfTtcbiAgICAgLy8gcG9zdCBwYXJhbXRlclxuICAgICBjb25zdCBwYXJhbXMgPSAgbmV3IEh0dHBQYXJhbXMoKVxuICAgICAuc2V0KFNFQVJDSF9OQU1FLCBTRUFSQ0hfUEFSQU1FVEVSKTtcbiAgICAgLy8gc2V0IHF1ZXJ5IHBhcmFtZXRlciAyMDE1MDkxMFxuICAgICBjb25zdCBoZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICAuc2V0KCdDb250ZW50LVR5cGUnLCBFWFBFQ1RFRF9SRVNVTFQpXG4gICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHt0aGlzLmNvbmZpZy50b2tlbn1gKTtcbiAgICAvLyBzZXR0aW5nIGhlYWRlciBqc29uLCBhdXRob3JpemF0aW9uXG4gICByZXR1cm4gIHRoaXMuaHR0cC5wb3N0PFJlc3VsdD4odXJsLCBwb3N0UGFyYW1zLCB7XG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgIGhlYWRlcnM6IGhlYWRlclxuICAgIH0pO1xuICAgIC8vIHNlbmRpbmcgYSBwb3N0IHJlcXVlc3Qgd2hpY2ggcmV0dXJuIGFsbCBpbiB0aGUgcmVzdWx0IGludGVyZmFjZSAgdG9vbCB1c2VkIHRvIFxuICAgIC8vIGNvbnZlcnQganNvbiByZXN1bHQgdG8gYW4gaW50ZXJmYWNlIGlzIGNhbGxlZCBqc29uIHRvIFRzICh2c2NvZGUgbGlicmFyeSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZGlhbG9nRmxvdycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZy1kaWFsb2ctZmxvdyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdEaWFsb2dGbG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0RpYWxvZ0Zsb3dDb21wb25lbnQgfSBmcm9tICcuL25nLWRpYWxvZy1mbG93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ0RpYWxvZ0Zsb3dTZXJ2aWNlIH0gZnJvbSAnLi4vcHVibGljX2FwaSc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdEaWFsb2dGbG93Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW05nRGlhbG9nRmxvd0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdEaWFsb2dGbG93TW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xucmV0dXJuIHtcbiAgbmdNb2R1bGUgOiBOZ0RpYWxvZ0Zsb3dNb2R1bGUsXG4gIHByb3ZpZGVyczogW1xuICAgIE5nRGlhbG9nRmxvd1NlcnZpY2UsXG4gICAge3Byb3ZpZGUgOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZ31cbiAgXVxufTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5nRGlhbG9nRmxvd01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBRUEsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDOztBQUN4QixNQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQzs7QUFFcEMsTUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUM7O0FBRTNDLE1BQU0sS0FBSyxHQUFHO0lBQ1YsS0FBSyxFQUFFLFFBQVE7Q0FBQzs7Ozs7O0FDVHBCO0FBT0EsTUFBTSxHQUFHLEdBQUcscUNBQXFDLENBQUU7QUFNbkQ7Ozs7O0lBRUUsWUFBc0MsTUFBTSxFQUFVLElBQWdCO1FBQWhDLFdBQU0sR0FBTixNQUFNLENBQUE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO0tBR3JFOzs7Ozs7OztJQUVNLFdBQVcsQ0FBQyxPQUFlLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLElBQWE7O1FBQzFGLE1BQU0sUUFBUSxHQUFHLFFBQVEsR0FBRyxRQUFRLEdBQUcsa0JBQWtCLENBQUM7O1FBQzFELE1BQU0sU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDOztRQUNsRCxNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQzs7UUFDaEMsTUFBTSxVQUFVLEdBQUc7WUFDakIsTUFBTSxFQUFFLFFBQVE7WUFDakIsT0FBTyxFQUFFLE9BQU87WUFDaEIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsVUFBVSxFQUFFLFFBQVE7U0FDbkIsQ0FBQzs7UUFFRixNQUFNLE1BQU0sR0FBSSxJQUFJLFVBQVUsRUFBRTthQUMvQixHQUFHLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7O1FBRXBDLE1BQU0sTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQzthQUNsRSxHQUFHLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQzthQUNwQyxHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDOztRQUV0RCxPQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFTLEdBQUcsRUFBRSxVQUFVLEVBQUU7WUFDN0MsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFDLENBQUM7Ozs7OztZQWhDTixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBSWMsTUFBTSxTQUFDLFFBQVE7WUFickIsVUFBVTs7Ozs7Ozs7QUNGbkI7SUFhRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1ZEOzs7OztJQVlTLE9BQU8sT0FBTyxDQUFDLE1BQU07UUFDOUIsT0FBTztZQUNMLFFBQVEsRUFBR0EscUJBQWtCO1lBQzdCLFNBQVMsRUFBRTtnQkFDVCxtQkFBbUI7Z0JBQ25CLEVBQUMsT0FBTyxFQUFHLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2FBQ3ZDO1NBQ0YsQ0FBQzs7OztZQWZELFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDakM7Ozs7Ozs7Ozs7Ozs7OzsifQ==