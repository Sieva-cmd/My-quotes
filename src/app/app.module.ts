import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
// import {MatCardHarness} from '@angular/material/card/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayQouteComponent } from './display-qoute/display-qoute.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayQouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule
    // MatCardHarness
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
