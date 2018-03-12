import { NgModule } from '@angular/core';
import { KeysPipe } from './../pipes/keys/keys';
import { FilterPipe } from './filter/filter';
import { ObjectFilterPipe } from './object-filter/object-filter';
import { TimeAgePipe } from './time-age/time-age';
@NgModule({
	declarations: [
		KeysPipe,
		FilterPipe,
		ObjectFilterPipe,
		TimeAgePipe
	],
	imports: [],
	exports: [
		KeysPipe,
		FilterPipe,
		ObjectFilterPipe,
		TimeAgePipe
	]
})
export class PipesModule { }
