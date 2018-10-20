import { NgModule } from '@angular/core';
import { KeysPipe } from './../pipes/keys/keys';
import { FilterPipe } from './filter/filter';
import { ObjectFilterPipe } from './object-filter/object-filter';
import { TimePipe } from './time/time';
import { TranslatePipe } from './translate/translate';
@NgModule({
	declarations: [
		KeysPipe,
		FilterPipe,
		ObjectFilterPipe,
		TimePipe,
    TranslatePipe
	],
	imports: [],
	exports: [
		KeysPipe,
		FilterPipe,
		ObjectFilterPipe,
		TimePipe,
    TranslatePipe
	]
})
export class PipesModule { }
