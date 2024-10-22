import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DemoComponent } from './demo/demo.component';
import { ConversionComponent } from './conversion/conversion.component';

const routes: Routes = [
  { path: "ngr-welcome" , component : WelcomeComponent},
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
  { path: "ngr-basic" , component : BasicComponent },
  { path: "ngr-login" , component : LoginComponent},
  { path: "ngr-reservation" , component : ReservationComponent},
  { path: "ngr-demo" , component : DemoComponent},
  { path: "ngr-conversion" , component : ConversionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
