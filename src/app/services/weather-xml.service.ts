import { Injectable } from '@angular/core';
import { HourlyWeather, WeatherData } from '../interfaces/weather';
import { Observable, of } from 'rxjs';
import { TEST_HOURLY_WEATHER, TEST_WEATHER_DATA } from '../mocks/test-data';

@Injectable({
  providedIn: 'root',
})
export class WeatherXMLService {
  getWeather(): Observable<WeatherData> {
    return of(TEST_WEATHER_DATA as WeatherData);
  }

  getHourlyWeather(lat: number, lng: number): Observable<HourlyWeather> {
    return of((TEST_HOURLY_WEATHER as unknown) as HourlyWeather);
  }
}
