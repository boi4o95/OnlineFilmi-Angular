import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { AuthGuard } from './auth/guards/auth.guard';
import { HomeComponent } from './home/home.component';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

import { AllFilmComponent } from './film/all-film/all-film.component';
import { CreateFilmComponent } from './film/create-film/create-film.component';

const route : Route[] = [
    { path: '', component: HomeComponent, canActivate: [ AuthGuard ]},
    { path:'auth', children: [
        { path: 'login', component: SigninComponent },
        { path: 'register', component: SignupComponent }
    ]},
    { path: 'films', children: [
        { path: '', component: AllFilmComponent },
        { path: 'create', component: CreateFilmComponent }
    ]}
]

@NgModule({
    imports: [ RouterModule.forRoot(route) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}