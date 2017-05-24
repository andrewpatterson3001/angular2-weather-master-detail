import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestAppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { ForecastsService, AuthService } from './shared/'

import { AppComponent } from './app.component';
import { ForecastsComponent } from './forecasts/forecasts.component'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { AppFooterComponent } from './app-footer/app-footer.component'
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    ForecastsComponent,
    ToolbarComponent,
    AppFooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    Ng2RestAppRoutingModule
  ],
  providers: [ForecastsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
