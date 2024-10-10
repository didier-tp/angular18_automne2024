import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DemoComponent } from './demo/demo.component';
import { ListProdComponent } from './demo/list-prod/list-prod.component';
import { RegletteComponent } from './demo/reglette/reglette.component';
import { SeuilComponent } from './demo/seuil/seuil.component';
import { ZzComponent } from './demo/zz/zz.component';
import { TogglePanelComponent } from './common/component/toggle-panel/toggle-panel.component';

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
    LoginComponent,
    ReservationComponent,
    DemoComponent, 
    RegletteComponent,
    SeuilComponent,
    ListProdComponent,
    ZzComponent,
    TogglePanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
