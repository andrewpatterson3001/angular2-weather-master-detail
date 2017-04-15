import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Forecast } from './forecast.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { darkSkyKey } from './config'
const BASE_URL = "https://crossorigin.me/https://api.darksky.net/forecast/" + darkSkyKey + "/34.416918,-119.831111";
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ForecastsService {
  constructor(private http: Http) {}

  loadForecast(): Promise<Forecast> {
    return this.http.get(BASE_URL)
      .toPromise()
      .then(res => res.json() as Forecast)
  }

}
