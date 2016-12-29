import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './page-components/home';
import { LoginComponent } from './page-components/login';
import { RegisterComponent } from './page-components/register';
import { ProfileComponent } from './page-components/profile';
import { PlaceListComponent } from './page-components/places-list';
import { CreatePlaceComponent } from './page-components/create-place';
import { CreatePartnerComponent} from  './page-components/create-partner';
import { PartnerListComponent} from  './page-components/partners-list';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'places', component: PlaceListComponent },
    { path: 'createplace', component: CreatePlaceComponent },
    { path: 'partners', component : PartnerListComponent},
    { path: 'createPartner', component : CreatePartnerComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' },
    { path: '', redirectTo: 'home', pathMatch:'full'}
];

export const routing = RouterModule.forRoot(appRoutes);