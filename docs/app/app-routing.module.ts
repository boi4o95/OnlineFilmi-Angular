import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contact/contacts.component';
import { AuthModule } from './auth/auth.module';
import { FilmModule } from './film/film.module';
import { RequestModule } from './requestForFilms/request.module';



const route : Routes = [
    { path: '', component: HomeComponent },
    { path:'auth', loadChildren: () => AuthModule },
    { path: 'films', loadChildren: () => FilmModule },
    { path: 'request', loadChildren: () => RequestModule },
    { path: 'contact', component: ContactsComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(route) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}