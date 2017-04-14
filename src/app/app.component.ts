import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather App';
  thanks = 'Powered by Dark Sky'
  links = {
    forecasts: ['/forecasts']
  }
}
