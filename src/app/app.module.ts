import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ClientModule } from './client/client.module';
import { EstimateModule } from './estimate/estimate.module';
import { AppRoutingModule } from './app-routing.module';

import {AuthGuard, AuthHttpInterceptor, AuthModule} from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { LoginButtonComponent } from './auth/login-button/login-button.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: environment.authModule.domain,
      clientId: environment.authModule.clientId,
      scope: 'openid profile email'
    }),
    ClientModule,
    EstimateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
