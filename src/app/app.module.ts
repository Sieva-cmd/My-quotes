import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
// import {MatCardHarness} from '@angular/material/card/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayQouteComponent } from './display-qoute/display-qoute.component';
import { DisplayDetailComponent } from './display-detail/display-detail.component';
import { ChangeBackgroundColorDirective } from './change-background-color.directive';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayQouteComponent,
    DisplayDetailComponent,
    ChangeBackgroundColorDirective,
    FormComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
