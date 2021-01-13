import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {KeycloakAngularModule,KeycloakService} from "keycloak-angular";

import { AppComponent } from './app.component';
import {initializeKeycloak} from "../app/utils/app.init";
import {loadConfigService} from '../config/app.config.service';
import {AppConfig} from '../config/app.config';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

export function initializeConfig(loadConfigService: loadConfigService)
{
  return () => {
    return loadConfigService.load();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: AppConfig,
      useExisting:loadConfigService,
      deps: [HttpClient],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      multi: true,
      deps: [loadConfigService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
