import { NgModule } from '@angular/core';
import { KeysPipe } from './../pipes/keys/keys';
import { FilterPipe } from './filter/filter';
import { ObjectFilterPipe } from './object-filter/object-filter';
import { TimePipe } from './time/time';
<<<<<<< HEAD
=======
import { TranslatePipe } from './translate/translate';
>>>>>>> master
@NgModule({
	declarations: [
		KeysPipe,
		FilterPipe,
		ObjectFilterPipe,
<<<<<<< HEAD
		TimePipe
=======
		TimePipe,
    TranslatePipe
>>>>>>> master
	],
	imports: [],
	exports: [
		KeysPipe,
		FilterPipe,
		ObjectFilterPipe,
<<<<<<< HEAD
		TimePipe
=======
		TimePipe,
    TranslatePipe
>>>>>>> master
	]
})
export class PipesModule { }
