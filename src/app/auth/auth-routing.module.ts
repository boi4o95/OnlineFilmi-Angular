import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const authRoutes: Routes = [
    { path: 'login', component: SigninComponent },
    { path: 'register', component: SignupComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }
