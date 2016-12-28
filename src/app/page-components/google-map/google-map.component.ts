import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-googlemap',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent {
    @Input() lat: number;
    @Input() lng: number;
}
