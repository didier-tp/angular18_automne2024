import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
//import { ReservationComponent } from './reservation/reservation.component';
import { ConversionComponent } from './conversion/conversion.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: 'ngr-welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
  { path: 'ngr-login', component: LoginComponent },
  { path: 'ngr-basic', component: BasicComponent },
  //{ path: 'ngr-reservation', component: ReservationComponent },
  { path: 'ngr-m2', loadChildren: () => import('../m2/m2.module').then(m => m.M2Module)},
  { path: 'ngr-conversion', component: ConversionComponent } ,
  { path: 'ngr-demo', component: DemoComponent } ,
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
  ];
  //NB: les path peuvent éventuellement commencer par "ngr-" .
  //ceci permet en production, un éventuel filtrage d'url à un niveau
  //intermédiaire (ex: nginx)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
