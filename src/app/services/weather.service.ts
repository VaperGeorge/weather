import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HourlyWeather, WeatherData } from '../interfaces/weather';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(protected http: HttpClient) {}

  getWeather(cityName: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', `${cityName}`)
      .set('appid', API_KEY)
      .set('units', 'metric');

    return this.http.get<WeatherData>(`${API_URL}/weather`, { params });
  }

  getHourlyWeather(lat: number, lng: number): Observable<HourlyWeather> {
    const params = new HttpParams()
      .set('lat', `${lat}`)
      .set('lon', `${lng}`)
      .set('appid', API_KEY)
      .set('units', 'metric')
      .set('exclude', 'daily');

    return this.http.get<HourlyWeather>(`${API_URL}/onecall`, { params });
  }
}
