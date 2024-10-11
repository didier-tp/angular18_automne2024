import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

export const myAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const platform = inject(PLATFORM_ID);
  let token = null;
  if (isPlatformBrowser(platform)) {
      token = sessionStorage.getItem('access_token');
  }
  if (token && token != "" && token != "null") {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });
    console.log("MyAuthInterceptor , adding Bearer token=" + token)
    return next(authReq);
  } else
    return next(req);
};
