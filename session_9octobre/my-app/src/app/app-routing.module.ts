import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DemoComponent } from './demo/demo.component';
import { ConversionComponent } from './conversion/conversion.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { authGuard } from './common/guard/auth.guard';

const routes: Routes = [
  { path: 'ngr-welcome', component: WelcomeComponent },
 { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
 { path: 'ngr-login', component: LoginComponent },
 { path: 'ngr-basic', component: BasicComponent,
  children: [
    { path: 'tva', component: TvaComponent },
    { path: 'calculatrice/:mode', component: CalculatriceComponent },
    { path: '', redirectTo: 'tva', pathMatch: 'prefix'}
    ]
 },
 { path: 'ngr-reservation', component: ReservationComponent },
 { path: 'ngr-demo', component: DemoComponent },
 { path: 'ngr-conversion', component: ConversionComponent ,
         canActivate : [ authGuard ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
