import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { HeaderComponent } from './header/header.component';
import { HumanBodyComponent } from './human-body/human-body.component';
import { BeforeAfterComponent } from './before-after/before-after.component';
import { CovidWarningComponent } from './covid-warning/covid-warning.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { CountdownModule } from 'ngx-countdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpertsComponent } from './experts/experts.component';
import { ContainsComponent } from './contains/contains.component';
import { TimeForEffectComponent } from './time-for-effect/time-for-effect.component';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    HeaderComponent,
    HumanBodyComponent,
    BeforeAfterComponent,
    CovidWarningComponent,
    OrderFormComponent,
    ExpertsComponent,
    ContainsComponent,
    TimeForEffectComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CountdownModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
