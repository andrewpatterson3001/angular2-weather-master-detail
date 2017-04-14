import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Forecast } from './forecast.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { darkSkyKey } from 'src/config.json'
const BASE_URL = 'https://api.darksky.net/forecast/#{DARKSKYKEY}/34.416918,-119.831111';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ForecastsService {
  constructor(private http: Http) {}

  loadForecast() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

}
