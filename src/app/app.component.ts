import { Component } from '@angular/core';
import { MdToolbarModule, MdCardModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather App';
  links = {
    forecasts: ['/forecasts']
  }
}
