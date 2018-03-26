import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './app-http-interceptor.service';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import {SubjectService} from './set-data.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    HttpClientModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.doubleBounce,
      backdropBackgroundColour: 'rgba(255,255,255,0.8)',
      backdropBorderRadius: '4px',
      primaryColour: '#cc0000',
      secondaryColour: '#cc0000',
      tertiaryColour: '#cc0000'
  })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    AuthInterceptorService,
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
