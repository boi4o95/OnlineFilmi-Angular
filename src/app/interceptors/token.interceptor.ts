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
                debugger
                if (event instanceof HttpResponse && req.url.endsWith('login')) {
                    this.successfulLogin(event['body'])
                }

                if (event instanceof HttpResponse && req.url.endsWith(appKey)) {
                    this.router.navigate(['/auth/login'])
                }
            }))
    }

    private successfulLogin(data) {
        localStorage.setItem('authtoken', data._kmd.authtoken)
        localStorage.setItem('username', data.username)
        this.router.navigate([''])
    }

}