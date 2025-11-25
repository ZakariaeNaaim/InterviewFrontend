import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from '../services/error.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private errorService: ErrorService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error('API Error:', err);

        let userMessage = 'An unexpected error occurred. Please try again.';

        if (err.status === 0) {
          userMessage = 'Unable to reach the server. Check your connection.';
        } else if (err.error) {
          if (typeof err.error === 'object') {
            if ('isSuccess' in err.error && err.error.message) {
              userMessage = err.error.message;
            } else if (err.error.message) {
              userMessage = err.error.message;
            }
          } else if (typeof err.error === 'string') {
            userMessage = err.error;
          }
        }

        this.errorService.showError(userMessage);

        return throwError(() => err);
      })
    );
  }
}
