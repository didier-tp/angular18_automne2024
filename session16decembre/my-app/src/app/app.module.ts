import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { ToFixedPipe } from './common/pipe/to-fixed.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
//import { ReservationComponent } from './reservation/reservation.component';
import { TogglePanelComponent } from './common/component/toggle-panel/toggle-panel.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTabsModule} from '@angular/material/tabs';
import { BorderOverDirective } from './common/directive/border-over.directive';
import { ConversionComponent } from './conversion/conversion.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { SeuilComponent } from './demo/seuil/seuil.component';
import { ListProdComponent } from './demo/list-prod/list-prod.component';
import { RegletteComponent } from './demo/reglette/reglette.component';
import { ZzComponent } from './demo/zz/zz.component';
import { myAuthInterceptor } from './common/interceptor/my-auth.interceptor';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

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
    WelcomeComponent,
    LoginComponent,
    //ReservationComponent,
    TogglePanelComponent,
    BorderOverDirective,
    ConversionComponent,
    DemoComponent,
    SeuilComponent, 
    ListProdComponent,
    ZzComponent,
    RegletteComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule , ReactiveFormsModule , MatTabsModule
  ],
  providers: [
    provideAnimationsAsync() , provideHttpClient(withInterceptors([myAuthInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
