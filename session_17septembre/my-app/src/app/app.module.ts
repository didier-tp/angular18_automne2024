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

import { LOCALE_ID} from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { MynumberPipe } from './common/pipe/mynumber.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TogglePanelComponent } from './common/component/toggle-panel/toggle-panel.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTabsModule} from '@angular/material/tabs';
import { ConversionComponent } from './conversion/conversion.component';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { DeviseComponent } from './devise/devise.component';
registerLocaleData(localeFr);
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { myAuthInterceptor} from './common/interceptor/my-auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    MynumberPipe,
    WelcomeComponent,
    LoginComponent,
    ReservationComponent,
    TogglePanelComponent,
    ConversionComponent,
    DeviseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [
   { provide:LOCALE_ID, useValue: 'fr-FR'},
    provideClientHydration(),
    provideAnimationsAsync(),
    /*
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAuthInterceptor,
      multi: true
      },
    provideHttpClient( withInterceptorsFromDi() )
    */
    provideHttpClient( withInterceptors([myAuthInterceptor]) )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
