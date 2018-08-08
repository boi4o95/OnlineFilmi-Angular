import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/guards/auth.guard';

const route : Route[] = [
    { path: '', component: HomeComponent, canActivate: [ AuthGuard ]},
    { path:'auth', children: [
        { path: 'login', component: SigninComponent},
        { path: 'register', component: SignupComponent}
    ] }
]

@NgModule({
    imports: [ RouterModule.forRoot(route) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}