import { NgModule } from '@angular/core';
import { KeysPipe } from './../pipes/keys/keys';
import { FilterPipe } from './filter/filter';
import { ObjectFilterPipe } from './object-filter/object-filter';
import { TimePipe } from './time/time';
@NgModule({
	declarations: [
		KeysPipe,
		FilterPipe,
		ObjectFilterPipe,
		TimePipe
	],
	imports: [],
	exports: [
		KeysPipe,
		FilterPipe,
		ObjectFilterPipe,
		TimePipe
	]
})
export class PipesModule { }
