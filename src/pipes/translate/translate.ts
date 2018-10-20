import { Pipe, PipeTransform } from '@angular/core';
import { TranslateServiceProvider } from '../../providers/translate-service/translate-service';

/**
 * Generated class for the TranslatePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'translate',
  pure: false

})
export class TranslatePipe implements PipeTransform {
  
  constructor(
    private translateService: TranslateServiceProvider,
  ) {

  }

  transform(value: string) {
    let translated = this.translateService.find(value);
    return translated;
  }
}
