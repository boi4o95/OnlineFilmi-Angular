import { NgModule } from '@angular/core'
import { filmComponet } from './index';
import { FormsModule } from '@angular/forms';
import { FilmService } from './film.service';
import { SafePipeModule } from 'safe-pipe';
import { FilmRoutingModule } from './film-routing.module';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'
import { CustomFormsModule } from 'ng2-validation';


@NgModule({
    declarations: [
        ...filmComponet
    ],
    imports: [
        CommonModule,
        NgxPaginationModule,
        FormsModule,
        FilmRoutingModule,
        SafePipeModule,
        CustomFormsModule
    ],
    providers: [
        FilmService
    ]
})
export class FilmModule { }