import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ng2-bootstrap/carousel';


import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, PlacesService, PartnerService } from './_services';
import { HomeComponent } from './page-components/home';
import { LoginComponent } from './page-components/login';
import { RegisterComponent } from './page-components/register';
import { PlaceListComponent } from './page-components/places-list';
import { PartnerListComponent } from './page-components/partners-list';
import { CreatePlaceComponent } from './page-components/create-place';
import { CreatePartnerComponent } from './page-components/create-partner';
import { StarRatingComponent } from './page-components/star-rating/star-rating.component';
import { FilterPlaces, SortPlacesBy } from './_pipes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        CarouselModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        PlaceListComponent,
        CreatePlaceComponent,
        CreatePartnerComponent,
        PartnerListComponent,
        StarRatingComponent,
        FilterPlaces,
        SortPlacesBy
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        PlacesService,
        PartnerService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
