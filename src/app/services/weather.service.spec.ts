import { HttpClientModule, HttpParams } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { cities } from 'src/assets/api/cities';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

describe('Service: Weather', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [WeatherService],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(WeatherService);
  });

  it('should ...', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));

  it('#getWeather should use GET to retrieve data', () => {
    const city = cities[0];
    service.getWeather(city.name).subscribe();

    const params = new HttpParams()
      .set('q', `${city.name}`)
      .set('appid', API_KEY)
      .set('units', 'metric');

    const testRequest = httpTestingController.expectOne(`${API_URL}/weather?` + params);

    expect(testRequest.request.method).toEqual('GET');
  });

  it('#getHourlyWeather should use GET to retrieve data', () => {
    const city = cities[0];
    service.getHourlyWeather(city.lat, city.long).subscribe();

    const params = new HttpParams()
      .set('lat', `${city.lat}`)
      .set('lon', `${city.long}`)
      .set('appid', API_KEY)
      .set('units', 'metric')
      .set('exclude', 'daily');

    const testRequest = httpTestingController.expectOne(`${API_URL}/onecall?` + params);

    expect(testRequest.request.method).toEqual('GET');
  });
});
