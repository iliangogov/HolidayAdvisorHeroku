import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlacesService {
    private url: string = 'http://localhost:3000/api/places';

    constructor(private http: Http) { }

    createPlace(place) {
        return this.http.post(this.url, place)
            .map((res: Response) => res.json())
    }

    getAll() {
        return this.http.get(this.url)
            .map((res: Response) => res.json())
    }

    updatePlace(place){
        return this.http.put(this.url,place)
            .map((res: Response) => res.json())
    }
}