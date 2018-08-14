import { NgModule } from '@angular/core'
import { filmComponet } from './index';
import { FormsModule } from '@angular/forms';
import { FilmService } from './film.service';
import { SafePipeModule } from 'safe-pipe';
import { FilmRoutingModule } from './film-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        ...filmComponet
    ],
    imports: [
        CommonModule,
        FormsModule,
        FilmRoutingModule,
        SafePipeModule
    ],
    providers: [
        FilmService
    ]
})
export class FilmModule { }