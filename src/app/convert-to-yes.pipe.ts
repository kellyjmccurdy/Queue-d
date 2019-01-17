import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToYes'
})
export class ConvertToYesPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, 'Yes');
    }

}