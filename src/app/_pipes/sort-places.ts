import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortPlacesBy'
})
export class SortPlacesBy implements PipeTransform {
    transform(places: any[], sortBy: string, orderBy: string) {
        if (sortBy) {
            if (orderBy === 'Ascending') {
                return places.sort((a, b) => {
                    return a[sortBy].toString().localeCompare(b[sortBy].toString());
                });
            }else{
                 return places.sort((a, b) => {
                    return b[sortBy].toString().localeCompare(a[sortBy].toString());
                });
            }
        } else {
            return places.sort();
        }
    }
}