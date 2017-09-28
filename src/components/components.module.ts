import { NgModule } from '@angular/core';
import { EmptyComponent } from './empty/empty';
import { ReachUsComponent } from './reach-us/reach-us';
import { CenterSpinnerComponent } from './center-spinner/center-spinner';
import { HeaderComponent } from './header/header';
import { RefreshComponent } from './refresh/refresh';
@NgModule({
    declarations: [EmptyComponent,
        ReachUsComponent,
        CenterSpinnerComponent,
        HeaderComponent,
        RefreshComponent],
    imports: [],
    exports: [EmptyComponent,
        ReachUsComponent,
        CenterSpinnerComponent,
        HeaderComponent,
        RefreshComponent]
})
export class ComponentsModule { }
