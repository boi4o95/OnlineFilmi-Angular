import { HttpResponse, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor (private toastr : ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((err : HttpErrorResponse) => {
            err.error.errors
            switch(err.status){
                case 401:
                let message = err.error.description
                this.toastr.error(message, "Warning!")
                break;
            }

            return throwError(err)
        }))
    }

}