import { BehaviorSubject, take } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { WeatherService } from 'src/app/services/weather.service';
import { City } from 'src/app/interfaces/city';
import { WeatherData } from 'src/app/interfaces/weather';
import { HourlyWeather } from './../../../interfaces/weather';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss'],
})
export class CityItemComponent implements OnInit {
  @Input() city!: City;

  currentDate = new Date();

  weather$ = new BehaviorSubject<WeatherData>(null!);
  hourlyWeather$ = new BehaviorSubject<HourlyWeather>(null!);

  constructor(protected weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService
      .getWeather(this.city.name)
      .pipe(take(1))
      .subscribe((data) => {
        this.weather$.next(data);
      });
  }

  onPanelChange(event: NgbPanelChangeEvent) {
    if (event.nextState && !this.hourlyWeather$.value) {
      this.weatherService
        .getHourlyWeather(this.city.lat, this.city.long)
        .pipe(take(1))
        .subscribe((data) => {
          this.hourlyWeather$.next(data);
        });
    }
  }
}
