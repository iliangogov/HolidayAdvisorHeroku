import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PartnerService {
    private url: string = 'http://localhost:3000/api/partners';

    constructor(private http: Http) { }

    createPartner(partner) {
        return this.http.post(this.url, partner)
            .map((res: Response) => res.json());
    }

    getAll() {
        return this.http.get(this.url)
            .map((res: Response) => res.json());
    }
}
