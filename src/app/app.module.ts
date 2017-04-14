import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestAppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import { ForecastsService } from './shared/'

import { AppComponent } from './app.component';
import { ForecastsComponent } from './forecasts/forecasts.component'

@NgModule({
  declarations: [
    AppComponent,
    ForecastsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    Ng2RestAppRoutingModule
  ],
  providers: [ForecastsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
