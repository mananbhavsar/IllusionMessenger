import { NgModule } from '@angular/core';
import { KeysPipe } from './../pipes/keys/keys';
import { FilterPipe } from './filter/filter';
import { ObjectFilterPipe } from './object-filter/object-filter';
@NgModule({
	declarations: [
		KeysPipe,
		FilterPipe,
		ObjectFilterPipe
	],
	imports: [],
	exports: [
		KeysPipe,
		FilterPipe,
		ObjectFilterPipe
	]
})
export class PipesModule { }
