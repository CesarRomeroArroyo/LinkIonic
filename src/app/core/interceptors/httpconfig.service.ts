import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpconfigService implements HttpInterceptor {
  private pendingRequests: number = 0;
  private filteredUrlPatterns: RegExp[] = [];
  private pendingRequestsStatus: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.pendingRequestsStatus.next(true);
      }
      if ((event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel)) {
        this.pendingRequestsStatus.next(false);
      }
    });
  }

  private shouldBypass(url: string): boolean {
    return this.filteredUrlPatterns.some(e => {
      return e.test(url);
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const shouldBypass = this.shouldBypass(req.url);

    const tokenUser = JSON.parse(localStorage.getItem('TOKEN'));

    if (tokenUser?.authToken) {
      req = req.clone({ headers: req.headers.set('Authorization', tokenUser.authToken) });
    }

    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    if (!shouldBypass) {
      this.pendingRequests++;

      if (1 === this.pendingRequests) {
        this.pendingRequestsStatus.next(true);
      }
    }

    return next.handle(req).pipe(
      map(event => {
        return event
      }),
      catchError(error => {
        return throwError(error)
      }),
      finalize(() => {
        if (!shouldBypass) {
          this.pendingRequests--;

          if (0 === this.pendingRequests) {
            this.pendingRequestsStatus.next(false);
          }
        }
      })
    );
  }
}
