import { NgModule } from '@angular/core';
import { KeysPipe } from './../pipes/keys/keys';
import { FilterPipe } from './filter/filter';
import { ObjectFilterPipe } from './object-filter/object-filter';
import { TimePipe } from './time/time';
import { TranslatePipe } from './translate/translate';
import { EscapeHtmlPipe } from '../pipes/keepHtml/keepHtml';
@NgModule({
	declarations: [
		KeysPipe,
		FilterPipe,
		ObjectFilterPipe,
		TimePipe,
		EscapeHtmlPipe,
		TranslatePipe
	],
	imports: [],
	exports: [
		KeysPipe,
		FilterPipe,
		EscapeHtmlPipe,
		ObjectFilterPipe,
		TimePipe,
		TranslatePipe
	]
})
export class PipesModule { }
