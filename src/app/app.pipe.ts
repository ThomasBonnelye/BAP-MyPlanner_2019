import { Pipe } from '@angular/core';

@Pipe({
    name: 'limitTo'
})
export class TruncatePipe {
    transform(value: string, args: string) : string {
        // let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
        // let trail = args.length > 1 ? args[1] : '...';
        let firstLetter = value.charAt(0).toUpperCase();
        let stringWithoutFirstLetter = value.slice(1).toLowerCase();
        let valueFinal = firstLetter + stringWithoutFirstLetter;
        let limit = args ? parseInt(args, 10) : 10;
        let trail = '...';

        return valueFinal.length > limit ? valueFinal.substring(0, limit) + trail : valueFinal;
    }
}