/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgDialogFlowComponent } from './ng-dialog-flow.component';
import { HttpClientModule } from '@angular/common/http';
import { NgDialogFlowService } from '../public_api';
var NgDialogFlowModule = /** @class */ (function () {
    function NgDialogFlowModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgDialogFlowModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgDialogFlowModule,
            providers: [
                NgDialogFlowService,
                { provide: 'config', useValue: config }
            ]
        };
    };
    NgDialogFlowModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        HttpClientModule,
                    ],
                    declarations: [NgDialogFlowComponent],
                    exports: [NgDialogFlowComponent]
                },] },
    ];
    return NgDialogFlowModule;
}());
export { NgDialogFlowModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGlhbG9nLWZsb3cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZGlhbG9nLWZsb3cvIiwic291cmNlcyI6WyJsaWIvbmctZGlhbG9nLWZsb3cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lBU3BDLDBCQUFPOzs7O2NBQUMsTUFBTTtRQUM5QixNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUcsa0JBQWtCO1lBQzdCLFNBQVMsRUFBRTtnQkFDVCxtQkFBbUI7Z0JBQ25CLEVBQUMsT0FBTyxFQUFHLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2FBQ3ZDO1NBQ0YsQ0FBQzs7O2dCQWZELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3FCQUNqQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7aUJBQ2pDOzs2QkFWRDs7U0FXYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdEaWFsb2dGbG93Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1kaWFsb2ctZmxvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdEaWFsb2dGbG93U2VydmljZSB9IGZyb20gJy4uL3B1YmxpY19hcGknO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05nRGlhbG9nRmxvd0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ0RpYWxvZ0Zsb3dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5nRGlhbG9nRmxvd01vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbnJldHVybiB7XG4gIG5nTW9kdWxlIDogTmdEaWFsb2dGbG93TW9kdWxlLFxuICBwcm92aWRlcnM6IFtcbiAgICBOZ0RpYWxvZ0Zsb3dTZXJ2aWNlLFxuICAgIHtwcm92aWRlIDogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWd9XG4gIF1cbn07XG4gIH1cbn1cbiJdfQ==