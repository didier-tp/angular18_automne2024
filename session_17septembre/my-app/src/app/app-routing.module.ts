import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
  { path : "ngr-welcome" , component : WelcomeComponent},
  { path : "ngr-login" , component : LoginComponent} ,
  { path : "ngr-basic" , component : BasicComponent},
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
