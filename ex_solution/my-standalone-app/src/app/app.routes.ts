import { Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';

export const routes: Routes = [
    { path: "ngr-welcome" , component : WelcomeComponent},
    { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
    { path: "ngr-basic" , component : BasicComponent },
    { path: "ngr-login" , component : LoginComponent },
    { path: "ngr-reservation" , component : ReservationComponent },
];
