import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'keepHtml', pure: false })
export class EscapeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }
// if html tag used convert it to text
    transform(content) {

        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}