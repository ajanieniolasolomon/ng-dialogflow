/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgDialogFlowComponent } from './ng-dialog-flow.component';
import { HttpClientModule } from '@angular/common/http';
import { NgDialogFlowService } from '../public_api';
export class NgDialogFlowModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgDialogFlowModule,
            providers: [
                NgDialogFlowService,
                { provide: 'config', useValue: config }
            ]
        };
    }
}
NgDialogFlowModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpClientModule,
                ],
                declarations: [NgDialogFlowComponent],
                exports: [NgDialogFlowComponent]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGlhbG9nLWZsb3cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZGlhbG9nLWZsb3cvIiwic291cmNlcyI6WyJsaWIvbmctZGlhbG9nLWZsb3cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRcEQsTUFBTTs7Ozs7SUFDRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07UUFDOUIsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFHLGtCQUFrQjtZQUM3QixTQUFTLEVBQUU7Z0JBQ1QsbUJBQW1CO2dCQUNuQixFQUFDLE9BQU8sRUFBRyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQzthQUN2QztTQUNGLENBQUM7Ozs7WUFmRCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRGlhbG9nRmxvd0NvbXBvbmVudCB9IGZyb20gJy4vbmctZGlhbG9nLWZsb3cuY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nRGlhbG9nRmxvd1NlcnZpY2UgfSBmcm9tICcuLi9wdWJsaWNfYXBpJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ0RpYWxvZ0Zsb3dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmdEaWFsb2dGbG93Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ0RpYWxvZ0Zsb3dNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5yZXR1cm4ge1xuICBuZ01vZHVsZSA6IE5nRGlhbG9nRmxvd01vZHVsZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTmdEaWFsb2dGbG93U2VydmljZSxcbiAgICB7cHJvdmlkZSA6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnfVxuICBdXG59O1xuICB9XG59XG4iXX0=