import { NgModule } from '@angular/core'
import { filmComponet } from './index';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilmService } from './film.service';
import { SafePipeModule } from 'safe-pipe';


@NgModule({
    declarations: [
        ...filmComponet
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        SafePipeModule
    ],
    providers: [
        FilmService
    ]
})
export class FilmModule { }