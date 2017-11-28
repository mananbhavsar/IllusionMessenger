import { NgModule } from '@angular/core';
import { KeysPipe } from './../pipes/keys/keys';
import { FilterPipe } from './filter/filter';
@NgModule({
	declarations: [
		KeysPipe,
		FilterPipe
	],
	imports: [],
	exports: [
		KeysPipe,
		FilterPipe
	]
})
export class PipesModule { }
