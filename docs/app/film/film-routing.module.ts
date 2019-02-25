import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminGuard } from '../auth/guards/admin.guard';
import { AllFilmComponent } from './all-film/all-film.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { CreateFilmComponent } from './create-film/create-film.component';
import { EditFilmComponent } from './edit-film/edit-film.component';

const filmRoutes: Routes = [
    { path: '', component: AllFilmComponent, canActivate: [AuthGuard] },
    { path: 'details/:_id', component: FilmDetailsComponent, canActivate: [AuthGuard] },
    { path: 'create', component: CreateFilmComponent, canActivate: [AdminGuard] },
    { path: 'edit/:_id', component: EditFilmComponent, canActivate: [AdminGuard] }
]

@NgModule({
    imports: [
        RouterModule.forChild(filmRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FilmRoutingModule { }
