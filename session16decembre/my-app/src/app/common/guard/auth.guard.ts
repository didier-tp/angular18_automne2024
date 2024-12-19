import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionServiceService } from '../service/session-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const sessionService = inject(SessionServiceService);
  // let token = sessionStorage.getItem('access_token');
  //if(token != "")
  if(sessionService.user.isConnected)
    return true;
  else
    //return false;
     return router.parseUrl('/ngr-not-authorized');
};
