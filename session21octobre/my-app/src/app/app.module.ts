import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToFixedPipe } from './common/pipe/to-fixed.pipe';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DemoComponent } from './demo/demo.component';
import { RegletteComponent } from './demo/reglette/reglette.component';
import { SeuilComponent } from './demo/seuil/seuil.component';
import { ListProdComponent } from './demo/list-prod/list-prod.component';
import { ZzComponent } from './demo/zz/zz.component';
import {MatTabsModule} from '@angular/material/tabs';


import { TogglePanelComponent } from './common/component/toggle-panel/toggle-panel.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BorderOverDirective } from './common/directive/border-over.directive';
import { ConversionComponent } from './conversion/conversion.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    ToFixedPipe,
    LoginComponent,
    WelcomeComponent,
    ReservationComponent,
    DemoComponent,
    RegletteComponent,
    SeuilComponent,
    ListProdComponent,
    ZzComponent,
    TogglePanelComponent,
    BorderOverDirective,
    ConversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
