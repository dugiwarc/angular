import { Injectable } from '@angular/core';

import { tap, filter } from 'rxjs/operators';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      withCredentials: true,
    });

    // return next.handle(modifiedReq).pipe(
    //   filter((val) => val.type === HttpEventType.Response),
    //   tap((val) => {
    //     if (val.type === HttpEventType.Sent) {
    //       console.log('Request has been sent');
    //     }

    //     if (val.type === HttpEventType.Response) {
    //       console.log('Response has been received', val);
    //     }
    //   })
    // );

    return next.handle(modifiedReq);
  }
}
