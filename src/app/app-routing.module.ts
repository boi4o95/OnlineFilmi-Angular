import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FilmModule } from './film/film.module';

const route : Routes = [
    { path: '', component: HomeComponent },
    { path:'auth', children: [
        { path: 'login', component: SigninComponent },
        { path: 'register', component: SignupComponent }
    ]},
    { path: 'films', loadChildren: () => FilmModule}
]

@NgModule({
    imports: [ RouterModule.forRoot(route) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}