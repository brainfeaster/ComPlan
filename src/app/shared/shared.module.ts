import { ModuleWithProviders, NgModule } from '@angular/core';
@NgModule({
    declarations: [],
    exports: []
  })
  export class SharedModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: []
      };
    }
  }
