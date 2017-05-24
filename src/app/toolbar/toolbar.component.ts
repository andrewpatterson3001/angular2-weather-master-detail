import {Component} from '@angular/core';
import { AuthService } from '../shared';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  title = 'Weather App'
  links = {
    forecasts: ['/forecasts'],
    about: ['/about']
  }

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
