import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule } from '@angular/forms';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HeaderComponent,
    FooterComponent,
    CalculatriceComponent,
    TvaComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
