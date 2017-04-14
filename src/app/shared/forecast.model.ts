export interface Forecast {
  latitude: number;
  longitude: number;
  timezone?: string;
  currently?: any;
  minutely?: any;
  hourly?: any;
  daily?: any;
}
