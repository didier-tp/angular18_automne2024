
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest }
  from '@angular/common/http';
import { Observable } from 'rxjs';

export const myAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const platform = inject(PLATFORM_ID);
  let token : string | null = "";
  if (isPlatformBrowser(platform)) {
       token = sessionStorage.getItem('access_token');
  }
   const authReq = req.clone({
       headers: req.headers.set('Authorization', 'Bearer ' + token)
     });
return next(authReq);
};

/*

@Injectable()
export class MyAuthInterceptor implements HttpInterceptor {
  private readonly platform = inject(PLATFORM_ID);

  intercept(request: HttpRequest<unknown>, next: HttpHandler)
    : Observable<HttpEvent<unknown>> {
      let token : string | null = "";
      if (isPlatformBrowser(this.platform)) {
           token = sessionStorage.getItem('access_token');
      }
    const authReq = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + token)
    });
    return next.handle(authReq);
  }
}

*/