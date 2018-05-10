import { AppRoutingModule } from './app-routing/app-routing.module';
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExternalDefensesModule } from './external-defenses/external-defenses.module';
import { InfoWindowComponent } from './info-window/info-window.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InternalDefensesModule,
    ExternalDefensesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
