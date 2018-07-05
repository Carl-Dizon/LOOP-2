import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading/loading';
import { SampleComponent } from './sample/sample';
@NgModule({
	declarations: [LoadingComponent,
    SampleComponent],
	imports: [],
	exports: [LoadingComponent,
    SampleComponent]
})
export class ComponentsModule {}
