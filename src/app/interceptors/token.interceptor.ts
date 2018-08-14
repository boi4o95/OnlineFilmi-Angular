import { HttpResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'

const appKey = "kid_B1GOKdwHX"
const appSecret = "e677edfbd0344735b9e0f3731f1ae0ec"

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.endsWith('login') || req.url.endsWith(appKey)) {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type': 'application/json'
                }
            })
        } else {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json'
                }
            })
        }

        return next.handle(req)
            .pipe(tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && req.url.endsWith('login')) {
                    this.successfulLogin(event['body'])
                    this.toastr.success("Login successful.", "Success!")
                }

                if (event instanceof HttpResponse && req.url.endsWith(appKey)) {
                    this.toastr.success("Register successful.", "Success!")
                    this.router.navigate(['/auth/login'])
                }

                if (event instanceof HttpResponse && req.url.endsWith('films') && req.method.endsWith('POST')) {
                    this.toastr.success("Create film success.", "Success!")
                    this.router.navigate(['/films/all'])
                }

                if (event instanceof HttpResponse && req.method.endsWith('DELETE')) {
                    this.toastr.success("Delete film success.", "Success!")
                    this.router.navigate(['/'])
                }
                
                if (event instanceof HttpResponse && req.method.endsWith('PUT')) {
                    this.toastr.success("Edit film success.", "Success!")
                    this.router.navigate(['/films/all'])
                }
            }))
    }

    private successfulLogin(data) {
        localStorage.setItem('authtoken', data._kmd.authtoken)
        localStorage.setItem('username', data.username)

        if (data._kmd.roles){
            localStorage.setItem('roles', data._kmd.roles)
        }

        this.router.navigate(['/films/all'])
    }

}