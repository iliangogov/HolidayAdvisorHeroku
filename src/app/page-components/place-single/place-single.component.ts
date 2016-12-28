import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../_models';
import { PlacesService } from '../../_services';

@Component({
    templateUrl: './place-single.component.html'
})
export class PlaceSingleComponent {
    @Input() place: Place;
    routParams: any;
    mode: string;

    constructor(private route: ActivatedRoute, private placesService: PlacesService) {
        this.place = new Place;
    }

    ngOnInit() {
        // get URL parameters
        this.route
            .params
            .subscribe(params => {
                // Récupération des valeurs de l'URL
                this.routParams = params['name']; // --> Name must match wanted paramter
            });
        console.log(this.routParams);
        this.placesService.getByName(this.routParams)
            .subscribe(placeJson => this.place = placeJson);
    }

    get img(): string {
        return this.place.img;
    }

    get name(): string {
        return this.place.name;
    }

    get rating(): number {
        return this.place.rating;
    }
}