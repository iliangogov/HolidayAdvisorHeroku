import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './page-components/home';
import { AboutComponent } from './page-components/about';
import { LoginComponent } from './page-components/login';
import { RegisterComponent } from './page-components/register';
import { ProfileComponent } from './page-components/profile';
import { PlaceListComponent } from './page-components/places-list';
import { CreatePlaceComponent } from './page-components/create-place';
import { CreatePartnerComponent } from './page-components/create-partner';
import { PartnerListComponent } from './page-components/partners-list';
import { PlaceSingleComponent } from './page-components/place-single';
import { UsersListComponent} from  './page-components/users-list';
import { OtherPersonProfileComponent } from './page-components/other-person-profile';
import { UpdateProfileComponent } from './page-components/update-profile';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'users', component: UsersListComponent },
    { path: 'profile/:username', component: OtherPersonProfileComponent},
    { path: 'update', component: UpdateProfileComponent},
    { path: 'places', component: PlaceListComponent },
    { path: 'places/:name', component: PlaceSingleComponent },
    { path: 'createplace', component: CreatePlaceComponent },
    { path: 'partners', component: PartnerListComponent },
    { path: 'createPartner', component: CreatePartnerComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);