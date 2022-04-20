import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EMPTY, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from 'src/app/services/weather.service';
import { cities } from 'src/assets/api/cities';
import { WeatherData } from 'src/app/interfaces/weather';

import { CityItemComponent } from './city-item.component';
import { City } from 'src/app/interfaces/city';

describe('CityItemComponent', () => {
  let component: CityItemComponent;
  let fixture: ComponentFixture<CityItemComponent>;
  let service: WeatherService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [WeatherService],
      declarations: [CityItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityItemComponent);
    service = TestBed.inject(WeatherService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make a request when ngOnInit', () => {
    const spy = spyOn(service, 'getWeather').and.callFake(() => {
      return EMPTY;
    });

    component.city = cities[0];
    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should update weather$ value after ngOnInit', () => {
    const weather: WeatherData = {
      coord: { lon: -9.1333, lat: 38.7167 },
      weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
      base: 'stations',
      main: {
        temp: 11.79,
        feels_like: 10.85,
        temp_min: 10.67,
        temp_max: 12.82,
        pressure: 1011,
        humidity: 70,
      },
      visibility: 10000,
      wind: { gust: 0, speed: 8.75, deg: 360 },
      clouds: { all: 20 },
      dt: 1650440617,
      sys: {
        type: 1,
        id: 6901,
        country: 'PT',
        sunrise: 1650433997,
        sunset: 1650482235,
        message: 6,
      },
      timezone: 3600,
      id: 2267057,
      name: 'Lisbon',
      cod: 200,
    };

    const spy = spyOn(service, 'getWeather').and.returnValue(of(weather));

    component.city = cities.pop() as City;
    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
    expect(component.weather$.value).toBe(weather);
  });
});
