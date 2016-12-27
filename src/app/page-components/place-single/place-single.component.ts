import { Component, Input } from '@angular/core';
import {Place} from '../../_models';

@Component({
    templateUrl: './place-list.component.html'
})
export class PlaceSingleComponent {
    @Input() place: Place;
    
    get img():string{
        return this.place.img;
    }

    get name():string{
        return this.place.name;
    }

    get rating():number{
        return this.place.rating;
    }
}