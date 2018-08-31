import { NgModule, Optional, SkipSelf } from '@angular/core';
@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() core: CoreModule) {
        if (core) {
            throw new Error('you shall not run');
        }
    }
}
