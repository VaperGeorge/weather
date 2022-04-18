import { HourlyWeather } from './../../../interfaces/weather';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

import { WeatherService } from 'src/app/services/weather.service';
import { City } from 'src/app/interfaces/city';
import { WeatherData } from 'src/app/interfaces/weather';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss'],
})
export class CityItemComponent implements OnInit {
  @Input() city: City;

  weather$ = new BehaviorSubject<WeatherData>(null);
  hourlyWeather$ = new BehaviorSubject<HourlyWeather>(null);

  constructor(protected weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather(this.city.name).subscribe((data) => {
      console.log(data);
      this.weather$.next(data);
    });
  }

  onPanelChange(event: any) {
    if (event.nextState && !this.hourlyWeather$.value) {
      this.weatherService.getHourlyWeather(this.city.name).subscribe((data) => {
        console.log(data);
        this.hourlyWeather$.next(data);
      });
    }
  }
}
