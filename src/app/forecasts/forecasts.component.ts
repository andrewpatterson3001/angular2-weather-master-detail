import { Component, OnInit } from '@angular/core';
import { ForecastsService, Forecast } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {
  latitude: number;
  longitude: number;
  hourlySummary: string;
  currentTemp: number;


  constructor(
    private forecastsService: ForecastsService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.forecastsService.loadForecast()
      .then(forecast => {
        this.latitude = forecast.latitude;
        this.longitude = forecast.longitude;
        this.currentTemp = forecast.currently.apparentTemperature;
        this.hourlySummary = forecast.hourly.summary;
      });
  }

}

