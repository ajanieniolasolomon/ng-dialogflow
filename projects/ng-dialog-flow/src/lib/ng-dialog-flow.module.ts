import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgDialogFlowComponent } from './ng-dialog-flow.component';
import { HttpClientModule} from '@angular/common/http';
import { NgDialogFlowService } from '../public_api';
@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [NgDialogFlowComponent],
  exports: [NgDialogFlowComponent]
})
export class NgDialogFlowModule {
  public static forRoot(config): ModuleWithProviders {
return {
  ngModule : NgDialogFlowModule,
  providers: [
    NgDialogFlowService,
    {provide : 'config', useValue: config}
  ]
};
  }
}
