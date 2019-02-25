import { NgModule } from '@angular/core'
import { requestForFilms } from './index';
import { FormsModule } from '@angular/forms';
import { RequestService } from './request.service';
import { CommonModule } from '@angular/common';
import { RequestRoutingModule } from './request-routing.module';




@NgModule({
    declarations: [
        ...requestForFilms
    ],
    imports: [
        CommonModule,
        FormsModule,
        RequestRoutingModule
    ],
    providers: [
        RequestService
    ]
})
export class RequestModule { }