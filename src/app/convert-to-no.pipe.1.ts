import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToNo'
})
export class ConvertToNoPipe implements PipeTransform {

    transform(value: any, character: any): string {
        value = String(value);
        character = String(character);
        if (typeof value == "string")
        {
            return value.replace(character, 'No');
        }
        
    }

}