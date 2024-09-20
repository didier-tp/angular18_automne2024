import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BasicComponent } from './basic/basic.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ConversionComponent } from './conversion/conversion.component';
import { DeviseComponent } from './devise/devise.component';
import { TvaComponent } from './basic/tva/tva.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';

const routes: Routes = [
  { path : "ngr-welcome" , component : WelcomeComponent},
  { path : "ngr-login" , component : LoginComponent} ,
  { path : "ngr-basic" , component : BasicComponent ,
    children: [
      { path: 'tva', component: TvaComponent },
      { path: 'calculatrice/:mode', component: CalculatriceComponent },
      { path: '', redirectTo: 'tva', pathMatch: 'prefix'}
      ]
  },
  { path: 'ngr-conversion', component: ConversionComponent } ,
  { path : "ngr-reservation" , component : ReservationComponent},
  { path : "ngr-devise" , component : DeviseComponent},
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
