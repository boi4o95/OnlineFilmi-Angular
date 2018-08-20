import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminGuard } from '../auth/guards/admin.guard';
import { CreateRequestComponent } from './create-request/create-request.component';
import { RequestTableComponent } from './request-table/request-table.component';

const requestRoutes: Routes = [
    { path: 'create', component: CreateRequestComponent, canActivate: [AuthGuard] },
    { path: 'list', component: RequestTableComponent, canActivate: [AdminGuard] }
]

@NgModule({
    imports: [
        RouterModule.forChild(requestRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RequestRoutingModule { }
