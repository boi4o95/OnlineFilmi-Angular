import { NgModule } from '@angular/core'
import { authComponents } from './index';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        ...authComponents
    ],
    imports: [
        FormsModule,
        AuthRoutingModule
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule { }