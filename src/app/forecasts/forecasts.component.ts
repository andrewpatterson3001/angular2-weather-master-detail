import { Component, OnInit } from '@angular/core';
import { ForecastsService, Forecast } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {
  forecast: Forecast;

  constructor(
    private forecastsService: ForecastsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.forecastsService.loadForecast()
      .subscribe(forecast => {
        this.forecast = forecast;
      });
  }

}

